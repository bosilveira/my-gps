import { Request, Response, NextFunction } from "express";
import * as jwt from "jsonwebtoken";
import { AppDataSource } from "../data-source";
import { User } from "../entities/user.entity";

interface ICredentialsRequest extends Request {
  user?: User
}

const checkCredentials = async ( req: ICredentialsRequest, res: Response, next: NextFunction, levels: number[] ) => {
    try {
      const credentials = req.user.role;
      if (levels.includes(credentials)) {
        throw new Error("Admin Only");
      } 
      next();
    } catch (error) {
      return res.status(401).json({ message: error.message });
    }
  };

export const checkAdminCredentials = async ( req: ICredentialsRequest, res: Response, next: NextFunction ) =>
  checkCredentials( req, res, next, [ 0 ] );

export const checkManagerCredentials = async ( req: ICredentialsRequest, res: Response, next: NextFunction ) =>
  checkCredentials( req, res, next, [ 0, 1 ] );

export const checkCourierCredentials = async ( req: ICredentialsRequest, res: Response, next: NextFunction ) =>
  checkCredentials( req, res, next,  [ 0, 1, 2 ] );

export const checkDriverCredentials = async ( req: ICredentialsRequest, res: Response, next: NextFunction ) =>
  checkCredentials( req, res, next,  [ 0, 1, 2, 3 ] );

export const checkCRSCredentials = async ( req: ICredentialsRequest, res: Response, next: NextFunction ) =>
  checkCredentials( req, res, next,  [ 0, 1, 2, 3, 4 ] );