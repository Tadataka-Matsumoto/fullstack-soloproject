import { Router } from "express";
import { send } from "../helpers";
//以下のものは追加でimport
import { Flower } from "../entities/Flower";
import { getRepository } from "typeorm";

/***Flowers***/
export default function() {
  const router = Router();
  // This endpoint should send back all flowers in the database.
  router.get("/", async (req, res) => {
    // console.log("++++++++++++++++++++++");
    // FIXME your code here
    //テーブルを呼び込みたい
    const FlowerRepository = getRepository(Flower);
    const flower = await FlowerRepository.find();
    send(res, 200, flower, true);
  });

  return router;
}
