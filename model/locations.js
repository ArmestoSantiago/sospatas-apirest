import dotenv from 'dotenv';

dotenv.config();

export class LocationModel {
  static async getPredictionList({ input }) {
    const PREDICTION_URL = process.env.PREDICTIONS_ENDPOINT;
    const GOOGLE_KEY = process.env.GOOGLE_KEY;

    try {
      return fetch(`${PREDICTION_URL}input=${input}&key=${GOOGLE_KEY}`)
        .then(res => res.json())
        .then(data => data.predictions);
    } catch (error) {
      console.log(error);
      return false;
    }
  }
}