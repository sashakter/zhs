// lib/sendEmail.ts
import nodemailer from 'nodemailer'

export async function sendEmail({
  to,
  subject,
  text,
}: {
  to: string
  subject: string
  text: string
}) {
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: Number(process.env.EMAIL_PORT),
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
    secure: false, // true для портов 465, false для других портов
  })

  await transporter.sendMail({
    from: `"ALCOTRADE COMPANY" <${process.env.EMAIL_FROM}>`,
    to,
    subject,
    text,
  })
}
