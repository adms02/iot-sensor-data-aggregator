import { Router } from "express";
import errorCatcher from "../middleware/errorCatcher";
import * as sensorController from "../controllers/sensorController";
import validateRequest from "../middleware/validateRequest";
import { addDatapointSchema } from "../schemas/addDatapointSchema";
import { getSensorDataSchema } from "../schemas/getSensorDataSchema";

const router = Router();

router.put("/data", validateRequest(addDatapointSchema), errorCatcher(sensorController.addSensorDataController));

router.get("/data", validateRequest(getSensorDataSchema), errorCatcher(sensorController.getSensorDataController));

export { router as sensorRoutes };
