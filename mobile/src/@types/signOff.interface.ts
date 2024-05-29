export type UserRegister = {
  nome: string;
  email: string;
  cpf: string;
  password: string;
};

export type UserLogin = {
  cpf: string;
  password: string;
};

export type PersonalDataTypes = {
  conhecidoComo: string;
  nomeCompanheiro: string;
  dataNascimento: string;
  idade: number;
  raca: string;
  trabalhaEmCasa: Boolean;
  ocupacao: string;
  cep: string;
  endereco: string;
  cidade: string;
  estado: string;
  telefoneFixo: string;
  telefoneCelular: string;
};

export type PatientEmergencyTypes = {
  nomeEmerg: string;
  parentescoEmerg: string;
  celEmerg: string;
  telEmerg: string;
};

export type PatientSusTypes = {
  susIdCartao: string;
  nomeDoutorRef: string;
  NISID: string;
  hospitalNascCrianca: string;
  unidMedicaPreNatal: string;
};
