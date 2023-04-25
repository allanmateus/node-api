import express from "express";
import getRouter  from "../controllers/user.js";

const router = express.router();

router.get("/", getUsers)

export default router;