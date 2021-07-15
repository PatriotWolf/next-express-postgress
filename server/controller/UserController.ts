import { Request, Response } from "express";
import { errorMessage, status } from "../helper/status";
import {
  isEmpty,
  isValidEmail,
  isValidPhoneNumber,
} from "../helper/validation";
import pool from "../db/pool";
import userQuery from "../db/query/userQuery";

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
    if (!isValidPhoneNumber(phone)) {
      errorMessage.error = "Please enter a valid Phone Number";
      return res.status(status.bad).send(errorMessage);
    }
    try {
      const { rows } = await userQuery.selectUser(
        email,
        username,
        phone,
        created_on
      );
      const todos = rows;
      return res.send(todos);
    } catch (error) {
      console.error(error.message);
      return res.status(500).json("Server error");
    }
  }
  public async deleteUser(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    try {
      const { rows } = await userQuery.deleteUser(id);
      const todos = rows;
      return res.send(todos);
    } catch (error) {
      console.error(error.message);
      return res.status(500).json("Server error");
    }
  }
}

export default UserControler;
