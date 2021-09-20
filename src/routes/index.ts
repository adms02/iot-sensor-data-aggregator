import { Router } from "express";
import { alertRoutes } from "./alertRoutes";
import { sensorRoutes } from "./sensorRoutes";

const router = Router();

router.use("/", alertRoutes);
router.use("/", sensorRoutes);

export default router;
