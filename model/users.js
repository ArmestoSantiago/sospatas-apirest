import { dbconnection } from '../dbconnection.js';

export class UsersModel {
  static async getPostedByUser({ userId }) {
    const postedByUser = await dbconnection.execute({
      sql: 'SELECT * FROM Animals WHERE user_id = ?',
      args: [userId]
    });

    return postedByUser.rows;
  }
  static async getUserAlreadyExists({ id }) {
    const user = await dbconnection.execute({
      sql: 'SELECT * FROM users WHERE id = ?',
      args: [id]
    });

    console.log(id);

    return user.rows;
  };
}