import React, { useEffect, useState } from 'react';
import { ErrorMessage, Formik, Form, Field } from "formik";

// Components
import { ConsultasType } from '../../../@types/consultaType';
import { getConsultasFunc, postConsultasFunc, putConsultasFunc } from '../../../services/pacients/consultas';
import { validationsRegister } from './yupSchema';
import toBRDate from '../../../utils/toBRDate';

const defaultConsultasData = {
    "dataConsulta": "",
    "idadeGestacionalDUM": "",
    "idadeGestacionalUSG": "",
    "peso": 0,
    "IMC": 0,
    "queixa": "",
    "apresentacaoFetal": "",
    "observacaoDiagnosticoConduta": "",
    "pressaoArterial": 0,
    "alturaUterina": 0,
    "batimentoCardiacoFetal": 0,
    "movimentoFetal": "",
    "exantema": "",
    "toque": "",
}

function ConsultasDataCard({ handleHasConsultasData, pacient }) {
    const [ConsultasData, setConsultasData] = useState<ConsultasType[]>([] as ConsultasType[]);
    const [ConsultaData, setConsultaData] = useState<ConsultasType>({} as ConsultasType);
    const [isEditing, setIsEditing] = useState(false);
    const [hasConsultasData, setHasConsultasData] = useState(false);
    const [pacientId, setPacientId] = useState(localStorage.getItem('pacient_id') || '')
    const [fichaId, setFichaId] = useState('')

    useEffect(() => {
        fetchConsultasData(pacient.id);
        setIsEditing(false)
    }, [pacient.id || fichaId]);

    const fetchConsultasData = async (id_paciente: string) => {
        const response = await getConsultasFunc(id_paciente);
        setConsultasData(response);
        if (response) {
            handleHasConsultasData(true);
            setHasConsultasData(true);
        } else {
            handleHasConsultasData(false);
            setHasConsultasData(false);
        }
    };


    const handlePostConsultasData = async (values: ConsultasType) => {
        if (pacientId == "") {
            alert("Paciente não encontrada")
        }
        if (ConsultaData !== defaultConsultasData) {
            try {
                let response = await putConsultasFunc(fichaId, values);
                if (response.status === 200 || 201) {
                    alert("Ficha atualizada com sucesso!")
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
                let response = await postConsultasFunc(pacientId, values);
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
            <div className="flex items-center justify-between items-start">
                <h1 className="text-2xl md:text-3xl text-pink-900 font-bold mb-1">Dados de consultas</h1>
                {
                    Object.keys(ConsultaData).length != 0 &&
                    <p onClick={() => { setConsultasData(ConsultasData); setConsultaData({} as ConsultasType); setFichaId(''); fetchConsultasData(pacientId) }} className="text-pink-500 hover:text-teal-500 cursor-pointer">
                        Voltar
                    </p>
                }
            </div>
            {
                Object.keys(ConsultaData).length != 0 && (
                    <>
                        <Formik
                            initialValues={ConsultaData}
                            enableReinitialize
                            onSubmit={handlePostConsultasData}
                            // validationSchema={validationsRegister}
                        >
                            <Form className="register-form">
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-brown-900 text-sm font-bold pt-2 pb-1">
                                            Data da consulta
                                        </label>
                                        <Field
                                            className="border-0 px-3 py-3 placeholder-gray-400 text-brown-900 bg-white rounded text-sm shadow focus:outline-none focus:ring focus:ring-teal-300 w-full"
                                            name="dataConsulta"
                                            type="date"
                                            id="dataConsulta"
                                            placeholder="Digite a data de consulta"
                                            disabled={!isEditing}
                                        />
                                        <ErrorMessage
                                            component="span"
                                            name="dataConsulta"
                                            className="form-error"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-brown-900 text-sm font-bold pt-2 pb-1">
                                            Idade Gestacional (DUM)
                                        </label>
                                        <Field
                                            className="border-0 px-3 py-3 placeholder-gray-400 text-brown-900 bg-white rounded text-sm shadow focus:outline-none focus:ring focus:ring-teal-300 w-full"
                                            name="idadeGestacionalDUM"
                                            type="text"
                                            id="idadeGestacionalDUM"
                                            placeholder="Digite a idade"
                                            disabled={!isEditing}
                                        />
                                        <ErrorMessage
                                            component="span"
                                            name="idadeGestacionalDUM"
                                            className="form-error"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-brown-900 text-sm font-bold pt-2 pb-1">
                                            Idade Gestacional (USG)
                                        </label>
                                        <Field
                                            className="border-0 px-3 py-3 placeholder-gray-400 text-brown-900 bg-white rounded text-sm shadow focus:outline-none focus:ring focus:ring-teal-300 w-full"
                                            name="idadeGestacionalUSG"
                                            type="text"
                                            id="idadeGestacionalUSG"
                                            placeholder="Digite a idade"
                                            disabled={!isEditing}
                                        />
                                        <ErrorMessage
                                            component="span"
                                            name="idadeGestacionalUSG"
                                            className="form-error"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-brown-900 text-sm font-bold pt-2 pb-1">
                                            Peso (Kg)
                                        </label>
                                        <Field
                                            className="border-0 px-3 py-3 placeholder-gray-400 text-brown-900 bg-white rounded text-sm shadow focus:outline-none focus:ring focus:ring-teal-300 w-full"
                                            name="peso"
                                            type="number"
                                            id="peso"
                                            placeholder="Digite a idade"
                                            disabled={!isEditing}
                                        />
                                        <ErrorMessage
                                            component="span"
                                            name="peso"
                                            className="form-error"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-brown-900 text-sm font-bold pt-2 pb-1">
                                            IMC
                                        </label>
                                        <Field
                                            className="border-0 px-3 py-3 placeholder-gray-400 text-brown-900 bg-white rounded text-sm shadow focus:outline-none focus:ring focus:ring-teal-300 w-full"
                                            name="IMC"
                                            type="number"
                                            id="IMC"
                                            placeholder="Digite a idade"
                                            disabled={!isEditing}
                                        />
                                        <ErrorMessage
                                            component="span"
                                            name="IMC"
                                            className="form-error"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-brown-900 text-sm font-bold pt-2 pb-1">
                                            Queixas
                                        </label>
                                        <Field
                                            className="border-0 px-3 py-3 placeholder-gray-400 text-brown-900 bg-white rounded text-sm shadow focus:outline-none focus:ring focus:ring-teal-300 w-full"
                                            name="queixa"
                                            type="text"
                                            id="queixa"
                                            placeholder="Digite as queixas da paciente"
                                            disabled={!isEditing}
                                        />
                                        <ErrorMessage
                                            component="span"
                                            name="queixa"
                                            className="form-error"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-brown-900 text-sm font-bold pt-2 pb-1">
                                            Apresentação fetal
                                        </label>
                                        <Field
                                            className="border-0 px-3 py-3 placeholder-gray-400 text-brown-900 bg-white rounded text-sm shadow focus:outline-none focus:ring focus:ring-teal-300 w-full"
                                            name="apresentacaoFetal"
                                            type="text"
                                            id="apresentacaoFetal"
                                            placeholder="Digite a apresentação fetal"
                                            disabled={!isEditing}
                                        />
                                        <ErrorMessage
                                            component="span"
                                            name="apresentacaoFetal"
                                            className="form-error"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-brown-900 text-sm font-bold pt-2 pb-1">
                                            Observaçao diagnóstico de conduta
                                        </label>
                                        <Field
                                            className="border-0 px-3 py-3 placeholder-gray-400 text-brown-900 bg-white rounded text-sm shadow focus:outline-none focus:ring focus:ring-teal-300 w-full"
                                            name="observacaoDiagnosticoConduta"
                                            type="text"
                                            id="observacaoDiagnosticoConduta"
                                            placeholder="Digite o diagnóstico"
                                            disabled={!isEditing}
                                        />
                                        <ErrorMessage
                                            component="span"
                                            name="observacaoDiagnosticoConduta"
                                            className="form-error"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-brown-900 text-sm font-bold pt-2 pb-1">
                                            Pressão arterial
                                        </label>
                                        <Field
                                            className="border-0 px-3 py-3 placeholder-gray-400 text-brown-900 bg-white rounded text-sm shadow focus:outline-none focus:ring focus:ring-teal-300 w-full"
                                            name="pressaoArterial"
                                            type="number"
                                            id="pressaoArterial"
                                            placeholder="Digite o valor da pressão"
                                            disabled={!isEditing}
                                        />
                                        <ErrorMessage
                                            component="span"
                                            name="pressaoArterial"
                                            className="form-error"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-brown-900 text-sm font-bold pt-2 pb-1">
                                            Altura uterina
                                        </label>
                                        <Field
                                            className="border-0 px-3 py-3 placeholder-gray-400 text-brown-900 bg-white rounded text-sm shadow focus:outline-none focus:ring focus:ring-teal-300 w-full"
                                            name="alturaUterina"
                                            type="number"
                                            id="alturaUterina"
                                            placeholder="Digite o valor da altura"
                                            disabled={!isEditing}
                                        />
                                        <ErrorMessage
                                            component="span"
                                            name="alturaUterina"
                                            className="form-error"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-brown-900 text-sm font-bold pt-2 pb-1">
                                            Batimento cardíaco fetal
                                        </label>
                                        <Field
                                            className="border-0 px-3 py-3 placeholder-gray-400 text-brown-900 bg-white rounded text-sm shadow focus:outline-none focus:ring focus:ring-teal-300 w-full"
                                            name="batimentoCardiacoFetal"
                                            type="number"
                                            id="batimentoCardiacoFetal"
                                            placeholder="Digite o valor do batimento"
                                            disabled={!isEditing}
                                        />
                                        <ErrorMessage
                                            component="span"
                                            name="batimentoCardiacoFetal"
                                            className="form-error"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-brown-900 text-sm font-bold pt-2 pb-1">
                                            Movimento fetal
                                        </label>
                                        <Field
                                            className="border-0 px-3 py-3 placeholder-gray-400 text-brown-900 bg-white rounded text-sm shadow focus:outline-none focus:ring focus:ring-teal-300 w-full"
                                            name="movimentoFetal"
                                            type="text"
                                            id="movimentoFetal"
                                            placeholder="Digite a movimentação do feto"
                                            disabled={!isEditing}
                                        />
                                        <ErrorMessage
                                            component="span"
                                            name="movimentoFetal"
                                            className="form-error"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-brown-900 text-sm font-bold pt-2 pb-1">
                                            Exantema
                                        </label>
                                        <Field
                                            className="border-0 px-3 py-3 placeholder-gray-400 text-brown-900 bg-white rounded text-sm shadow focus:outline-none focus:ring focus:ring-teal-300 w-full"
                                            name="exantema"
                                            type="text"
                                            id="exantema"
                                            placeholder="Digite as informações do exantema"
                                            disabled={!isEditing}
                                        />
                                        <ErrorMessage
                                            component="span"
                                            name="exantema"
                                            className="form-error"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-brown-900 text-sm font-bold pt-2 pb-1">
                                            Toque
                                        </label>
                                        <Field
                                            className="border-0 px-3 py-3 placeholder-gray-400 text-brown-900 bg-white rounded text-sm shadow focus:outline-none focus:ring focus:ring-teal-300 w-full"
                                            name="toque"
                                            type="text"
                                            id="toque"
                                            placeholder="Digite as informações do toque"
                                            disabled={!isEditing}
                                        />
                                        <ErrorMessage
                                            component="span"
                                            name="toque"
                                            className="form-error"
                                        />
                                    </div>
                                </div>
                                <div className="text-center mt-6">
                                    <div className="flex flex-row">
                                        <button disabled={isEditing} onClick={() => { setIsEditing(true); }} className={`text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ${!isEditing ? 'bg-teal-500' : 'bg-gray-500'}`}>
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
                )
            }
            {
                Object.keys(ConsultaData).length == 0 &&
                (
                    <>
                        <h1 className="text-2xl md:text-1xl text-teal-300 font-bold mb-1">Consultas</h1>
                        {ConsultasData.map((element, index) => (
                            <div key={index} className="text-center p-4 mt-6 bg-pink-50 text-brown-800 rounded-md cursor-pointer hover:text-teal-500"
                                onClick={() => {
                                    setConsultaData(element);
                                    setFichaId(element.id);
                                }}>
                                Ficha de Consulta {index + 1} ({toBRDate(element.dataConsulta)})
                            </div>
                        ))}
                        <div className="text-center mt-6">
                            <div className="flex flex-row"></div>
                            <button onClick={() => {
                                setIsEditing(true);
                                setConsultaData(defaultConsultasData);
                            }
                            } className='bg-teal-500 hover:bg-pink-500  btn text-white p-2 rounded-sm'>
                                Criar nova ficha de consulta
                            </button>
                        </div>
                    </>
                )
            }
            {/* {
                Object.keys(ConsultasData).length == 0 &&
                (
                    <>
                        <h1 className="text-2xl md:text-1xl text-teal-300 font-bold mb-1">Essa paciente não tem dados registrados dessa Ficha</h1>
                        <div className="text-center mt-6">
                            <div className="flex flex-row"></div>
                            <button onClick={() => {
                                setIsEditing(true);
                                setConsultasData(defaultConsultasData);
                            }
                            } className='bg-teal-500 hover:bg-pink-500  btn text-white p-2 rounded-sm'>
                                Criar ficha
                            </button>
                        </div>
                    </>
                )
            } */}
        </div>
    );
}
export default ConsultasDataCard;
