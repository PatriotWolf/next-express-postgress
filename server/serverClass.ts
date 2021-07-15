import express from "express";

import usersRouter from "./routes/UserRouter";
import pool, { createUserTable } from "./db/pool";
import { NextServer } from "next/dist/server/next";

interface ServerProps {
  nextApp: NextServer;
  isDev: boolean;
}

class Server {
  private app;
  private isDev;
  private handle;

  constructor({ nextApp, isDev }: ServerProps) {
    this.app = express();
    this.handle = nextApp.getRequestHandler();
    this.isDev = isDev;
    this.config();
    this.routerConfig();
    this.dbConnect();
  }

  private config() {
    this.app.use(express.json({ limit: `1mb` }));
  }

  private routerConfig() {
    this.app.use("/user", usersRouter);
    this.app.get("*", (req, res) => {
      return this.handle(req, res);
    });
  }

  private dbConnect() {
    pool.connect((err) => {
      if (err) throw new Error(err.message);
      console.log("Connected");
      createUserTable();
    });
  }

  public start = (port: number): Promise<unknown> => {
    return new Promise((resolve, reject) => {
      this.app
        .listen(port, () => {
          console.log(
            `> Server listening at http://localhost:${port} as ${
              this.isDev ? "development" : process.env.NODE_ENV
            }`
          );
          resolve(port);
        })
        .on("error", (err: Error) => reject(err));
    });
  };
}

export default Server;
