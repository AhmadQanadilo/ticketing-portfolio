export abstract class CustomError extends Error {
  abstract statusCode: number;
  constructor() {
    super();
    //this step is only needed when extending a built in class
    Object.setPrototypeOf(this, CustomError.prototype);
  }

  abstract serializeError(): { message: string; field?: string }[];
}
