import React, { useState } from "react";

import LogoVertical from "../../components/Logos/LogoVertical";
import { UserRegister } from "../../@types/userTypes";

import { Link, useNavigate } from "react-router-dom";
import { ErrorMessage, Formik, Form, Field } from "formik";
import Axios from "axios";
import { createUser } from "../../services/auth/singIn";
import { validationsRegister } from "./yupSchema"

export default function Register() {
  const [userRegister, setUserRegister] = useState<UserRegister>({} as UserRegister);
  const navigate = useNavigate();
  const handleRegister = async (values: UserRegister) => {
    console.log(values);
    try {
      let response = await createUser(values);
      console.log(response);
      if (response.status === 200 || 201) {
        //TODO: pega nome do user e seta no context
        //setUser(data);
        alert("Usuário Cadastrado com sucesso!")
        navigate('/login')
      } else {
        alert("Erro durante processo de login, tente novamente!");
      }
    } catch (erro) {
      console.log("error = ", erro);
      alert("Credenciais não encontradas!");
    }
  };

  return (
    <>
      <main>
        <section className="absolute w-full h-full">
          <div className="absolute top-0 w-full h-full bg-pink-300"></div>
          <div className="container mx-auto px-4 h-full">
            <div className="flex content-center items-center justify-center h-full">
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-5 shadow-lg rounded-lg bg-pink-50 border-0">
                  <div className="rounded-t mb-0">
                    <div className="text-center">
                      <LogoVertical />
                    </div>
                  </div>
                  <div className="flex-auto px-4 lg:px-10 py-10 xl:pb-4 pt-0">
                    <div className="text-teal-500 text-center font-semibold">
                      <p>Insira seus dados cadastrais</p>
                    </div>

                    <Formik
                      initialValues={userRegister}
                      onSubmit={handleRegister}
                      validationSchema={validationsRegister}
                    >
                      <Form className="register-form">
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="block text-brown-900 text-sm font-bold pt-2 pb-1">
                              Nome
                            </label>
                            <Field
                              className="border-0 px-3 py-3 placeholder-gray-400 text-brown-900 bg-white rounded text-sm shadow focus:outline-none focus:ring focus:ring-teal-300 w-full"
                              name="nome"
                              type="name"
                              id="nome"
                              placeholder="Digite seu nome"
                            />
                            <ErrorMessage
                              component="span"
                              name="nome"
                              className="form-error"
                            />
                          </div>
                          <div>
                            <label className="block text-brown-900 text-sm font-bold pt-2 pb-1">
                              Email
                            </label>
                            <Field
                              className="border-0 px-3 py-3 placeholder-gray-400 text-brown-900 bg-white rounded text-sm shadow focus:outline-none focus:ring focus:ring-teal-300 w-full"
                              name="email"
                              type="email"
                              id="email"
                              placeholder="Digite seu email"
                            />
                            <ErrorMessage
                              component="span"
                              name="email"
                              className="form-error"
                            />
                          </div>
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
                              CRM
                            </label>
                            <Field
                              className="border-0 px-3 py-3 placeholder-gray-400 text-brown-900 bg-white rounded text-sm shadow focus:outline-none focus:ring focus:ring-teal-300 w-full"
                              name="crm"
                              type="id"
                              id="crm"
                              placeholder="Digite seu CRM"
                            />
                            <ErrorMessage
                              component="span"
                              name="crm"
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
                              type="password"
                              id="password"
                              placeholder="Digite sua Senha"
                            />
                            <ErrorMessage
                              component="span"
                              name="password"
                              className="form-error"
                            />
                          </div>
                          <div>
                            <label className="block text-brown-900 text-sm font-bold pt-2 pb-1">
                              Confirme sua senha
                            </label>
                            <Field
                              className="border-0 px-3 py-3 placeholder-gray-400 text-brown-900 bg-white rounded text-sm shadow focus:outline-none focus:ring focus:ring-teal-300 w-full"
                              name="confirmpassword"
                              type="password"
                              id="confirmpassword"
                              placeholder="Confirme sua senha"
                            />
                            <ErrorMessage
                              component="span"
                              name="confirmpassword"
                              className="form-error"
                            />
                          </div>
                        </div>
                        <div className="text-center mt-6">
                          <button
                            className="bg-teal-500 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full"
                            type="submit"
                            style={{ transition: "all .15s ease" }}
                          >
                            Registre
                          </button>
                          <Link to="/login">
                            <p className="ml-2 mt-2 text-sm underline text-brown-900 cursor-pointer hover:text-teal-500">
                              Voltar para o Login
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
          {/* <FooterSmall absolute /> */}
        </section>
      </main>
    </>
  );
}
