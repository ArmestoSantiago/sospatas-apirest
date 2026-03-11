import { UsersModel } from '../model/users.js';

export class UsersController {
  static async getPostedByUser(req, res) {
    try {
      console.log('kaka');
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

}