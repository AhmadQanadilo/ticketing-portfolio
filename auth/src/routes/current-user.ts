import express from "express";
import jwt from "jsonwebtoken";
import { currentUserMiddleware } from "../middlewares/current-user";
const router = express.Router();

router.get("/api/users/currentuser", currentUserMiddleware, (req, res) => {
  res.send(req.currentUser || null);
});

export  {router as currentUserRouter}