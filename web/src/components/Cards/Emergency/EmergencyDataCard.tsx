import React, { useEffect, useState } from 'react';
import { ErrorMessage, Formik, Form, Field } from "formik";
import MaskedInput from "react-text-mask";

// Components
import { EmergencyType } from '../../../@types/DadosPessoais';
import { getEmergencyDataFunc, postEmergencyDataFunc, putEmergencyDataFunc } from '../../../services/pacients/PersonalData';
import { validationsRegister } from './yupSchema';
import { celphoneNumberMask, phoneNumberMask } from '../../Inputs/inputMasks';

const defaultEmergencyData = {
    "id_paciente": "",
    "nomeEmerg": "",
    "parentescoEmerg": "",
    "celEmerg": "",
    "telEmerg": ""
}

function EmergencyDataCard({ handleHasEmergencyData, pacient }) {
    const [EmergencyData, setEmergencyData] = useState<EmergencyType>({} as EmergencyType);
    const [isEditing, setIsEditing] = useState(false);
    const [hasEmergencyData, setHasEmergencyData] = useState(false);
    const [pacientId, setPacientId] = useState(localStorage.getItem('pacient_id') || '')

    useEffect(() => {
        fetchEmergencyData(pacient.id);
        setIsEditing(false)
    }, [pacient.id]);

    const fetchEmergencyData = async (id_paciente: string) => {
        const response = await getEmergencyDataFunc(id_paciente);
        setEmergencyData(response);
        if (response) {
            handleHasEmergencyData(true);
            setHasEmergencyData(true);
        }
        else {
            handleHasEmergencyData(false);
            setHasEmergencyData(false);
        }
    };

    const handlePostEmergencyData = async (values: EmergencyType) => {
        if (pacientId == "") {
            alert("Paciente não encontrada")
        }
        if (hasEmergencyData) {
            try {
                let response = await putEmergencyDataFunc(pacientId, values);
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
                let response = await postEmergencyDataFunc(pacientId, values);
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
            <h1 className="text-2xl md:text-3xl text-pink-900 font-bold mb-1"> Dados de emergência</h1>
            {
                Object.keys(EmergencyData).length !== 0 ? (
                    <>
                        <Formik
                            initialValues={EmergencyData}
                            enableReinitialize
                            onSubmit={handlePostEmergencyData}
                            validationSchema={validationsRegister}
                        >
                            <Form className="register-form">
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-brown-900 text-sm font-bold pt-2 pb-1">
                                            Nome do contato de emergência
                                        </label>
                                        <Field
                                            className="border-0 px-3 py-3 placeholder-gray-400 text-brown-900 bg-white rounded text-sm shadow focus:outline-none focus:ring focus:ring-teal-300 w-full"
                                            name="nomeEmerg"
                                            type="text"
                                            id="nomeEmerg"
                                            placeholder="Digite o número do cartão"
                                            disabled={!isEditing}
                                        />
                                        <ErrorMessage
                                            component="span"
                                            name="nomeEmerg"
                                            className="form-error"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-brown-900 text-sm font-bold pt-2 pb-1">
                                            Parentesco do contato de emergência
                                        </label>
                                        <Field
                                            className="border-0 px-3 py-3 placeholder-gray-400 text-brown-900 bg-white rounded text-sm shadow focus:outline-none focus:ring focus:ring-teal-300 w-full"
                                            name="parentescoEmerg"
                                            type="text"
                                            id="parentescoEmerg"
                                            placeholder="Digite o nome"
                                            disabled={!isEditing}
                                        />
                                        <ErrorMessage
                                            component="span"
                                            name="parentescoEmerg"
                                            className="form-error"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-brown-900 text-sm font-bold pt-2 pb-1">
                                            Telefone Celular do contato
                                        </label>
                                        <Field
                                            name="celEmerg"
                                            id="celEmerg"
                                            render={({ field }) => (
                                                < MaskedInput
                                                    {...field}
                                                    className="border-0 px-3 py-3 placeholder-gray-400 text-brown-900 bg-white rounded text-sm shadow focus:outline-none focus:ring focus:ring-teal-300 w-full"
                                                    type="text"
                                                    disabled={!isEditing}
                                                    mask={celphoneNumberMask}
                                                    placeholder="Digite o telefone"
                                                />
                                            )}
                                        />
                                        <ErrorMessage
                                            component="span"
                                            name="celEmerg"
                                            className="form-error"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-brown-900 text-sm font-bold pt-2 pb-1">
                                            Telefone Fixo do contato
                                        </label>
                                        <Field
                                            name="telEmerg"
                                            id="telEmerg"
                                            render={({ field }) => (
                                                < MaskedInput
                                                    {...field}
                                                    className="border-0 px-3 py-3 placeholder-gray-400 text-brown-900 bg-white rounded text-sm shadow focus:outline-none focus:ring focus:ring-teal-300 w-full"
                                                    type="text"
                                                    disabled={!isEditing}
                                                    mask={phoneNumberMask}
                                                    placeholder="Digite o telefone"
                                                />
                                            )}
                                        />
                                        <ErrorMessage
                                            component="span"
                                            name="telEmerg"
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
                                setEmergencyData(defaultEmergencyData);
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

export default EmergencyDataCard;
