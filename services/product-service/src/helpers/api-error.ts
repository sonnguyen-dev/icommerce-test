export const HttpError = {
  NOT_FOUND: 404,
  OK: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  INTERNAL_SERVER_ERROR: 500,
};

export default class APIError extends Error {
  status = HttpError.INTERNAL_SERVER_ERROR

  constructor(message: string, status: number) {
    super(message);
    this.name = this.constructor.name;
    this.message = message;
    this.status = status;
  }
}
