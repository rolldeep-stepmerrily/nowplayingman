import { HttpStatus } from '@nestjs/common';

export const GLOBAL_ERRORS = {
  UNKNOWN_ERROR: {
    statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
    errorCode: 'UNKNOWN_ERROR',
    message: 'Unknown error',
  },
  DATABASE_ERROR: {
    statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
    errorCode: 'DATABASE_ERROR',
    message: 'Database error',
  },
  NOT_FOUND_RESOURCE: {
    statusCode: HttpStatus.NOT_FOUND,
    errorCode: 'NOT_FOUND_RESOURCE',
    message: 'Not found resource',
  },
  BAD_REQUEST: {
    statusCode: HttpStatus.BAD_REQUEST,
    errorCode: 'BAD_REQUEST',
    message: 'Bad request',
  },
};
