export type UserRegister = {
  nome: string
  email: string
  cpf: string
  crm: string
  password: string
};

export type UserLogin = {
  cpf: string;
  password: string;
};
