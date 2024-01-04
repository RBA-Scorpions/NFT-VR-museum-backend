import { startServer } from "./src/index.js";
import dotenv from "dotenv";

dotenv.config({
    path: ".env",
});

startServer();
