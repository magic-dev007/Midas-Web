const TEAM_EMAIL = "midasglobaltech.us@gmail.com";
const FROM_EMAIL = process.env.FROM_EMAIL || "Midas Global Tech <onboarding@resend.dev>";

async function sendEmail({ to, subject, html }) {
  const key = process.env.RESEND_API_KEY;
  if (!key) throw new Error("RESEND_API_KEY is not set");
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${key}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: FROM_EMAIL,
      to: Array.isArray(to) ? to : [to],
      subject,
      html,
    }),
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.message || "Failed to send email");
  return data;
}

function escapeHtml(text) {
  if (!text) return "";
  return String(text)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { name, email, message } = req.body || {};
    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return res.status(400).json({ error: "Name, email, and message are required" });
    }

    const safeName = escapeHtml(name.trim());
    const safeEmail = email.trim();
    const safeMessage = escapeHtml(message.trim());

    // 1. Email to team: new quote request
    await sendEmail({
      to: TEAM_EMAIL,
      subject: `New quote request from ${safeName}`,
      html: `
        <h2>New quote request</h2>
        <p><strong>Name:</strong> ${safeName}</p>
        <p><strong>Email:</strong> ${safeEmail}</p>
        <p><strong>Message:</strong></p>
        <pre style="white-space: pre-wrap; background: #f4f4f4; padding: 12px; border-radius: 8px;">${safeMessage}</pre>
        <p><em>Reply within 24 hours.</em></p>
      `,
    });

    // 2. Auto-reply to customer
    await sendEmail({
      to: safeEmail,
      subject: "We received your message – Midas Global Tech",
      html: `
        <p>Hi ${safeName},</p>
        <p>Thank you for reaching out to Midas Global Tech. We have received your message and will get back to you within <strong>24 hours</strong>.</p>
        <p>If your request is urgent, you can also email us directly at <a href="mailto:${TEAM_EMAIL}">${TEAM_EMAIL}</a>.</p>
        <p>Best regards,<br/>The Midas Global Tech Team</p>
      `,
    });

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error("send-quote error:", err);
    return res.status(500).json({
      error: err.message || "Failed to send. Please try again or email us directly.",
    });
  }
}
