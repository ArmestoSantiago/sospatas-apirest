import { UsersModel } from '../model/users.js';

export class UsersController {
  static async getPostedByUser(req, res) {
    try {
      const userId = req.body.user_id;
      const postedByUser = await UsersModel.getPostedByUser({ userId });

      res.json(postedByUser);
    } catch (err) {
      console.log(err);
    }
  }
}