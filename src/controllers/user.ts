import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { User } from "../entities/user";

export class UserController {
  static getAll = async (req: Request, res: Response) => {
    const userRepository = getRepository(User);
    const users = await userRepository.find();
    res.send(users);
  };

  static createUser = async (req: Request, res: Response) => {
    const userRepository = getRepository(User);
    const user = userRepository.create(req.body);
    await userRepository.save(user);
    res.send(user);
  };
}
