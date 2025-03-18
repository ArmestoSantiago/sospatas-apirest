import dotenv from 'dotenv';

dotenv.config();

export class LocationModel {
  static async getPredictionList({ input }) {
    const PREDICTION_URL = process.env.PREDICTIONS_ENDPOINT;
    const GOOGLE_KEY = process.env.GOOGLE_KEY;
    const fullURL = `${PREDICTION_URL}input=${input}&key=${GOOGLE_KEY}`;

    try {
      const data = await fetch(fullURL);
      const res = await data.json();
      if (res.predictions.length === 0) return false;
      return res;
    }
    catch (error) {
      return false;
    }

  }
}