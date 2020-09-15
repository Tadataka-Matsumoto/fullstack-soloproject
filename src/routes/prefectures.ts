import { Router } from "express";
import { send, filter, testProp } from "../helpers";
//以下のものは追加でimport
import { getRepository, AdvancedConsoleLogger } from "typeorm";
import { Prefecture } from "../entities/Prefecture";

/***Prefectures***/

export default function() {
  const router = Router();
  // This endpoint should return all prefectures in the database
  // It can take a query parameter 'flowerName' to only show
  // prefectures from that flower

  // FIXME your code here
  router.get("/", async (req, res) => {
    //Prefectureテーブルを呼び込みたい
    const PrefectureRepository = getRepository(Prefecture);
    //flowerが追加される方法を知った(entityのカラムを追加する)
    const prefecture = await PrefectureRepository.find({
      relations: ["flower"]
    });
    //queryの有無で分岐
    if (!req.query.flowerName) {
      send(res, 200, { prefectures: prefecture }, true);
    } else {
      const result = [];
      //条件にあったオブジェクトarrayを探す。
      for (const elm of prefecture) {
        // console.log(elm.id,elm.flower.name,req.query.flowerName);
        if (elm.flower.name === req.query.flowerName) {
          result.push(elm);
        }
      }
      send(res, 200, { prefectures: result }, true);
    }
  });

  return router;
}
