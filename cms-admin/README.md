# Flewnt CMS (Netlify-only)

This folder is meant to become a tiny standalone repo that only serves the Decap CMS UI so you can host `/admin` on Netlify (option 1) while the main Flewnt.ai site stays on GitHub Pages.

## How to use

1. Copy the contents of this folder into a new repository (or run `git subtree split --prefix=cms-admin` if you want to publish directly from this monorepo).
2. In Netlify, create a new site from that repo.
   - Build command: leave empty.
   - Publish directory: `.`
3. Enable Identity and Git Gateway for the site, invite your editors.
4. In the Netlify site settings, set **Base directory** to `cms-admin` if you are deploying straight from the main Flewnt.ai repo instead of a detached copy.
5. Because Git Gateway always commits to the repo Netlify is connected to, make sure that site is still linked to the main `Flewnt.ai` repo so your Markdown posts land in `src/content/posts`.
6. Visit `https://YOUR-NETLIFY-SITE.netlify.app/` to reach the CMS login.

## Notes

- If you insist on hosting the CMS from a separate repo, switch `config.yml` to a `github` backend and wire up the GitHub OAuth provider; otherwise Netlify Identity will not be able to commit to the Flewnt.ai repo.
- Any changes made via the CMS show up as commits touching `src/content/posts` and `public/images/uploads`, which keeps the main site builds working.
