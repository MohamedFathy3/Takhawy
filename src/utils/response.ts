import { Response } from 'express';
import { ResponseType } from '../types/responseType';

export default (res: Response, statusCode: number, data: ResponseType) => {
  res.status(statusCode).json({
    ...data,
    message: /* res.__ ? res.__(data.message) :  */ data.message,
  });
};
