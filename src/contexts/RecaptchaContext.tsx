import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

declare global {
  interface Window {
    grecaptcha?: {
      ready(cb: () => void): void;
      execute(siteKey: string, options: { action: string }): Promise<string>;
    };
  }
}

interface RecaptchaContextValue {
  isReady: boolean;
  executeRecaptcha: ((action: string) => Promise<string | null>) | null;
  siteKey?: string;
}

const RecaptchaContext = createContext<RecaptchaContextValue>({
  isReady: false,
  executeRecaptcha: null,
});

const RECAPTCHA_SCRIPT_ID = "google-recaptcha-script";

interface RecaptchaProviderProps {
  siteKey?: string | null;
  children: React.ReactNode;
}

export const RecaptchaProvider: React.FC<RecaptchaProviderProps> = ({
  siteKey,
  children,
}) => {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    setIsReady(false);

    if (!siteKey) return;

    const existing = document.getElementById(RECAPTCHA_SCRIPT_ID) as
      | HTMLScriptElement
      | null;

    if (existing && existing.dataset.siteKey !== siteKey) {
      existing.remove();
    }

    if (!document.getElementById(RECAPTCHA_SCRIPT_ID)) {
      const script = document.createElement("script");
      script.id = RECAPTCHA_SCRIPT_ID;
      script.src = `https://www.google.com/recaptcha/api.js?render=${siteKey}`;
      script.async = true;
      script.defer = true;
      script.dataset.siteKey = siteKey;
      script.onerror = () => {
        console.error("Failed to load Google reCAPTCHA script.");
      };
      document.head.appendChild(script);
    }

    let cancelled = false;

    const registerReady = () => {
      if (cancelled) return;

      if (!window.grecaptcha || typeof window.grecaptcha.ready !== "function") {
        window.setTimeout(registerReady, 200);
        return;
      }

      window.grecaptcha.ready(() => {
        if (!cancelled) setIsReady(true);
      });
    };

    registerReady();

    return () => {
      cancelled = true;
    };
  }, [siteKey]);

  const executeRecaptcha = useCallback(
    async (action: string) => {
      if (!siteKey || !window.grecaptcha) return null;

      try {
        return await window.grecaptcha.execute(siteKey, { action });
      } catch (err) {
        console.error("reCAPTCHA execution failed", err);
        return null;
      }
    },
    [siteKey]
  );

  const value = useMemo(
    () => ({
      isReady: isReady && Boolean(siteKey),
      executeRecaptcha: siteKey ? executeRecaptcha : null,
      siteKey: siteKey ?? undefined,
    }),
    [executeRecaptcha, isReady, siteKey]
  );

  return (
    <RecaptchaContext.Provider value={value}>
      {children}
    </RecaptchaContext.Provider>
  );
};

export const useRecaptcha = () => useContext(RecaptchaContext);
