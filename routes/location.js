import { Router } from 'express';
import { LocationController } from '../controllers/locations.js';

const locationRouter = Router();

locationRouter.get('/', LocationController.getPredictions);

export default locationRouter;