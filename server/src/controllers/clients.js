import {
  createClient,
  getAllClients,
  getClientById,
} from '../services/clients.js';
import createHttpError from 'http-errors';

export const getAllClientsController = async (req, res, next) => {
  const clients = await getAllClients();
  res.status(200).json({
    data: clients,
  });
};

export const getClientByIdController = async (req, res, next) => {
  const { clientId } = req.params;
  const client = await getClientById(clientId);

  if (!client) {
    throw createHttpError(404, 'Client not found');
  }

  res.status(200).json({
    status: 200,
    message: `Successfully found student with id ${clientId}!`,
    data: client,
  });
};

export const creationClientController = async (req, res, next) => {
  const { email, name, surname, phone, comment } = req.body;

  if (!email || !name || !phone) {
    throw createHttpError(
      404,
      'Name, phoneNumber and contactType are required',
    );
  }

  const newContact = {
    email: email || '',
    name,
    surname,
    phone,
    comment,
  };

  const postedClient = await createClient(newContact);

  res.status(201).json({
    status: 201,
    message: 'Successfully created a client!',
    data: postedClient,
  });
};