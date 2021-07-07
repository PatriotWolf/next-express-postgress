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

export const createUserTable = async () => {
  const userCreateQuery = `CREATE TABLE IF NOT EXISTS userstest
  (id SERIAL PRIMARY KEY, 
  username VARCHAR(100), 
  first_name VARCHAR(100), 
  last_name VARCHAR(100), 
  email VARCHAR(100) UNIQUE NOT NULL, 
  phone VARCHAR(100) UNIQUE,
  created_on DATE NOT NULL)`;
  const client = await pool.connect();
  const { rows } = await client.query(userCreateQuery);
  console.log(rows);
  client.release();
};

export default pool;
