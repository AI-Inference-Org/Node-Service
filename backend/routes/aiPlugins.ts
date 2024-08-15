import { Router } from "express";
import { createAiPlugin, getAllAIPlugins } from "../controllers/aiPlugins";

const router = Router();

router.post("/ai/plugins", createAiPlugin);
router.get("/ai/plugins", getAllAIPlugins);
export default router;
