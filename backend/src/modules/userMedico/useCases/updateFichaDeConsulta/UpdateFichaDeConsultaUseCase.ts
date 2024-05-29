import { prisma } from "../../../../database/prismaClient";


interface IDadosFichaConsulta {
  id: string
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
}

export class UpdateFichaDeConsultaUseCase {
    async execute(dados: IDadosFichaConsulta) {
        const update = await prisma.fichaDeConsulta.update({
            where: {
                id: dados.id
            },
            data: {
                alturaUterina: dados.alturaUterina,
                apresentacaoFetal: dados.apresentacaoFetal,
                batimentoCardiacoFetal: dados.batimentoCardiacoFetal,
                dataConsulta: dados.dataConsulta,
                exantema: dados.exantema,
                idadeGestacionalDUM: dados.idadeGestacionalDUM,
                idadeGestacionalUSG: dados.idadeGestacionalUSG,
                movimentoFetal: dados.movimentoFetal,
                observacaoDiagnosticoConduta: dados.observacaoDiagnosticoConduta,
                IMC: dados.IMC,
                peso: dados.peso,
                pressaoArterial: dados.pressaoArterial,
                queixa: dados.queixa,
                toque: dados.toque
            }
        })
        return update
    }
}