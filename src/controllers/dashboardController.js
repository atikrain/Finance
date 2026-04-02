import { getSummary } from "../services/dashboardService.js";

export const getDashboard = async (req, res) => {
  const data = await getSummary();
  res.json(data);
};