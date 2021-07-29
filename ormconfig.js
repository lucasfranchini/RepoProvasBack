require('dotenv').config();

module.exports = {
  type: "postgres",
  url: `postgres://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`,
  migrationsTableName: "migrations",
  entities: ["dist/src/entities/*.js"],
  migrations: ["dist/src/migrations/*.js"],
  cli: {
    migrationsDir: "src/migrations",
    entitiesDir: "dist/entities/*.js"
  }
};