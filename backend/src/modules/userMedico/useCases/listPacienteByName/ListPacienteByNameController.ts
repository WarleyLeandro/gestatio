import { Request, Response } from "express";
import { ListPacienteByNameUseCase } from "./ListPacienteByNameUseCase";


export class ListPacienteByNameController {
  async handle(req: Request, res: Response) {
    const { nome } = req.body

    const listPacienteByNameUseCase = new ListPacienteByNameUseCase() 

    const result = await listPacienteByNameUseCase.execute(nome)

    return res.status(200).send(result)
  }
}