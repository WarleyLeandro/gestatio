import { PositivoNegativo } from "../../../../database/enums"
import { prisma } from "../../../../database/prismaClient"


interface IDadosFicha {
  ABO_RH: string,
  glicemiaJejum: string,
  testeOralToleranciaGlicose: string,
  sifilis: PositivoNegativo,
  vdrl: PositivoNegativo,
  hiv_antiHiv: PositivoNegativo,
  hepatiteB: PositivoNegativo,
  toxoplasmose: PositivoNegativo,
  hemoglobina_hematocrito: string,
  urinaEAS: string,
  urinaCultura: string,
  coombsIndireto: string,
  id_medico: string,
  id_paciente: string,
}

export class CadastraFichaDeExameUseCase {
    async execute(dados: IDadosFicha) {
        const ficha = await prisma.fichaDeExame.create({
            data: {
                ABO_RH: dados.ABO_RH,
                glicemiaJejum: dados.glicemiaJejum,
                testeOralToleranciaGlicose: dados.testeOralToleranciaGlicose,
                sifilis: dados.sifilis,
                vdrl: dados.vdrl,
                hiv_antiHiv: dados.hiv_antiHiv,
                hepatiteB: dados.hepatiteB,
                toxoplasmose: dados.toxoplasmose,
                hemoglobina_hematocrito: dados.hemoglobina_hematocrito,
                urinaEAS: dados.urinaEAS,
                urinaCultura: dados.urinaCultura,
                coombsIndireto: dados.coombsIndireto,
                fk_idMedico: dados.id_medico,
                fk_idPaciente: dados.id_paciente
            }
        })

        return ficha
    }
}