export class DatabaseConnectionError extends Error {
  statusCode = 500;
  reason = "Database connection error";

  constructor() {
    super();

    Object.setPrototypeOf(this, DatabaseConnectionError.prototype);
  }
  serializeError() {
    return [{ message: this.reason }];
  }
}
