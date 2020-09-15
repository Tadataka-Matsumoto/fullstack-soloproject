import { Router } from "express";
import PrefectureRouter from "./prefectures";
import FlowerRouter from "./flowers";

export default function() {
  const router = Router();

  router.use("/prefectures", PrefectureRouter());
  router.use("/flowers", FlowerRouter());

  return router;
}
