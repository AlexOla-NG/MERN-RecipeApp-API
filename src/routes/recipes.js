import express from "express";
import mongoose from "mongoose";
import { RecipeModel } from "../models/Recipes.js";
import { UserModel } from "../models/Users.js";

// TODO: add routes to delete saved recipes

const router = express.Router();

// STUB: create route to get all recipes
router.get("/", async (req, res) => {
	try {
		// STUB: get all the recipes in the database
		const recipes = await RecipeModel.find({});
		res.json(recipes);
	} catch (error) {
		res.json(error);
	}
});

// STUB: create route for creating a new recipe
router.post("/", async (req, res) => {
	const recipe = new RecipeModel(req.body);
	try {
		// STUB: save recipe to database
		const response = await recipe.save();
		res.json(response);
	} catch (error) {
		res.json(error);
	}
});

// STUB: create route for user to save recipe
// get recipeID & lgged in userID from req body, use data to find user & recipe in model
// push recipe to user.savedRecipes, save user to database
// return savedRecipes attached to the user
router.put("/", async (req, res) => {
	try {
		const recipe = await RecipeModel.findById(req.body.recipeID);
		const user = await UserModel.findById(req.body.userID);
		user.savedRecipes.push(recipe);
		await user.save();
		res.json({ savedRecipes: user.savedRecipes });
	} catch (error) {
		res.json(error);
	}
});

// STUB: get a list of all recipe IDs that a logged in user has saved
router.get("/savedRecipes/ids/:userID", async (req, res) => {
	try {
		const user = await UserModel.findById(req.params.userID);
		res.json({ savedRecipes: user?.savedRecipes });
	} catch (error) {
		res.json(error);
	}
});

// STUB: get a list of all recipes that a logged in user has saved
router.get("/savedRecipes/:userID", async (req, res) => {
	try {
		const user = await UserModel.findById(req.params.userID);
		const savedRecipes = await RecipeModel.find({
			_id: { $in: user?.savedRecipes }, // this ensures that the recipes, and not the id is returned
		});
		res.json(savedRecipes);
	} catch (error) {
		res.json(error);
	}
});

export { router as recipesRouter };
