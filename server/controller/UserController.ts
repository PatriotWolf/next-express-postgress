import { Request, Response } from "express";
import pool from "../db/pool";
class UserControler {
  public async get(_req: Request, res: Response) {
    try {
      const client = await pool.connect();
      const sql = "SELECT * FROM userstest";
      const { rows } = await client.query(sql);
      const todos = rows;
      client.release();
      res.send(todos);
    } catch (error) {
      console.error(error.message);
      res.status(500).json("Server error");
    }
  }
}

export default UserControler;
