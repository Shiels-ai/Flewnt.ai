# Flewnt.ai Portfolio

## Setup

### Prerequisites

- Node.js (v18 or higher)
- Yarn package manager

### Installation

```bash
# Clone the repository
git clone https://github.com/SamShiels/Flewnt.ai.git
cd Flewnt.ai

# Install dependencies
yarn install
```

### Available Scripts

```bash
# Start development server
yarn dev

# Build for production
yarn build

# Preview production build locally
yarn preview

# Deploy to GitHub Pages
yarn deploy
```

### Development Server

The development server runs on `http://localhost:5173/flewnt.ai/` with hot module replacement enabled.

### Deployment

This project is configured for GitHub Pages deployment:

1. Build and deploy: `yarn deploy`
2. Visit: https://Shiels-ai.github.io/Flewnt.ai/

The deployment script automatically builds the project and pushes to the `gh-pages` branch.

### Contact Form Integration

- The navigation's **Contact Us** entry toggles `src/components/ContactModal.tsx`, which mirrors the enquiry workflow from the legacy `enquire.tsx` page (honeypot, validation, optimistic UI, and `/api/submit` POST).
- Google reCAPTCHA v3 loads via `RecaptchaProvider` (`src/contexts/RecaptchaContext.tsx`). Expose your key through `VITE_RECAPTCHA_SITE_KEY` in `.env` when running locally or deploying.
- The modal posts JSON `{ name, phone, email, project, company, recaptchaToken }` to `/api/submit` and expects a JSON response with an optional `message` string.
- When verifying the integration, exercise success and failure flows: invalid email, non-numeric phone, missing fields, and requests with the honeypot populated.
