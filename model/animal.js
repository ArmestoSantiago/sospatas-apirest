import { dbconnection } from '../dbconnection.js';
import { v4 as uuid } from 'uuid';

export class AnimalModel {
  static async getListOfAnimals({ userId }) {
    if (!userId) {
      const animals = await dbconnection.execute('SELECT * FROM Animals');
      return animals.rows;
    }

    const animalsByUser = await dbconnection.execute({
      sql: 'SELECT * FROM Animals WHERE user_id = ?',
      args: [userId]
    });

    return animalsByUser;
  };

  static async createNewAnimal({ data }) {
    const { userId, type, condition, description, lat, lng, imgSrc, address } = data;
    const id = uuid();

    const result = await dbconnection.execute({
      sql: 'INSERT INTO Animals (id, type, lat, lng, condition, description, imgSrc, user_id, address) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)',
      args: [id, type, lat, lng, condition, description, imgSrc, userId, address]
    });

    return {
      code: 200,
      message: 'Posted',
    };
  }
}