import { Injectable } from '@nestjs/common';

@Injectable()
export class ResponseUtil {
  dataResponse(
    status: number,
    data: any,
    validate_id?: string,
    type?: string,
  ): any {
    if (status && data) {
      let message = '';
      console.log(status);

      switch (status) {
        case 200:
          message = 'SUCCESSFUL_REQUEST';
          break;
        case 201:
          message = 'SUCCESSFUL_CREATED';
          break;
        case 401:
          message = 'UNAUTHORIZED';
          break;
        case 422:
          message = 'INVALID_REQUEST';
          break;
        case 404:
          message = 'NOT_FOUND';
          break;
        case 400:
          message = 'BAD_REQUEST';
          break;
        case 500:
          message = 'INTERNAL_SERVER_ERROR';
          break;
        default:
          return false;
      }

      const response: any = {
        status,
        message,
      };

      if (validate_id) response.validate_id = validate_id;

      switch (type) {
        case 'GET_PAGINATION':
          response.payload = data;
          break;
        default:
          response.data = data;
          break;
      }

      return response;
    }

    return false;
  }
}
