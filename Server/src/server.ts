import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";

const server = express();
const PORT = process.env.PORT;


server.listen(PORT, () => {
  console.log(`SERVER: http://localhost:${PORT}`);
});
