import { Router } from 'express';
import {
  getAllClientsController,
  getClientByIdController,
} from '../controllers/clients.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';

const clientsRouter = Router();

clientsRouter.get('/clients', ctrlWrapper(getAllClientsController));

clientsRouter.get('/clients/:clientsId', ctrlWrapper(getClientByIdController));

export default clientsRouter;
