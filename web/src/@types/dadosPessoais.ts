export type dadosPessoaisType = {
  conhecidoComo: string
  nomeCompanheiro: string
  dataNascimento: string
  idade: number
  raca: string
  trabalhaEmCasa: Boolean
  ocupacao: string
  cep: string
  endereco: string
  cidade: string
  estado: string
  telefoneFixo: string
  telefoneCelular: string
};

export type SUSType = {
  susIdCartao: string
  nomeDoutorRef: string
  NISID: string
  hospitalNascCrianca: string
  unidMedicaPreNatal: string
}

export type EmergencyType = {
  nomeEmerg: string         
  parentescoEmerg: string   
  celEmerg: string          
  telEmerg: string
}
