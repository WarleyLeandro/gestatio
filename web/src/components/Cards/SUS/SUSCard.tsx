import React, { useEffect, useState } from 'react';
import { ErrorMessage, Formik, Form, Field } from "formik";
import MaskedInput from "react-text-mask";
// Components
import { SUSType } from '../../../@types/DadosPessoais';
import { getSUSDataFunc, postSUSDataFunc, putSUSDataFunc } from '../../../services/pacients/PersonalData';
import { nisMask, cartaoSusMask } from '../../Inputs/inputMasks'

const defaultSUSData = {
    "susIdCartao": "",
    "nomeDoutorRef": "",
    "NISID": "",
    "hospitalNascCrianca": "",
    "unidMedicaPreNatal": ""
}

function SUSDataCard({ handleHasSUSData, pacient }) {
    const [SUSData, setSUSData] = useState<SUSType>({} as SUSType);
    const [isEditing, setIsEditing] = useState(false);
    const [hasSUSData, setHasSUSData] = useState(false);
    const [pacientId, setPacientId] = useState(localStorage.getItem('pacient_id') || '')

    useEffect(() => {
        fetchSUSData(pacient.id);
        setIsEditing(false)
    }, [pacient.id]);

    const fetchSUSData = async (id_paciente: string) => {
        const response = await getSUSDataFunc(id_paciente);
        setSUSData(response);
        if (response) {
            handleHasSUSData(true);
            setHasSUSData(true);
        }
        else {
            handleHasSUSData(false);
            setHasSUSData(false);
        }
    };

    const handlePostSUSData = async (values: SUSType) => {
        if (pacientId == "") {
            alert("Paciente não encontrada")
        }
        if (hasSUSData) {
            try {
                let response = await putSUSDataFunc(pacientId, values);
                if (response.status === 200 || 201) {
                    alert("Usuário atualizado com sucesso!")
                    setIsEditing(false);
                } else {
                    alert("Erro durante processo, tente novamente!");
                }
            } catch (erro) {
                console.log("error = ", erro);
                alert("Credenciais não encontradas!");
            }
        } else {
            try {
                let response = await postSUSDataFunc(pacientId, values);
                if (response.status === 200 || 201) {
                    alert("Usuário Cadastrado com sucesso!")
                    setIsEditing(false);
                } else {
                    alert("Erro durante processo, tente novamente!");
                }
            } catch (erro) {
                console.log("error = ", erro);
                alert("Credenciais não encontradas!");
            }
        }
    };

    return (
        <div className="relative">
            <h1 className="text-2xl md:text-3xl text-pink-900 font-bold mb-1">Dados do SUS</h1>
            {
                Object.keys(SUSData).length !== 0 ? (
                    <>

                        <Formik
                            initialValues={SUSData}
                            enableReinitialize
                            onSubmit={handlePostSUSData}
                        >
                            <Form className="register-form">
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-brown-900 text-sm font-bold pt-2 pb-1">
                                            Número Cartão SUS
                                        </label>
                                        <Field
                                            name="susIdCartao"
                                            id="susIdCartao"
                                            placeholder="Digite o número do cartão"
                                            render={({ field }) => (
                                                < MaskedInput
                                                    {...field}
                                                    className="border-0 px-3 py-3 placeholder-gray-400 text-brown-900 bg-white rounded text-sm shadow focus:outline-none focus:ring focus:ring-teal-300 w-full"
                                                    type="text"
                                                    disabled={!isEditing}
                                                    mask={cartaoSusMask}
                                                    placeholder="Digite o número do cartão"
                                                />
                                            )}
                                        />
                                        <ErrorMessage
                                            component="span"
                                            name="susIdCartao"
                                            className="form-error"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-brown-900 text-sm font-bold pt-2 pb-1">
                                            Nome do médico responsável
                                        </label>
                                        <Field
                                            className="border-0 px-3 py-3 placeholder-gray-400 text-brown-900 bg-white rounded text-sm shadow focus:outline-none focus:ring focus:ring-teal-300 w-full"
                                            name="nomeDoutorRef"
                                            type="text"
                                            id="nomeDoutorRef"
                                            placeholder="Digite o nome"
                                            disabled={!isEditing}
                                        />
                                        <ErrorMessage
                                            component="span"
                                            name="nomeDoutorRef"
                                            className="form-error"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-brown-900 text-sm font-bold pt-2 pb-1">
                                            Número do NIS
                                        </label>
                                        <Field
                                            name="NISID"
                                            id="NISID"
                                            placeholder="Digite o número do cartão"
                                            render={({ field }) => (
                                                < MaskedInput
                                                    {...field}
                                                    className="border-0 px-3 py-3 placeholder-gray-400 text-brown-900 bg-white rounded text-sm shadow focus:outline-none focus:ring focus:ring-teal-300 w-full"
                                                    type="text"
                                                    disabled={!isEditing}
                                                    mask={nisMask}
                                                    placeholder="Digite o número do cartão"
                                                />
                                            )}
                                        />
                                        <ErrorMessage
                                            component="span"
                                            name="NISID"
                                            className="form-error"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-brown-900 text-sm font-bold pt-2 pb-1">
                                            Hospital do parto
                                        </label>
                                        <Field
                                            className="border-0 px-3 py-3 placeholder-gray-400 text-brown-900 bg-white rounded text-sm shadow focus:outline-none focus:ring focus:ring-teal-300 w-full"
                                            name="hospitalNascCrianca"
                                            type="text"
                                            id="hospitalNascCrianca"
                                            placeholder="Digite o hospital"
                                            disabled={!isEditing}
                                        />
                                        <ErrorMessage
                                            component="span"
                                            name="hospitalNascCrianca"
                                            className="form-error"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-brown-900 text-sm font-bold pt-2 pb-1">
                                           Unidade médica do pré-natal
                                        </label>
                                        <Field
                                            className="border-0 px-3 py-3 placeholder-gray-400 text-brown-900 bg-white rounded text-sm shadow focus:outline-none focus:ring focus:ring-teal-300 w-full"
                                            name="unidMedicaPreNatal"
                                            type="text"
                                            id="unidMedicaPreNatal"
                                            placeholder="Digite o nome"
                                            disabled={!isEditing}
                                        />
                                        <ErrorMessage
                                            component="span"
                                            name="unidMedicaPreNatal"
                                            className="form-error"
                                        />
                                    </div>
                                </div>
                                <div className="text-center mt-6">
                                    <div className="flex flex-row">
                                        <button disabled={isEditing} onClick={() => setIsEditing(true)} className={`text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ${!isEditing ? 'bg-teal-500' : 'bg-gray-500'}`}>
                                            Editar
                                        </button>
                                        <button disabled={!isEditing} type="submit" className={`text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ${!isEditing ? 'bg-gray-500' : 'bg-pink-500'}`}>
                                            Salvar
                                        </button>
                                    </div>
                                </div>
                            </Form>
                        </Formik>

                    </>
                ) : (
                    <>
                        <h1 className="text-2xl md:text-1xl text-teal-300 font-bold mb-1">Essa paciente não tem dados registrados dessa Ficha</h1>
                        <div className="text-center mt-6">
                            <div className="flex flex-row"></div>
                            <button onClick={() => {
                                setIsEditing(true);
                                setSUSData(defaultSUSData);
                            }
                            } className='bg-teal-500 hover:bg-pink-500  btn text-white p-2 rounded-sm'>
                                Criar ficha
                            </button>
                        </div>
                    </>
                )
            }
        </div>
    );
}

export default SUSDataCard;
