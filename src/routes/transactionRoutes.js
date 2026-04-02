import express from "express";
import {
  createTransaction,
  getTransactions,
  deleteTransaction
} from "../controllers/transactionController.js";

import { protect } from "../middleware/authMiddleware.js";
import { authorize } from "../middleware/roleMiddleware.js";

const router = express.Router();

// 🔒 ONLY ADMIN CAN CREATE
router.post("/", protect, authorize("admin"), createTransaction);

// 👀 Analyst + Admin can view
router.get("/", protect, authorize("admin", "analyst"), getTransactions);

// 🔒 ONLY ADMIN DELETE
router.delete("/:id", protect, authorize("admin"), deleteTransaction);

export default router;