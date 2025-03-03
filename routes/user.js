import { Router } from 'express';
import { UsersController } from '../controllers/users.js';

export const userRouter = Router();

userRouter.get('/', UsersController.getPostedByUser);