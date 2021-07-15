import { QueryResult } from "pg";
import pool from "../pool";

export interface User {
  email: string;
  username: string;
  phone: string;
  created_on?: Date;
}

const userQuery = {
  selectUser: async function (
    email: string,
    username: string,
    phone: string,
    created_on: Date
  ): Promise<QueryResult<User>> {
    const client = await pool.connect();
    const query = `INSERT INTO
        userstest(email, username, phone, created_on)
        VALUES($1, $2, $3, $4)
        returning *`;
    const queryResult = client.query(query, [
      email,
      username,
      phone,
      created_on,
    ]);
    client.release();
    return queryResult;
  },
  updateUser: async function (
    data: User,
    id: string
  ): Promise<QueryResult<User>> {
    const client = await pool.connect();
    const query = `UPDATE 
    userstest
    SET email = $1, username = $2, phone=$3  WHERE id = $4
    RETURNING *`;
    const queryResult = client.query(query, [
      data.email,
      data.username,
      data.phone,
      id,
    ]);
    client.release();
    return queryResult;
  },
  deleteUser: async function (id: string): Promise<QueryResult<User>> {
    const client = await pool.connect();
    const query = `DELETE FROM
    userstest
    WHERE id = $1
    RETURNING *`;
    const queryResult = client.query(query, [id]);
    client.release();
    return queryResult;
  },
};

export default userQuery;
