# NOTES

## Upgrade to Node 24 on Vercel

Updated: Aug 26 2026.

Added this to `package.json`:
```json
  "engines": {
    "node": "24.x"
  },
```

And run `npm run build`. Once it passes, commit and push. 

Check the Vercel build log for the new deployment to confirm it picked up Node 24.