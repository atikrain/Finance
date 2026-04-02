import Transaction from "../models/Transaction.js";

export const createTransaction = async (req, res) => {
  const tx = await Transaction.create({
    ...req.body,
    createdBy: req.user.id
  });
  res.json(tx);
};

export const getTransactions = async (req, res) => {
  const data = await Transaction.find();
  res.json(data);
};

export const deleteTransaction = async (req, res) => {
  await Transaction.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
};