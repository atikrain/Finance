import Transaction from "../models/Transaction.js";

export const getSummary = async () => {
  const income = await Transaction.aggregate([
    { $match: { type: "income" } },
    { $group: { _id: null, total: { $sum: "$amount" } } }
  ]);

  const expense = await Transaction.aggregate([
    { $match: { type: "expense" } },
    { $group: { _id: null, total: { $sum: "$amount" } } }
  ]);

  return {
    totalIncome: income[0]?.total || 0,
    totalExpense: expense[0]?.total || 0,
    netBalance:
      (income[0]?.total || 0) - (expense[0]?.total || 0)
  };
};