import mongoose from "mongoose";

// STUB: create user schema
const UserSchema = new mongoose.Schema({
	username: { type: String, required: true, unique: true },
	password: { type: String, required: true },
});

// STUB: connect schema to users collection
export const UserModel = mongoose.model("users", UserSchema);
