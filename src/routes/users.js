import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { UserModel } from "../models/Users.js";

// STUB: create two endpoints for user registration and login

const router = express.Router();

// STUB: registration endpoint
router.post("/register", async (req, res) => {
	const { username, password } = req.body;

	// STUB: check if username already exists
	const user = await UserModel.findOne({ username });

	if (user) {
		return res.status(400).json({ message: "Username already exists" });
	}

	// STUB: if user name does not exist, create new user
	const hashedPassword = await bcrypt.hash(password, 10);
	const newUser = new UserModel({ username, password: hashedPassword });
	newUser.save();

	res.json({ message: "User successfully created" });
});

// STUB: login endpoint
router.post("/login", async (req, res) => {
	const { username, password } = req.body;

	// STUB: check if username exists
	const user = await UserModel.findOne({ username });

	if (!user) {
		return res.status(400).json({ message: "Username does not exist" });
	}

	// STUB: check if password matches
	const isPasswordValid = await bcrypt.compare(password, user.password);

	if (!isPasswordValid) {
		return res
			.status(400)
			.json({ message: "Incorrect username or password" });
	}

	// STUB: if username and password match, create JWT
	const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

	return res.json({ token, userID: user._id });
});

export { router as userRouter };
