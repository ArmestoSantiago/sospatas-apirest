import { AnimalModel } from '../model/animal.js';
import { validateAnimal } from '../validation/animalsScheme.js';

export class AnimalsController {

  static async getListOfAnimals(req, res) {
    try {
      const userId = req.userId;
      const animalsList = await AnimalModel.getListOfAnimals({ userId });

      res.json(animalsList);
    } catch (err) {
      res.json({
        code: 423,
        message: err
      });
    }
  };

  static async createNewAnimal(req, res) {

    const validation = validateAnimal(req.body);

    if (!validation.success) res.status(400).json({ code: 400, message: 'Validation error', error: validation.error.issues });

    const data = {
      userId: req.body.user_id,
      ...validation.data
    };

    try {
      const animalsPostedByUser = await AnimalModel.getListOfAnimals({ userId: data.userId });

      if (animalsPostedByUser.rows.length >= 3) {
        throw new Error('Too many publications');
      }
      const result = await AnimalModel.createNewAnimal({ data });
      res.json(result);

    } catch (err) {
      res.status(429).json({ code: 400, message: err.message });
    }

  }
}  