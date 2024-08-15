import { Router } from "express";
import {
  createAiApplication,
  getAllAIapplications,
} from "../controllers/aiApplication";

const router = Router();

router.post("/ai/application", createAiApplication);
router.get("/webapp/listings", getAllAIapplications);
export default router;
