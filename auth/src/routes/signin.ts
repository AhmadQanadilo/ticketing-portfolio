import express, {  Request, Response } from "express";
import { body } from "express-validator";
import { validateRequest } from "../middlewares/validate-request";

const router = express.Router();

router.post(
  "/api/users/signin",
  [
    body("email").isEmail().withMessage("Please enter a valid email"),
    body("password").trim().isEmpty().withMessage("Password cannot be empty"),
  ],
  validateRequest,

  (req: Request, res: Response) => {}
);

export { router as signinRouter };
