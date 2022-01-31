import {Router} from "express";
const router = Router();

import { cvCtr, indexApp } from "../controllers/index.ctr";

router.get("/", indexApp)

//  router.get("/vc", cvCtr)


export default router;