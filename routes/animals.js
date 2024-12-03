import { Router } from 'express';
import { AnimalsController } from '../controllers/animals.js';

const animalsRouter = Router();

animalsRouter.get('/', AnimalsController.getListOfAnimals);

animalsRouter.post('/', AnimalsController.createNewAnimal);

export default animalsRouter;