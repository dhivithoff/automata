import { Resend } from "resend";

export const config = {
  runtime: "nodejs",
};

export default async function handler(req, res) {
  try {
    if (req.method !== "POST") {
      return res.status(405).json({ error: "Method not allowed" });
    }

    const resend = new Resend(process.env.RESEND_API_KEY);
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: "Missing fields" });
    }

    const response = await resend.emails.send({
      from: "Automata <onboarding@resend.dev>",
      to: ["org.automata@gmail.com"],
      reply_to: email,
      subject: "🚀 New Lead from Automata Website",
      html: `
        <h2>New Contact Form</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Message:</b></p>
        <p>${message}</p>
      `,
    });

    if (!response || response.error) {
      console.error("Resend error:", response);
      return res.status(500).json({ error: "Email provider rejected request" });
    }

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error("API crash:", err);
    return res.status(500).json({ error: err.message });
  }
}
