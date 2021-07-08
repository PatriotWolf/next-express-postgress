# Custom server with TypeScript + Nodemon example

This is a test project shows how I can use [TypeScript](https://typescriptlang.com) on both the server and the client while using [Nodemon](https://nodemon.io/) to live reload the server code without affecting the Next.js universal code.

This project backend is using [Express](https://expressjs.com/) and [PostgreSQL](https://www.postgresql.org/)

Server entry point is `server/index.ts` in development and `dist/index.js` in production.
The second directory should be added to `.gitignore`.

## How to use
Do create `.env` file and fill the variable bellow and use it to connect postgres database
```
DATABASE_URL
DATABASE_PORT
DATABASE_NAME
DATABASE_USER
DATABASE_PASSWORD
```
