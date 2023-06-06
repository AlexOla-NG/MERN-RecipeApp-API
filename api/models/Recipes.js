import mongoose from "mongoose";

// STUB: create recipe schema
const RecipeSchema = new mongoose.Schema({
	name: { type: String, required: true },
	ingredients: [{ type: String, required: true }],
	instructions: { type: String, required: true },
	cookingTime: { type: Number, required: true },
	imageUrl: { type: String, required: true },
	userOwner: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "users",
		required: true,
	},
});

// STUB: connect schema to recipe collection
export const RecipeModel = mongoose.model("recipes", RecipeSchema);
