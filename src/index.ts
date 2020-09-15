/**
 * YOU SHOULDN'T MODIFY THIS FILE
 * UNLESS ABSOLUTELY NECESSARY.
 */
const PORT = process.env.PORT || 7000; //default port to 7000

/***Our Express App***/
import { createServer } from "./server";
import DatabaseConnectionManager from "./connection";

/**
 * Reminder!
 * With TypeORM, the connection to DB has to be established
 * before using `getRepository` or similar functions
 */
DatabaseConnectionManager.connect().then(() => {
  const app = createServer();

  app.listen(PORT, () =>
    /* eslint-disable no-console */
    console.log(`Server listening on port: ${PORT}`)
  );
});
