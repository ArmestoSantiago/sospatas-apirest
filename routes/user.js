import { Router } from 'express';
import { UsersController } from '../controllers/users.js';

export const userRouter = Router();

userRouter.get('/:id/posts', UsersController.getPostedByUser);

userRouter.get('/:id', UsersController.getUserAlreadyExists);

userRouter.post('/', UsersController.createUser);