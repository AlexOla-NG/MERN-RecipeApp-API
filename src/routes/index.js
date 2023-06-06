import express from "express";
import { userRouter } from "./users.js";
import { recipesRouter } from "./recipes.js";

const app = express();

app.use("/auth", userRouter);
app.use("/recipes", recipesRouter);

export { app as indexRouter };
