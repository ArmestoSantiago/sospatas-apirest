import { dbconnection } from '../dbconnection.js';

export class UsersModel {
  static async getPostedByUser({ userId }) {
    const postedByUser = await dbconnection.execute({
      sql: 'SELECT * FROM Animals WHERE user_id = ?',
      args: [userId]
    });

    return postedByUser.rows;
  }
}