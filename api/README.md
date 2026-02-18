# Contact form – EmailJS

The **Get a free quote** form uses [EmailJS](https://www.emailjs.com/) to send emails from the browser (no backend required).

## Setup

1. Create an account at [emailjs.com](https://www.emailjs.com/).
2. Add an **Email Service** (e.g. Gmail) and note the **Service ID**.
3. Create an **Email Template** for new quote requests:
   - **To Email:** your address (e.g. `midasglobaltech.us@gmail.com`)
   - **Subject:** e.g. `New quote from {{from_name}}`
   - **Body:** use variables `{{from_name}}`, `{{from_email}}`, `{{message}}`, `{{reply_to}}`
4. In the dashboard, open **Account** → **API Keys** and copy your **Public Key**.
5. Create a `.env` or `.env.local` in the project root with:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

6. Restart the dev server. The form will send to your email when submitted.

## Optional: auto-reply to the customer

To send a “We received your message” email to the person who filled the form:

1. Create a **second template** in EmailJS:
   - **To Email:** `{{to_email}}` (dynamic)
   - **Subject:** e.g. `We received your message – Midas Global Tech`
   - **Body:** e.g. `Hi {{to_name}}, we received your message and will reply within 12 hours.`
2. Add to `.env`:

```env
VITE_EMAILJS_TEMPLATE_REPLY_ID=your_reply_template_id
```

The app will send the main email to you, then (after a short delay) send the auto-reply to the customer using `to_name` and `to_email`.
