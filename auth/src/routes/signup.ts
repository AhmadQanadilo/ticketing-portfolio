import express, { Request, Response } from "express";
import { body } from "express-validator";
import { User } from "../models/user";
import { BadRequestError } from "../errors/bad-request-error";
import { validateRequest } from "../middlewares/validate-request";
import jwt from "jsonwebtoken";

const router = express.Router();

router.post(
  "/api/users/signup",
  [
    body("email").isEmail().withMessage("Please enter a valid email address"),
    body("password")
      .trim()
      .isLength({ min: 4, max: 20 })
      .withMessage("Please enter a valid password"),
  ],
  validateRequest,
  async (req: Request, res: Response) => {
    const { email, password } = req.body;

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      console.log("User already exists");
      throw new BadRequestError("User already exists");
    }

    try {
      const user = User.build({ email, password });
      await user.save();
      // genrerate a user jwt token

      const userJwt = jwt.sign(
        {
          id: user.id,
          email: user.email,
        },
        process.env.JWT_KEY!
      );

      // store the user token in the cookie
      req.session = { jwt: userJwt };

      res.status(201).send(user);
    } catch (error) {
      console.log(error);
    }
  }
);

export { router as signupRouter };
