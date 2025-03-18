import { LocationModel } from '../model/locations.js';

export class LocationController {
  static async getPredictions(req, res) {
    const { input } = req.query;
    // const predictions = await LocationModel.getPredictionList({ input });

    // res.json(predictions);

    res.json({ input });
  }
}