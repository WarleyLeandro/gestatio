import * as yup from "yup";

export const validationsRegister = yup.object().shape({
  dataConsulta: yup.date().required("Obrigatório"),
  idadeGestacionalDUM: yup.string().required("Obrigatório"),
  idadeGestacionalUSG: yup.string().required("Obrigatório"),
  peso: yup.number().typeError("Obrigatório").required("Obrigatório"),
  IMC: yup.number().typeError("Obrigatório").required("Obrigatório"),
  queixa: yup.string().required("Obrigatório"),
  apresentacaoFetal: yup.string().required("Obrigatório"),
  observacaoDiagnosticoConduta: yup.string().required("Obrigatório"),
  pressaoArterial: yup.number().typeError("Obrigatório").required("Obrigatório"),
  alturaUterina: yup.number().typeError("Obrigatório").required("Obrigatório"),
  batimentoCardiacoFetal: yup.number().typeError("Obrigatório").required("Obrigatório"),
  movimentoFetal: yup.string().required("Obrigatório"),
  exantema: yup.string().required("Obrigatório"),
  toque: yup.string().required("Obrigatório"),
});
