import { Router } from 'express';
import dotenv from 'dotenv';
import { AnimalsController } from '../controllers/animals.js';

dotenv.config();

const animalsRouter = Router();

animalsRouter.get('/', AnimalsController.getListOfAnimals);

animalsRouter.post('/', AnimalsController.createNewAnimal);

export default animalsRouter;