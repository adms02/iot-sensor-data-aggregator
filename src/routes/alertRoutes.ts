import { Router } from "express";
import errorCatcher from "../middleware/errorCatcher";
import validateRequest from "../middleware/validateRequest";
import * as alertController from "../controllers/alertController";

const router = Router();

router.put("/alert", errorCatcher(alertController.setThreshold));

export { router as alertRoutes };
