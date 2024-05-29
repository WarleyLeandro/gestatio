import { prisma } from "../../../../database/prismaClient"
import { SNNI } from "../../../../database/enums";

interface DatasFamilyBackground {
    id_paciente: string;
    diabetes: SNNI | null;
    hipertensao: SNNI | null;
    gemelaridade: SNNI | null;
    outros: SNNI | null;
  }

export class RegisterFamilyBackGroundUseCase {
    async execute({id_paciente, 
      diabetes,
      hipertensao,
      gemelaridade,
      outros } :DatasFamilyBackground) {
      const familyBackGround = await prisma.fichaDeAntecedentes.create({
        data: {
            diabetes: diabetes,
            hipertensao: hipertensao,
            gemelaridade: gemelaridade,
            outros: outros,
            paciente: {
                connect: {
                id: id_paciente, 
             },
          },
        },
      })
  
      return familyBackGround
    }
  }