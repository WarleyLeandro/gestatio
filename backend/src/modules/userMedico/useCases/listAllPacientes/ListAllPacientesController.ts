import { Request, Response } from "express";
import { ListAllPacientesUseCase } from "./ListAllPacientesUseCase";


export class ListAllPacientesController {
  async handle(req: Request, res: Response) {
    
    const listAllPacientesUseCase = new ListAllPacientesUseCase()

    const result = await listAllPacientesUseCase.execute()

    return res.status(200).send(result)
  }
}