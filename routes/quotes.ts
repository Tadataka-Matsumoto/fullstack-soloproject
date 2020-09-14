import { Router } from "express";
import { send, filter, validateQuote, testProp } from "../helpers";
//以下のものは追加でimport
import { getRepository, AdvancedConsoleLogger } from "typeorm";
import { Quote } from "../entities/Quote";

/***Quotes***/

export default function() {
  const router = Router();
  // This endpoint should return all quotes in the database
  // It can take a query parameter 'authorName' to only show
  // quotes from that author

  // FIXME your code here
  router.get("/", async (req, res) => {
    //Quoteテーブルを呼び込みたい
    const QuoteRepository = getRepository(Quote);
    //authorが追加される方法を知った(entityのカラムを追加する)
    const quote = await QuoteRepository.find({ relations: ["author"] });
    //queryの有無で分岐
    if (!req.query.authorName) {
      send(res, 200, { quotes: quote }, true);
    } else {
      const result = [];
      //条件にあったオブジェクトarrayを探す。
      for (const elm of quote) {
        // console.log(elm.id,elm.author.name,req.query.authorName);
        if (elm.author.name === req.query.authorName) {
          result.push(elm);
        }
      }
      send(res, 200, { quotes: result }, true);
    }
  });

  return router;
}
