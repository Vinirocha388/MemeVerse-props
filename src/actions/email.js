"use server";

import nodemailer from "nodemailer";

export async function sendEmail(formData) {
  try {
    const { name, email, message } = formData;

    // Configura o transporter
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      secure: process.env.EMAIL_SECURE === "true",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Define as opções do e-mail
    const mailOptions = {
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_TO,
      subject: `Nova mensagem de contato de ${name}`,
      text: `
        Nome: ${name}
        Email: ${email}
        
        Mensagem:
        ${message}
      `,
      html: `
        <h3>Nova mensagem de contato</h3>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensagem:</strong> <br/>${message.replace(
          /\n/g,
          "<br/>"
        )}</p>
      `,
    };

    // Envia o e-mail
    const info = await transporter.sendMail(mailOptions);

    return {
      success: true,
      message: "E-mail enviado com sucesso!",
      messageId: info.messageId,
    };
  } catch (error) {
    console.error("Erro ao enviar e-mail:", error);
    return {
      success: false,
      message: "Erro ao enviar e-mail. Tente novamente mais tarde.",
    };
  }
}
