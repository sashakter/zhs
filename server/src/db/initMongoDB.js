import { env } from '../utils/env.js';
import mongoose from 'mongoose';
import nodemailer from 'nodemailer';
import { clientCollection } from './models/clients.js';

export const initMongoDB = async () => {
  try {
    const user = env('MONGODB_USER');
    const pwd = env('MONGODB_PASSWORD');
    const url = env('MONGODB_URL');
    const db = env('MONGODB_DB');

    await mongoose.connect(
      `mongodb+srv://${user}:${pwd}@${url}/${db}?retryWrites=true&w=majority`,
    );

    console.log('Mongo connection successfully established!');

    const transporter = nodemailer.createTransport({
      host: env('SMTP_HOST'),
      port: env('SMTP_PORT'),
      secure: false,
      auth: {
        user: env('SMTP_NAME'),
        pass: env('SMTP_PASSWORD'),
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    const sendEmail = (subject, body) => {
      const mailOptions = {
        from: `${env('SMTP_NAME')}`,
        to: 'office@alcotrade.com.ua',
        subject: subject,
        text: body,
      };

      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          return console.log(error);
        }
        console.log('Email sent: ' + info.response);
      });
    };

    const clientChangeStream = clientCollection.watch();

    clientChangeStream.on('change', (change) => {
      if (change.operationType === 'insert') {
        const newClient = change.fullDocument;

        const subject = `Отримано новий запит: ${newClient.phone}`;
        const body = `
          Інформація про клієнта:
          Ім'я: ${newClient.name} ${newClient.surname || ''}
          Електронна пошта: ${newClient.email}
          Телефон: ${newClient.phone}
          Місце розташування: ${newClient.location}
          Повідомлення: ${newClient.message || 'Немає повідомлення'}
        `;

        sendEmail(subject, body);
      }
    });
  } catch (e) {
    console.log('Error while setting up mongo connection', e);
    throw e;
  }
};
