import { Pool, PoolConfig } from "pg";

import dotenv from "dotenv";

dotenv.config();

const databaseConfig: PoolConfig = {
  host: process.env.DATABASE_URL,
  port: process.env.DATABASE_PORT
    ? parseInt(process.env.DATABASE_PORT)
    : undefined,
  database: process.env.DATABASE_NAME,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  ssl: {
    rejectUnauthorized: false,
  },
};

const pool = new Pool(databaseConfig);

export default pool;
