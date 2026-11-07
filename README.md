# ⚡ InstaBox Wake Controller

A lightweight, mobile-first Web App with a 1-click **"BANGUNKAN SERVER"** button to resume and monitor your InstaBox cloud VM from your phone.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FZiranLogic04%2Finstabox-wake)

## Features
- ⚡ **1-Click Wake:** Resumes suspended InstaBox microVM in under 2 seconds.
- 🟢 **Live Status:** Real-time polling (`RUNNING`, `PAUSED`, `STOPPED`).
- ⏸️ **Manual Pause:** Easily suspend the machine to conserve quota when finished.
- 📱 **Mobile PWA Ready:** Add to Home Screen on iOS / Android for a native app feel.
- 🔒 **Zero CORS Issues:** Proxy API endpoints forward requests to InstaBox API securely.

## Environment Variables (Optional)
- `INSTABOX_API_KEY`: Your InstaBox API key (`ibk_...`)
- `INSTABOX_MACHINE_ID`: Your machine ID (`m_...`)
