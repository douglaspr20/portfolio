import nodemailer from "nodemailer";

export const sendMail = async ({
  name,
  email,
  message,
}: {
  name: string;
  email: string;
  message: string;
}) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      type: "OAuth2",
      user: import.meta.env.GMAIL_USER,
      clientId: import.meta.env.GMAIL_CLIENT_ID,
      clientSecret: import.meta.env.GMAIL_CLIENT_SECRET,
      refreshToken: import.meta.env.GMAIL_REFRESH_TOKEN,
    },
  });

  await transporter.sendMail({
    from: `"Portfolio Contact" <${import.meta.env.GMAIL_USER}>`,
    replyTo: `${name} <${email}>`,
    to: import.meta.env.GMAIL_USER,
    subject: `Nuevo mensaje desde el portafolio de ${name}`,
    text: `
    Nombre: ${name}
    Email: ${email}
    Mensaje: ${message}
    `,
  });
};
