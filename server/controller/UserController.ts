import { Request, Response } from "express";
import { errorMessage, status } from "../helper/status";
import { isEmpty, isValidEmail, validateUserName } from "../helper/validation";
import pool from "../db/pool";

class UserControler {
  public async get(_req: Request, res: Response): Promise<Response> {
    try {
      const client = await pool.connect();
      const sql = "SELECT * FROM userstest";
      const { rows } = await client.query(sql);
      const todos = rows;
      client.release();
      return res.send(todos);
    } catch (error) {
      console.error(error.message);
      return res.status(500).json("Server error");
    }
  }
  public async createUser(req: Request, res: Response): Promise<Response> {
    const { email, username, phone } = req.body;

    const created_on = new Date();
    if (isEmpty(email) || isEmpty(username)) {
      errorMessage.error = "Username or Email cannot be empty";
      return res.status(status.bad).send(errorMessage);
    }
    if (!isValidEmail(email)) {
      errorMessage.error = "Please enter a valid Email";
      return res.status(status.bad).send(errorMessage);
    }
    if (!validateUserName(username)) {
      errorMessage.error = "Invalid user name!";
      return res.status(status.bad).send(errorMessage);
    }
    try {
      const client = await pool.connect();
      const createUserQuery = `INSERT INTO
              userstest(email, username, phone, created_on)
              VALUES($1, $2, $3, $4)
              returning *`;
      const values = [email, username, phone, created_on];
      const { rows } = await client.query(createUserQuery, values);
      const todos = rows;
      client.release();
      return res.send(todos);
    } catch (error) {
      console.error(error.message);
      return res.status(500).json("Server error");
    }
  }
}

export default UserControler;
