export enum SNNI {
  SIM = "Sim",
  NAO = "Não",
  NAO_INFORMADO = "Não informado",
}

export enum NivelInstrucao {
  NENHUM = "Nenhum",
  FUNDAMENTAL = "Fundamental",
  MEDIO = "Médio",
  SUPERIOR = "Superior",
}

export enum PositivoNegativo {
  POSITIVO = "POSITIVO",
  NEGATIVO = "NEGATIVO",
}

export type PreNatalTypes = {
  nivelInstrucao: NivelInstrucao;
  estadoCivil: string;
  pesoAnterior: string;
  altura: string;
  IMC: string;
  DUM: string;
  DPPD: string;
  DPPE: string;
  IGH: string;
  IGM: string;
  tipoGravidez: string;
  riscoGestacional: string;
  gravidezPlanejada: boolean;
};

export type AntecedentesTypes = {
  diabetes: SNNI;
  hipertensao: SNNI;
  gemelaridade: SNNI;
  outros: SNNI;
};

export type ConsultasTypes = {
  dataConsulta: Date;
  idadeGestacionalDUM: string;
  idadeGestacionalUSG: string;
  peso: number;
  IMC: number;
  queixa: string;
  apresentacaoFetal: string;
  observacaoDiagnosticoConduta: string;
  pressaoArterial: number;
  alturaUterina: number;
  batimentoCardiacoFetal: number;
  movimentoFetal: string;
  exantema: string;
  toque: string;
};

export type ExamesType = {
  ABO_RH: string;
  glicemiaJejum: string;
  testeOralToleranciaGlicose: string;
  sifilis: PositivoNegativo;
  vdrl: PositivoNegativo;
  hiv_antiHiv: PositivoNegativo;
  hepatiteB: PositivoNegativo;
  toxoplasmose: PositivoNegativo;
  hemoglobina_hematocrito: string;
  urinaEAS: string;
  urinaCultura: string;
  coombsIndireto: string;
};
