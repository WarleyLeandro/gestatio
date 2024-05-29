import React, { useState } from "react";
import LogoVertical from "../components/Logos/LogoVertical";
import { UserLogin } from "../@types/userTypes";


import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup";
import { ErrorMessage, Formik, Form, Field } from "formik";
import { authUser } from "../services/auth/singIn";

export default function Login() {
  const [userLogin, setUserLogin] = useState<UserLogin>({} as UserLogin);
  const [data, setData] = useState({});
  const navigate = useNavigate();

  const handleLogin = async (values: UserLogin) => {
    try {
      const response = await authUser(values);
      console.log(response);
      if (response.status === 200 || response.status === 201) {
        const token = response.data.token; // Obtenha o token da resposta
        localStorage.setItem('token', token); // Armazene o token no localStorage
        navigate('/');
      } else {
        alert('Erro durante processo de login, tente novamente!');
      }
    } catch (erro) {
      console.log("error = ", erro);
      alert("Credenciais não encontradas!");
    }
  };
  

  const validationsLogin = yup.object().shape({
    cpf: yup.string().required("O CPF é obrigatório"),
    password: yup
      .string()
      // .min(8, "A senha deve ter pelo menos 8 caracteres")
      .required("A senha é obrigatória"),
  });

  return (
    <>
      {/* <Navbar transparent /> */}
      <main>
        <div className="min-h-screen flex">
          {/* Coluna esquerda */}
          <div
            className="flex-1 bg-gray-100 flex justify-center items-center"  
            style={{
              backgroundImage: "url('/public/assets/images/bgtest.jpg')", 
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            {/* Conteúdo da coluna esquerda */}
          </div> 

          {/* Coluna direita */}
          <div className="flex-1 bg-pink-300 bg-cover bg-center">
            <div className="container h-full">
              <div className="flex items-center justify-center h-full">
                <div className="w-full mx-32 px-4">
                  <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-pink-50 border-0">
                    <LogoVertical />
                    <div className="flex-auto lg:px-10 py-10 pt-0">
                      <div className="text-teal-500 text-center mb-4 font-semibold">
                        <p>Faça login e já comece a usar</p>
                      </div>

                      <Formik
                        initialValues={userLogin}
                        onSubmit={handleLogin}
                        validationSchema={validationsLogin}
                      >
                        <Form className="login-form">
                          <div>
                            <label className="block text-brown-900 text-sm font-bold pt-2 pb-1">
                              CPF
                            </label>
                            <Field
                              className="border-0 px-3 py-3 placeholder-gray-400 text-brown-900 bg-white rounded text-sm shadow focus:outline-none focus:ring focus:ring-teal-300 w-full"
                              name="cpf"
                              type="id"
                              id="cpf"
                              placeholder="Digite seu CPF"
                            />
                            <ErrorMessage
                              component="span"
                              name="cpf"
                              className="form-error"
                            />
                          </div>
                          <div>
                            <label className="block text-brown-900 text-sm font-bold pt-2 pb-1">
                              Senha
                            </label>
                            <Field
                              className="border-0 px-3 py-3 placeholder-gray-400 text-brown-900 bg-white rounded text-sm shadow focus:outline-none focus:ring focus:ring-teal-300 w-full"
                              name="password"
                              label="Senha"
                              type="password"
                              id="password"
                              placeholder="Digite sua Senha"
                            />
                            <ErrorMessage
                              component="span"
                              name="password"
                              className="form-error"
                            />{" "}
                          </div>
                          <div></div>
                          <div className="text-center mt-6">
                            <button
                              className="bg-teal-500 text-white active:bg-gray-700 text-sm font-bold px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full"
                              type="submit"
                              style={{ transition: "all .15s ease" }}
                            >
                              Entrar
                            </button>
                            {/* <p className="ml-2 mb-2 text-sm underline text-brown-900 cursor-pointer hover:text-teal-500" >
                          Esqueceu sua senha?
                        </p> */}
                            <Link to="/register">
                              <p className="ml-2 mt-2 text-sm underline text-brown-900 cursor-pointer hover:text-teal-500">
                                Não possui uma conta? Crie uma!
                              </p>
                            </Link>
                          </div>
                        </Form>
                      </Formik>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <FooterSmall absolute /> */}
      </main>
    </>
  );
}
