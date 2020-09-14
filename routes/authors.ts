import { Router } from "express";
import { send } from "../helpers";
//以下のものは追加でimport
import { Author } from "../entities/Author";
import { getRepository } from "typeorm";

/***Authors***/
export default function() {
  const router = Router();
  // This endpoint should send back all authors in the database.
  router.get("/", async (req, res) => {
    // console.log("authorauthorauthorauthor");
    // FIXME your code here
    //テーブルを呼び込みたい
    const AuthorRepository = getRepository(Author);
    const author = await AuthorRepository.find();
    send(res, 200, author, true);
  });

  return router;
}
