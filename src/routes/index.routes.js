import { Router } from "express";
import { getAll } from "../controllers/index.controller.js";

const router = Router();

router.get('/list', getAll);

export default router;