import "reflect-metadata";
import { createConnection, ConnectionOptions } from "typeorm";
import defaultDbConfig from "./ormconfig";

class DatabaseConnectionManager {
  public static async connect(dbConfig?: ConnectionOptions) {
    const connection = await createConnection(
      dbConfig || (defaultDbConfig as ConnectionOptions)
    );
    return connection;
  }
}

export default DatabaseConnectionManager;
