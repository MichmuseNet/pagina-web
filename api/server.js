import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'method not allowed' });
  }

  try {
    const { name, email, message } = req.body;
    
    console.log("Sending message..."); 

    const { data, error } = await resend.emails.send({
      from: 'Portfolio <onboarding@resend.dev>',
      to: 'andreamichelleolivasrivera@gmail.com',
      subject: `New message: ${name} `, 
      html: `
        <p><strong>name</strong> ${name}</p>
        <p><strong>email:</strong> ${email}</p>
        <p><strong>message:</strong> ${message}</p>
      `,
    });

    if (error) {
      console.error("Error de Resend:", error);
      return res.status(400).json(error);
    }

    console.log("Message sent successfully! ", data);
    return res.status(200).json({ success: true });

  } catch (error) {
    console.error("Error in the server", error.message);
    return res.status(500).json({ error: error.message });
  }
}
