import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import moongose from "mongoose";
import morgan from "morgan";

import { indexRouter } from "./routes/index.js";
// STUB: create express server
const app = express();

// STUB: setup middleware
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

// STUB: setup routes
app.use("/", indexRouter);

// STUB: connect to database
moongose.connect(
	`mongodb+srv://alx:${process.env.MONGODB_PASSWORD}@recipes.fdrsfac.mongodb.net/recipes?retryWrites=true&w=majority`
);

// STUB: setup port
app.listen(3001, () => {
	console.log("SERVER STARTED");
});
