import * as dotenv from 'dotenv';
dotenv.config();

export interface Config {
  username: string;
  password: string | null | undefined;
  database: string;
  host: string | undefined;
  dialect: string;
  port: string | undefined;
}

const config: Record<string, Config> = {
  "development": {
    "username": "root",
    "password": process.env.MARIADB_PASSWORD,
    "database": "database_development",
    "host": process.env.MARIADB_HOST,
    "dialect": "mariadb",
    "port": process.env.MARIADB_PORT
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "localhost",
    "dialect": "mariadb",
    "port": "3306"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "localhost",
    "dialect": "mariadb",
    "port": "3306"
  }
}

export default config;