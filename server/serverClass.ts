import express from "express";
import { IncomingMessage, ServerResponse } from "http";
import { UrlWithParsedQuery } from "url";

import usersRouter from "./routes/UserRouter";

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
  }

  private routerConfig() {
    this.app.use("/list", usersRouter);
    this.app.get("/list", (_req, res) => {
      return res.json({ data: "test" });
    });
    this.app.get("*", (req, res) => {
      return this.handle(req, res);
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
