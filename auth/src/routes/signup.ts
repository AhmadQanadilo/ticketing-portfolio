import express, {Request, Response, NextFunction} from "express";
import { body, validationResult } from "express-validator";
import { RequestValidationError } from "../errors/request-validation-errors";
import { DatabaseConnectionError } from "../errors/database-connection-errors";
const router = express.Router();

router.post('/api/users/signup', 
[
    body('email')
        .isEmail()
        .withMessage('Please enter a valid email address'),
    body('password')
        .trim()
        .isLength({min:4, max:20})
        .withMessage('Please enter a valid password'),
        (req:Request, res:Response, next:NextFunction) => {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                throw new RequestValidationError(errors.array())
            }
            // If validation passes, continue to the next middleware or route handler
            next();
          }
]
, (req:Request, res:Response) => {
    const { email, password} = req.body;
    console.log('creating a new user')
    throw new DatabaseConnectionError()
    res.send({})
})

export  {router as signupRouter}