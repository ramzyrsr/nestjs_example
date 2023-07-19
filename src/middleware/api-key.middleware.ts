import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class ApiKeyMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const authHeader = req.headers.api_key;

    if (authHeader) {
      const token = authHeader;
      if (token !== process.env.API_KEY) {
        return res.sendStatus(403);
      }
      next();
    } else {
      res.sendStatus(401);
    }
  }
}
