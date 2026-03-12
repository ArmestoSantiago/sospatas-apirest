import { Router } from 'express';
import { UsersController } from '../controllers/users.js';

export const userRouter = Router();

userRouter.get('/:id/posts', UsersController.getPostedByUser);

userRouter.get('/:id', UsersController.getUserById);
userRouter.get('/', UsersController.getAllUsers);

userRouter.post('/', UsersController.createUser);