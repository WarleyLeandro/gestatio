import api from "../api";

export const listAllPacientes = async () => {
  try {
    const token = localStorage.getItem('token'); // Obtém o token do localStorage
    const response = await api.get("/auth/pacientes", {
      headers: {
        Authorization: `Bearer ${token}` // Passa o token no cabeçalho Authorization
      }
    });
    return response.data;
  } catch (error) {
    throw new Error("Erro ao obter pacientes");
  }
};
