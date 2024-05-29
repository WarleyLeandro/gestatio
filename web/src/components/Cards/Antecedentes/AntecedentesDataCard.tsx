import React, { useEffect, useState } from 'react';
import { ErrorMessage, Formik, Form, Field } from "formik";

// Components
import { AntecedentesType } from '../../../@types/antecedentesTypes';
import { getAntecedentesFunc, postAntecedentesFunc, putAntecedentesFunc } from '../../../services/pacients/antecedentes';
import { validationsRegister } from './yupSchema';
import { SNNI } from '../../../@Enums/enums'

const defaultAntecedentesData = {
    "diabetes": null,
    "hipertensao": null,
    "gemelaridade": null,
    "outros": null,
}

function AntecedentesDataCard({ handleHasAntecedentesData, pacient }) {
    const [AntecedentesData, setAntecedentesData] = useState<AntecedentesType>({} as AntecedentesType);
    const [isEditing, setIsEditing] = useState(false);
    const [hasAntecedentesData, setHasAntecedentesData] = useState(false);
    const [pacientId, setPacientId] = useState(localStorage.getItem('pacient_id') || '')

    useEffect(() => {
        fetchAntecedentesData(pacient.id);
        setIsEditing(false)
    }, [pacient.id]);

    const fetchAntecedentesData = async (id_paciente: string) => {
        const response = await getAntecedentesFunc(id_paciente);
        setAntecedentesData(response);
        if (response) {
            handleHasAntecedentesData(true);
            setHasAntecedentesData(true);
        }
        else {
            handleHasAntecedentesData(false);
            setHasAntecedentesData(false);
        }
    };

    const handlePostAntecedentesData = async (values: AntecedentesType) => {
        if (pacientId == "") {
            alert("Paciente não encontrada")
        }
        if (hasAntecedentesData) {
            try {
                let response = await putAntecedentesFunc(pacientId, values);
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
                let response = await postAntecedentesFunc(pacientId, values);
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
            <h1 className="text-2xl md:text-3xl text-pink-900 font-bold mb-1"> Dados de histórico familiar</h1>
            {
                Object.keys(AntecedentesData).length !== 0 ? (
                    <>
                        <Formik
                            initialValues={AntecedentesData}
                            enableReinitialize
                            onSubmit={handlePostAntecedentesData}
                            validationSchema={validationsRegister}
                        >
                            <Form className="register-form">
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-brown-900 text-sm font-bold pt-2 pb-1">
                                            Diabetes
                                        </label>
                                        <Field
                                            as="select"
                                            className="border-0 px-3 py-3 placeholder-gray-400 text-brown-900 bg-white rounded text-sm shadow focus:outline-none focus:ring focus:ring-teal-300 w-full"
                                            name="diabetes"
                                            id="diabetes"
                                            disabled={!isEditing}
                                        >
                                            <option value="">Selecione</option>
                                            {Object.values(SNNI).map((value) => (
                                                <option key={value} value={value}>
                                                    {value === SNNI.NAO_INFORMADO ? 'Não Informado' : value.charAt(0) + value.slice(1).toLowerCase()}
                                                </option>
                                            ))}
                                        </Field>
                                        <ErrorMessage
                                            component="span"
                                            name="diabetes"
                                            className="form-error"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-brown-900 text-sm font-bold pt-2 pb-1">
                                            Hipertensão
                                        </label>
                                        <Field
                                            as="select"
                                            name="hipertensao"
                                            className="border-0 px-3 py-3 placeholder-gray-400 text-brown-900 bg-white rounded text-sm shadow focus:outline-none focus:ring focus:ring-teal-300 w-full"
                                            id="hipertensao"
                                            disabled={!isEditing}
                                        > <option value="">Selecione</option>
                                            {Object.values(SNNI).map((value) => (
                                                <option key={value} value={value}>
                                                    {value === SNNI.NAO_INFORMADO ? 'Não Informado' : value.charAt(0) + value.slice(1).toLowerCase()}
                                                </option>
                                            ))}</Field>
                                        <ErrorMessage
                                            component="span"
                                            name="hipertensao"
                                            className="form-error"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-brown-900 text-sm font-bold pt-2 pb-1">
                                            Gemelaridade
                                        </label>
                                        <Field
                                            as="select"
                                            name="gemelaridade"
                                            className="border-0 px-3 py-3 placeholder-gray-400 text-brown-900 bg-white rounded text-sm shadow focus:outline-none focus:ring focus:ring-teal-300 w-full"
                                            id="gemelaridade"
                                            disabled={!isEditing}
                                        > <option value="">Selecione</option>
                                            {Object.values(SNNI).map((value) => (
                                                <option key={value} value={value}>
                                                    {value === SNNI.NAO_INFORMADO ? 'Não Informado' : value.charAt(0) + value.slice(1).toLowerCase()}
                                                </option>
                                            ))}</Field>
                                        <ErrorMessage
                                            component="span"
                                            name="gemelaridade"
                                            className="form-error"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-brown-900 text-sm font-bold pt-2 pb-1">
                                            Outros
                                        </label>
                                        <Field
                                            as="select"
                                            name="outros"
                                            className="border-0 px-3 py-3 placeholder-gray-400 text-brown-900 bg-white rounded text-sm shadow focus:outline-none focus:ring focus:ring-teal-300 w-full"
                                            id="outros"
                                            disabled={!isEditing}
                                        > <option value="">Selecione</option>
                                            {Object.values(SNNI).map((value) => (
                                                <option key={value} value={value}>
                                                    {value === SNNI.NAO_INFORMADO ? 'Não Informado' : value.charAt(0) + value.slice(1).toLowerCase()}
                                                </option>
                                            ))}</Field>
                                        <ErrorMessage
                                            component="span"
                                            name="outros"
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
                                setAntecedentesData(defaultAntecedentesData);
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

export default AntecedentesDataCard;
