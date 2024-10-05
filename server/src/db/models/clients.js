import { model, Schema } from 'mongoose';

const clientsSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    surname: {
      type: String,
      required: false,
    },
    phone: {
      type: String,
      required: true,
    },
    comment: {
      type: String,
      required: false,
    },
    location: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

export const clientCollection = model('clients', clientsSchema);
