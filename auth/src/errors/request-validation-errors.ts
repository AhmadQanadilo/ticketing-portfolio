import { ValidationError } from "express-validator";

export class RequestValidationError extends Error {
  constructor(public errors: ValidationError[]) {
    super();

    //this step is only needed when extending a built in class
    Object.setPrototypeOf(this, RequestValidationError.prototype);
  }
}
