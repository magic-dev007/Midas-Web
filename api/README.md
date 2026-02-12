# Contact form API

The **Get a free quote** form sends submissions to `POST /api/send-quote`, which:

1. Sends an email to **midasglobaltech.us@gmail.com** with the customer's name, email, and message.
2. Sends an auto-reply to the customer: *"We received your message and will reply within 12 hours."*

## Setup on Vercel

1. Create an account at [resend.com](https://resend.com) and get an **API key**.
2. In the [Vercel project](https://vercel.com/dashboard) → **Settings** → **Environment Variables**, add:
   - **Name:** `RESEND_API_KEY`  
   - **Value:** your Resend API key (e.g. `re_...`)
3. Redeploy the project so the function picks up the variable.

## Optional

- **Custom "From" address:** To send from your own domain (e.g. `noreply@yourdomain.com`), verify the domain in Resend and add:
  - **Name:** `FROM_EMAIL`  
  - **Value:** `Midas Global Tech <noreply@yourdomain.com>`

Without `FROM_EMAIL`, emails are sent from `onboarding@resend.dev` (Resend’s test sender). You may need to verify a domain in Resend to send to arbitrary customer addresses in production.
