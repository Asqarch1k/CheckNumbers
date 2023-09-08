import { Error } from "./errors.js";

export class ValidationError extends Error {
  constructor(message) {
    super(message, "Validation Error");
  }
}
