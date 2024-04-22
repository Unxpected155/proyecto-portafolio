import Contact from "@/emails/Contact";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
  try {
    const data = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "gabripb2004@gmail.com",
      subject: "Contact Portfolio Web",
      react: Contact(),
    });

    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}
