import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import clsx from "clsx";
import { Button } from "./ui/button";
import { useRecaptcha } from "../contexts/RecaptchaContext";

type FormData = {
  name: string;
  phone: string;
  email: string;
  project: string;
  company: string;
};

type FormErrors = Partial<Record<keyof FormData, string>>;

type StatusState = { type: "success" | "error"; message: string } | null;

const initialFormState: FormData = {
  name: "",
  phone: "",
  email: "",
  project: "",
  company: "",
};

interface ContactModalProps {
  open: boolean;
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ open, onClose }) => {
  const { executeRecaptcha, isReady } = useRecaptcha();
  const [form, setForm] = useState<FormData>(initialFormState);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<StatusState>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [lastSubmitTime, setLastSubmitTime] = useState(0);
  const SUBMIT_COOLDOWN = 3000;
  const descriptionId = React.useId();

  useEffect(() => {
    if (!open) {
      setForm(initialFormState);
      setErrors({});
      setStatus(null);
      setIsSubmitting(false);
    }
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open, onClose]);

  if (!open) return null;

  const portalTarget =
    typeof document !== "undefined" && document.body ? document.body : null;

  if (!portalTarget) return null;

  const updateField = (field: keyof FormData, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const validate = (): FormErrors => {
    const nextErrors: FormErrors = {};

    if (!form.name.trim()) nextErrors.name = "Name is required.";
    if (!form.phone.trim()) {
      nextErrors.phone = "Phone number is required.";
    } else if (!/[0-9]/.test(form.phone)) {
      nextErrors.phone = "Phone number must include at least one digit.";
    }
    if (!form.email.trim()) {
      nextErrors.email = "Email address is required.";
    } else {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(form.email)) {
        nextErrors.email = "Enter a valid email address.";
      }
    }
    if (!form.project.trim()) nextErrors.project = "Please tell us about your project.";

    return nextErrors;
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus(null);

    if (Date.now() - lastSubmitTime < SUBMIT_COOLDOWN) {
      setStatus({
        type: "error",
        message: "Please wait a few seconds before submitting again.",
      });
      return;
    }

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    if (!executeRecaptcha || !isReady) {
      setStatus({ type: "error", message: "reCAPTCHA is not ready. Please try again in a moment." });
      return;
    }

    setIsSubmitting(true);
    let timeoutId: number | null = null;

    try {
      const recaptchaToken = await executeRecaptcha("enquiry");

      if (!recaptchaToken) {
        setStatus({ type: "error", message: "We couldn't verify you via reCAPTCHA. Please refresh and try again." });
        setIsSubmitting(false);
        return;
      }

      const controller = new AbortController();
      timeoutId = window.setTimeout(() => controller.abort(), 10000);

      const response = await fetch("/api/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: form.name.trim(),
          phone: form.phone.trim(),
          email: form.email.trim(),
          project: form.project.trim(),
          company: form.company,
          recaptchaToken,
        }),
        signal: controller.signal,
      });

      if (timeoutId) {
        window.clearTimeout(timeoutId);
        timeoutId = null;
      }

      const text = await response.text();
      let payload: any = null;
      try {
        payload = text ? JSON.parse(text) : null;
      } catch (error) {
        payload = null;
      }

      if (!response.ok) {
        const message = payload?.message || "Something went wrong while sending your enquiry.";
        throw new Error(message);
      }

      setStatus({
        type: "success",
        message: payload?.message || "Thanks for reaching out! We'll be in touch shortly.",
      });
      setForm(initialFormState);
      setLastSubmitTime(Date.now());
    } catch (error) {
      if (import.meta.env.DEV) {
        console.error("Failed to submit enquiry", error);
      }
      setStatus({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "We couldn't submit your enquiry. Please try again later.",
      });
      setLastSubmitTime(Date.now());
    } finally {
      // ensure timeout cleared if fetch throws or resolves early
      if (typeof timeoutId === "number") {
        window.clearTimeout(timeoutId);
      }
      setIsSubmitting(false);
    }
  };

  return createPortal(
    <div className="fixed inset-0 z-[100] flex min-h-screen items-center justify-center p-4 sm:p-6">
      <div
        className="absolute inset-0 bg-slate-900/70 backdrop-blur-sm"
        onClick={onClose}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="contact-modal-title"
        aria-describedby={descriptionId}
        className="relative z-10 flex w-full max-w-xl flex-col overflow-hidden rounded-3xl border border-rose-200/60 bg-white/95 shadow-2xl backdrop-blur dark:border-rose-800/70 dark:bg-slate-900 max-h-[calc(100vh-3rem)]"
      >
        <div className="flex items-start justify-between gap-4 border-b border-rose-100/60 bg-rose-50/70 px-6 py-5 dark:border-rose-900/60 dark:bg-rose-950/30">
          <div>
            <h2
              id="contact-modal-title"
              className="text-2xl font-semibold text-rose-900 dark:text-rose-100"
            >
              Contact Us
            </h2>
            <p
              id={descriptionId}
              className="mt-1 text-sm text-slate-600 dark:text-slate-300"
            >
              Tell us a little about your project and we’ll schedule time to speak.
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-slate-500 transition hover:text-rose-600 focus:outline-none"
            aria-label="Close contact form"
            type="button"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M4.22 4.22a.75.75 0 011.06 0L10 8.94l4.72-4.72a.75.75 0 111.06 1.06L11.06 10l4.72 4.72a.75.75 0 11-1.06 1.06L10 11.06l-4.72 4.72a.75.75 0 11-1.06-1.06L8.94 10 4.22 5.28a.75.75 0 010-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>

        <div className="relative px-6 py-6 overflow-y-auto">
          {isSubmitting && (
            <div className="absolute inset-0 z-20 flex items-center justify-center rounded-3xl bg-white/80 backdrop-blur-sm dark:bg-slate-900/80">
              <div className="flex items-center gap-3 text-rose-700 dark:text-rose-200">
                <svg
                  className="h-5 w-5 animate-spin"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                  />
                </svg>
                <span className="text-sm font-medium">Sending your enquiry…</span>
              </div>
            </div>
          )}

          {status?.type === "success" ? (
            <div className="space-y-4">
              <div className="rounded-2xl border border-emerald-200 bg-emerald-50/90 px-4 py-3 text-emerald-700 dark:border-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-200">
                {status.message}
              </div>
              <div className="flex justify-end gap-3">
                <Button
                  variant="secondary"
                  type="button"
                  onClick={() => setStatus(null)}
                >
                  Send another enquiry
                </Button>
                <Button type="button" onClick={onClose}>
                  Close
                </Button>
              </div>
            </div>
          ) : (
            <form className="space-y-4" onSubmit={handleSubmit} noValidate>
              {status?.type === "error" && (
                <div className="rounded-2xl border border-rose-200 bg-rose-50/80 px-4 py-3 text-rose-700 dark:border-rose-900 dark:bg-rose-950/40 dark:text-rose-200">
                  {status.message}
                </div>
              )}

              <div>
                <label className="text-sm font-semibold text-slate-800 dark:text-slate-100">
                  Name
                </label>
                <input
                  type="text"
                  autoComplete="name"
                  value={form.name}
                  onChange={(event) => updateField("name", event.target.value)}
                  className={clsx(
                    "mt-2 w-full rounded-2xl border bg-white px-4 py-2.5 text-sm text-slate-800 shadow-sm transition focus:border-rose-400 focus:outline-none focus:ring focus:ring-rose-200/70 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100 dark:focus:border-rose-500 dark:focus:ring-rose-500/30",
                    errors.name ? "border-rose-400 focus:border-rose-500" : "border-slate-200"
                  )}
                  placeholder="Your full name"
                />
                {errors.name && (
                  <p className="mt-2 text-sm text-rose-600 dark:text-rose-300">
                    {errors.name}
                  </p>
                )}
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="text-sm font-semibold text-slate-800 dark:text-slate-100">
                    Phone
                  </label>
                  <input
                    type="tel"
                    inputMode="tel"
                    autoComplete="tel"
                    value={form.phone}
                    onChange={(event) => updateField("phone", event.target.value)}
                    className={clsx(
                      "mt-2 w-full rounded-2xl border bg-white px-4 py-2.5 text-sm text-slate-800 shadow-sm transition focus:border-rose-400 focus:outline-none focus:ring focus:ring-rose-200/70 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100 dark:focus:border-rose-500 dark:focus:ring-rose-500/30",
                      errors.phone ? "border-rose-400 focus:border-rose-500" : "border-slate-200"
                    )}
                    placeholder="Include country code"
                  />
                  {errors.phone && (
                    <p className="mt-2 text-sm text-rose-600 dark:text-rose-300">
                      {errors.phone}
                    </p>
                  )}
                </div>

                <div>
                  <label className="text-sm font-semibold text-slate-800 dark:text-slate-100">
                    Email
                  </label>
                  <input
                    type="email"
                    autoComplete="email"
                    value={form.email}
                    onChange={(event) => updateField("email", event.target.value)}
                    className={clsx(
                      "mt-2 w-full rounded-2xl border bg-white px-4 py-2.5 text-sm text-slate-800 shadow-sm transition focus:border-rose-400 focus:outline-none focus:ring focus:ring-rose-200/70 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100 dark:focus:border-rose-500 dark:focus:ring-rose-500/30",
                      errors.email ? "border-rose-400 focus:border-rose-500" : "border-slate-200"
                    )}
                    placeholder="you@example.com"
                  />
                  {errors.email && (
                    <p className="mt-2 text-sm text-rose-600 dark:text-rose-300">
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label className="text-sm font-semibold text-slate-800 dark:text-slate-100">
                  Project details
                </label>
                <textarea
                  rows={4}
                  value={form.project}
                  onChange={(event) => updateField("project", event.target.value)}
                  className={clsx(
                    "mt-2 w-full rounded-2xl border bg-white px-4 py-2.5 text-sm text-slate-800 shadow-sm transition focus:border-rose-400 focus:outline-none focus:ring focus:ring-rose-200/70 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100 dark:focus:border-rose-500 dark:focus:ring-rose-500/30",
                    errors.project ? "border-rose-400 focus:border-rose-500" : "border-slate-200"
                  )}
                  placeholder="Share goals, timelines, or any questions you have"
                />
                {errors.project && (
                  <p className="mt-2 text-sm text-rose-600 dark:text-rose-300">
                    {errors.project}
                  </p>
                )}
              </div>

              <input
                type="text"
                name="company"
                value={form.company}
                onChange={(event) => updateField("company", event.target.value)}
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
              />

              <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Protected by reCAPTCHA. Submitting confirms you agree to our response via email or phone.
                </p>
                <Button
                  type="submit"
                  disabled={isSubmitting || !isReady}
                  className="whitespace-nowrap"
                >
                  {isReady ? "Send enquiry" : "Preparing…"}
                </Button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>,
    portalTarget
  );
};

export default ContactModal;
