import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { UserModel } from "../models/Users.js";

// NOTE: create two endpoints for user registration and login

const router = express.Router();

// STUB: registration endpoint
router.post("/register", async (req, res) => {
	const { email, password } = req.body;

	// STUB: check if email already exists
	const user = await UserModel.findOne({ email });

	if (user) {
		return res.status(400).json({ message: "Email already exists" });
	}

	// STUB: if email does not exist, create new user
	const hashedPassword = await bcrypt.hash(password, 10);
	const newUser = new UserModel({ email, password: hashedPassword });
	await newUser.save();

	res.json({ message: "User successfully created" });
});

// STUB: login endpoint
router.post("/login", async (req, res) => {
	const { email, password } = req.body;

	// STUB: check if email exists
	const user = await UserModel.findOne({ email });

	if (!user) {
		return res.status(400).json({ message: "email does not exist" });
	}

	// STUB: check if password matches
	const isPasswordValid = await bcrypt.compare(password, user.password);

	if (!isPasswordValid) {
		return res.status(400).json({ message: "Incorrect email or password" });
	}

	// STUB: if email and password match, create JWT
	const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

	return res.json({ data: { token, userID: user._id } });
});

export { router as userRouter };
