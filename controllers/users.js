import { UsersModel } from '../model/users.js';
import { validateCreateUser } from '../validation/usersValidation.js';

export class UsersController {
  static async getPostedByUser(req, res) {
    try {

      const userId = req.params.id;
      const postedByUser = await UsersModel.getPostedByUser({ userId });

      res.json(postedByUser);
    } catch (err) {
      console.log(err);
    }
  }
  static async getUserAlreadyExists(req, res) {
    try {

      const id = req.params.id;
      const user = await UsersModel.getUserAlreadyExists({ id });
      res.json(user);
    } catch (err) {
      console.log(err);
    }
  }

  static async createUser(req, res) {

    const validation = validateCreateUser(req.body);
    if (!validation.success) res.status(400).json({ code: 400, error: 'Validation Error', message: validation.error.message });

    const data = req.body;

    try {
      const createdUser = UsersModel.createUser({ data });
      if (!createdUser) throw new Error({ error: 'Imposible to create User' });

      res.status(200).json({ code: 200, message: 'user created' });

    } catch (err) {
      console.log(err);
    }
  }

}