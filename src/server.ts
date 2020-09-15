/**
 * YOU SHOULDN'T MODIFY THIS FILE
 * UNLESS ABSOLUTELY NECESSARY.
 */

/***Express setup***/
import express from "express";

/***Middleware Dependencies***/
import morgan from "morgan";

/***Other Dependencies***/
import apiRouter from "./routes";

export function createServer() {
  /***Express setup***/
  const app = express();

  /***Add middleware to the server, mounted on the /api/ path ***/

  //fullstackにできるのか？？？そもそもtsでできるのか？？？？？？？
  //  const express = require ("express");
  //  const app = express();

  //  app.use(express.static(__dirname + "/dist"));

  //  const port = process.env.PORT || 4000
  //  app.listen(port, () => {
  //    console.log("App listening on port " + port);
  //  });

  app.use("/api", [
    express.json(), //enables parsing of application/json request bodies
    express.urlencoded({ extended: true }), //enables parsing of application/x-www-form-urlencoded data
    apiRouter()
  ]);

  if (process.env.NODE_ENV !== "test") {
    //run morgan middelware's development mode; detailed, colored dev log
    if (process.env.NODE_ENV === "development") app.use(morgan("dev"));
  }

  return app;
}

module.exports = {
  createServer
};
