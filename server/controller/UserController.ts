import { Request, Response } from "express";

class UserControler {
  public get(_req: Request, res: Response) {
    return res.json({ data: "test" });
  }
}

export default UserControler;
