import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class AuthorizationMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const authHeader = req.headers.api_key;

    if (authHeader) {
      const token = authHeader;
      if (token !== process.env.API_KEY) {
        return res.sendStatus(403);
      }
      const resAuthorization = () =>
        res.status(401).json({
          status: 401,
          message: 'Authorization Rejected',
          data: null,
        });
      const { authorization } = req.headers;
      if (authorization && authorization !== '') {
        next();
      } else {
        resAuthorization();
      }
    } else {
      res.sendStatus(401);
    }
  }
}
