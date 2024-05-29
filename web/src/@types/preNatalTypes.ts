import { EstadoCivil, NivelInstrucao } from "../@Enums/enums";

export type  PreNatalType = {
    nivelInstrucao: NivelInstrucao | null,
    estadoCivil: EstadoCivil | null,
    pesoAnterior: string,
    altura: string,
    IMC: string,
    DUM: string,
    DPPD: string,
    DPPE: string,
    IGH: string,
    IGM: string,
    tipoGravidez: string,
    riscoGestacional: string,
    gravidezPlanejada: boolean,
}