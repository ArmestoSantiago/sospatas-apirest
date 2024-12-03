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

    if (!validation.success) res.json(validation.error);

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
      res.json({ code: 422, message: err.message });
    }

  }
}  