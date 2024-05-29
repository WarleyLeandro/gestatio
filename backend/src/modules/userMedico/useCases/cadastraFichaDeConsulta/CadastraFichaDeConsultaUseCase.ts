import { prisma } from "../../../../database/prismaClient"

interface IDadosFicha {
  dataConsulta: string
  idadeGestacionalDUM: string
  idadeGestacionalUSG: string
  peso: number
  IMC: number
  queixa: string
  apresentacaoFetal: string
  observacaoDiagnosticoConduta: string
  pressaoArterial: number
  alturaUterina: number
  batimentoCardiacoFetal: number
  movimentoFetal: string
  exantema: string
  toque: string
  id_paciente: string
  id_medico: string
}

export class CadastraFichaDeConsultaUseCase {
    async execute(dados: IDadosFicha) {
        const ficha = await prisma.fichaDeConsulta.create({
            data: {
                dataConsulta: dados.dataConsulta,
                idadeGestacionalDUM: dados.idadeGestacionalDUM,
                idadeGestacionalUSG: dados.idadeGestacionalUSG,
                peso: dados.peso,
                IMC: dados.IMC,
                queixa: dados.queixa,
                apresentacaoFetal: dados.apresentacaoFetal,
                observacaoDiagnosticoConduta: dados.observacaoDiagnosticoConduta,
                pressaoArterial: dados.pressaoArterial,
                alturaUterina: dados.alturaUterina,
                batimentoCardiacoFetal: dados.batimentoCardiacoFetal,
                movimentoFetal: dados.movimentoFetal,
                exantema: dados.exantema,
                toque: dados.toque,
                fk_idPaciente: dados.id_paciente,
                fk_idMedico: dados.id_medico
            },
        })

        return ficha
    }
}