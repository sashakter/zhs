import { clientCollection } from '../db/models/clients.js';

export const getAllClients = async () => {
  const clients = await clientCollection.find();
  return clients;
};
export const getClientById = async (clientId) => {
  try {
    const client = await clientCollection.findById(clientId);
    if (!client) {
      throw new Error('Client not found');
    }
    return client;
  } catch (error) {
    console.error('Error fetching client by ID:', error);
    throw new Error('Failed to fetch client');
  }
};

export const createClient = async (payload) => {
  const postClient = await clientCollection.create(payload);
  return postClient;
};
