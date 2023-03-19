import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import todo from "./../router/todos";
import user from "./../router/user";
import auth from "./../router/auth";

const server = express();
const PORT = process.env.PORT;

server.use(cors());
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

server.use("/todo", todo);
server.use("/user", user);
server.use("/auth", auth);

server.listen(PORT, () => {
  console.log(`SERVER: http:/localhost:${PORT}`);
});
