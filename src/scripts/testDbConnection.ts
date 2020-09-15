import DatabaseConnectionManager from "../connection";
import { getRepository } from "typeorm";
import { Author } from "../entities/Author";
import { Quote } from "../entities/Quote";

DatabaseConnectionManager.connect()
  .then(async connection => {
    /**
     * Test the connection
     */
    console.log("Connection to DB established!");
    const AuthorRepository = getRepository(Author);
    const QuoteRepository = getRepository(Quote);
    const authors = await AuthorRepository.find();
    const quotes = await QuoteRepository.find();
    console.log("[Check] Able to detect database tables");
    console.log("Exiting...");
  })
  .catch(error => console.log(error));
