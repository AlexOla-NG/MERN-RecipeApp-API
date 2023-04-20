import express from "express";
import cors from "cors";
import moongose from "mongoose";

// TODOD: stopped here
// fix mongodb connection error

// STUB: create express server
const app = express();

// STUB: setup middleware
app.use(express.json());
app.use(cors());

// STUB: connect to database
moongose.connect(
	"mongodb+srv://alx:MERNrecipe123@recipes.fdrsfac.mongodb.net/recipes?retryWrites=true&w=majority"
);

// STUB: setup port
app.listen(3001, () => {
	console.log("SERVER STARTED");
});
