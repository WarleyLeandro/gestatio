import * as yup from "yup";

export const validationsRegister = yup.object().shape({
  nivelInstrucao: yup.string().required("Obrigatório"),
  estadoCivil: yup.string().required("Obrigatório"),
  pesoAnterior: yup.string().required("Obrigatório"),
  altura: yup.string().required("Obrigatório"),
  IMC: yup.string().required("Obrigatório"),
  DUM: yup.date().max(new Date(), 'Data não pode ser no futuro').required("Obrigatório"),
  DPPD: yup.date().min(new Date(), 'Data deve ser futura').required("Obrigatório"),
  DPPE: yup.date().min(new Date(), 'Data deve ser futura').required("Obrigatório"),
  IGH: yup.string().required("Obrigatório"),
  IGM: yup.string().required("Obrigatório"),
  tipoGravidez: yup.string().required("Obrigatório"),
  riscoGestacional: yup.string().required("Obrigatório"),
  gravidezPlanejada: yup.bool().required("Obrigatório"),
});   