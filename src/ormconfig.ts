import dotenv = require("dotenv");
dotenv.config();

// Please modify the exported object to point to your database using either environment variables
// or modifying the appropriate strings.

export = {
  type: "postgres",
  // If you prefer to use 1 postgres connection string, uncomment next line and comment out anything between host and database keys.
  url: process.env.DB_URL,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: ["src/entities/**/*.ts"],
  migrations: ["src/migrations/**/*.ts"],
  seeds: ["src/seeds/**/*.ts"],
  logging: false,
  migrationsRun: false /* Disable auto-run migration */,
  cli: {
    entitiesDir: "src/entities",
    migrationsDir: "src/migrations"
  }
};
