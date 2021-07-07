import express from "express";
import { IncomingMessage, ServerResponse } from "http";
import { UrlWithParsedQuery } from "url";

import usersRouter from "./routes/UserRouter";
import pool from "./db/pool";

interface ServerProps {
  handle: (
    req: IncomingMessage,
    res: ServerResponse,
    parsedUrl?: UrlWithParsedQuery | undefined
  ) => Promise<any>;
  isDev: boolean;
}

class Server {
  private app;
  private isDev;
  private handle;

  constructor({ handle, isDev }: ServerProps) {
    this.app = express();
    this.handle = handle;
    this.isDev = isDev;
    this.routerConfig();
    this.dbConnect();
  }

  private routerConfig() {
    this.app.use("/user", usersRouter);
    this.app.get("*", (req, res) => {
      return this.handle(req, res);
    });
  }

  private dbConnect() {
    pool.connect(function (err, _client, _done) {
      if (err) throw new Error(err.message);
      console.log("Connected");
    });
  }

  public start = (port: number) => {
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
        .on("error", (err: Object) => reject(err));
    });
  };
}

export default Server;
