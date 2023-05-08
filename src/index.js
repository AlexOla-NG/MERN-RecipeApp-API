import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import moongose from "mongoose";

import { userRouter } from "./routes/users.js";
import { recipesRouter } from "./routes/recipes.js";

// STUB: create express server
const app = express();

// STUB: setup middleware
app.use(express.json());
app.use(cors());

// STUB: setup routes
app.use("/auth", userRouter);
app.use("/recipes", recipesRouter);

// STUB: connect to database
moongose.connect(
	`mongodb+srv://alx:${process.env.MONGODB_PASSWORD}@recipes.fdrsfac.mongodb.net/recipes?retryWrites=true&w=majority`
);

// STUB: setup port
app.listen(3001, () => {
	console.log("SERVER STARTED");
});

// TODO: stopped here
// create endpoints for creating & saving recipes
