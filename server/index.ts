import next from "next";
import Server from "./serverClass";

const port = parseInt(process.env.PORT || "3000", 10);
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = new Server({ handle, isDev: dev });
  server.start(port);
});
