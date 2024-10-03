import { clientCollection } from '../db/models/clients.js';

export const getAllClients = async () => {
  const clients = await clientCollection.find();
  return clients;
};
export const getClientById = async (clientId) => {
  const client = await clientCollection.findById(clientId);
  return client;
};
export const createClient = async (payload) => {
  const postClient = await clientCollection.create(payload);
  return postClient;
};
