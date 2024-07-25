import { Response, Request, NextFunction } from 'express';
import ResponseError from '../util/ResponseError';

const errorHandler = (
  error: typeof ResponseError | Error,
  _req: Request,
  res: Response,
  _next: NextFunction,
) => {
  if (error instanceof ResponseError) {
    res.status(error.statusCode);
    res.json({
      errorCode: error.errorCode,
      message: error.message,
    });
    return;
  }

  res.status(500);
  res.json({
    errorCode: 500,
    message: 'Something went wrong.',
  });

  return;
};

export default errorHandler;
