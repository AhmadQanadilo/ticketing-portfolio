import { Request, Response, NextFunction } from "express";
import { RequestValidationError } from "../errors/request-validation-errors";
import { DatabaseConnectionError } from "../errors/database-connection-errors";

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof RequestValidationError) {
    return res.status(err.statusCode).send({ errors: err.serializeError() });
  }

  if (err instanceof DatabaseConnectionError) {
    res.status(err.statusCode).send({ errors: err.serializeError() });
  }

  res.status(400).send({
   errors: [{ message: "some error occurred"}]
  });
};
