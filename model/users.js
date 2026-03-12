import { dbconnection } from '../dbconnection.js';

export class UsersModel {
  static async getPostedByUser({ userId }) {
    const postedByUser = await dbconnection.execute({
      sql: 'SELECT * FROM Animals WHERE user_id = ?',
      args: [userId]
    });

    return postedByUser.rows;
  }
  static async getUserById({ id }) {
    const user = await dbconnection.execute({
      sql: 'SELECT * FROM users WHERE id = ?',
      args: [id]
    });

    return user.rows;
  };

  static async getAllUsers() {
    const user = await dbconnection.execute('SELECT * FROM users');

    return user.rows;
  };

  static async createUser({ data }) {

    const { id, photoURL, displayName } = data;

    const userCreated = await dbconnection.execute({
      sql: 'INSERT INTO users (id, photoURL, name) VALUES (?, ?, ?)',
      args: [id, photoURL, displayName]
    });

    return userCreated;
  }
}