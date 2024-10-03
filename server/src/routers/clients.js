import { Router } from 'express';
import {
  creationClientController,
  getAllClientsController,
  getClientByIdController,
} from '../controllers/clients.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';

const clientsRouter = Router();

clientsRouter.post('/clients', ctrlWrapper(creationClientController));

clientsRouter.get('/clients', ctrlWrapper(getAllClientsController));

clientsRouter.get('/clients/:clientsId', ctrlWrapper(getClientByIdController));

export default clientsRouter;
