export interface IResponseLogin {
  token: string;
  user: {
    id: string;
    nome: string;
    email: string;
    cpf: string;
  };
}
