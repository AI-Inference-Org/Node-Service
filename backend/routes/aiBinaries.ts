import { Router } from "express";
import { createAiBinaries, getAllAIBinaries } from "../controllers/aiBinaries";

const router = Router();

router.post("/ai/binaries", createAiBinaries);
router.get("/ai/binaries", getAllAIBinaries);
export default router;
