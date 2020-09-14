import { Router } from "express";
import QuoteRouter from "./quotes";
import AuthorRouter from "./authors";

export default function() {
  const router = Router();

  router.use("/quotes", QuoteRouter());
  router.use("/authors", AuthorRouter());

  return router;
}
