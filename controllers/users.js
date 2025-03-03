import { UsersModel } from '../model/users.js';

export class UsersController {
  static async getPostedByUser(req, res) {
    try {
      const userId = req.query.userid;
      const postedByUser = await UsersModel.getPostedByUser({ userId });

      res.json(postedByUser);
    } catch (err) {
      console.log(err);
    }
  }
}