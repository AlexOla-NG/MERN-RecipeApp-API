import mongoose from "mongoose";

// STUB: create user schema
const UserSchema = new mongoose.Schema({
	email: { type: String, required: true, unique: true },
	password: { type: String, required: true },
	savedRecipes: [{ type: mongoose.Schema.Types.ObjectId, ref: "recipes" }],
});

// STUB: connect schema to users collection
export const UserModel = mongoose.model("users", UserSchema);
