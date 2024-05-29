import React, { useEffect, useState } from 'react';
import { ErrorMessage, Formik, Form, Field } from "formik";
import MaskedInput from "react-text-mask";

// Components
import { PreNatalType } from '../../../@types/preNatalTypes';
import { getPreNatalFunc, postPreNatalFunc, putPreNatalFunc } from '../../../services/pacients/preNatal';
import { validationsRegister } from './yupSchema';
import { pesoMask, imcMask, idadeGestacionalMask, idadeGestacionalMesesMask } from '../../Inputs/inputMasks';
import { EstadoCivil, NivelInstrucao } from '../../../@Enums/enums';

const defaultPreNatalData = {
    "nivelInstrucao": NivelInstrucao.NENHUM,
    "estadoCivil": EstadoCivil.SOLTEIRA,
    "pesoAnterior": "",
    "altura": "",
    "IMC": "",
    "DUM": "",
    "DPPD": "",
    "DPPE": "",
    "IGH": "",
    "IGM": "",
    "tipoGravidez": "",
    "riscoGestacional": "",
    "gravidezPlanejada": false,
}

function PreNatalDataCard({ handleHasPreNatalData, pacient }) {
    const [PreNataisData, setPreNataisData] = useState<PreNatalType[]>([] as PreNatalType[]);
    const [PreNatalData, setPreNatalData] = useState<PreNatalType>({} as PreNatalType);
    const [isEditing, setIsEditing] = useState(false);
    const [hasPreNatalData, setHasPreNatalData] = useState(false);
    const [pacientId, setPacientId] = useState(localStorage.getItem('pacient_id') || '')
    const [medicoId, setMedicoId] = useState(localStorage.getItem('medico_id') || '')
    const [fichaId, setFichaId] = useState('')

    useEffect(() => {
        if (pacient.id && medicoId) {
            fetchPreNatalData(pacient.id);
            setIsEditing(false)
        }
    }, [pacient.id || fichaId]);

    const fetchPreNatalData = async (id_paciente: string) => {
        const response = await getPreNatalFunc(id_paciente);
        setPreNataisData(response);
        if (response) {
            handleHasPreNatalData(true);
            setHasPreNatalData(true);
        }
        else {
            handleHasPreNatalData(false);
            setHasPreNatalData(false);
        }
    };

    const handlePostPreNatalData = async (values: PreNatalType) => {
        if (pacientId == "") {
            alert("Paciente não encontrada")
        }
        if (PreNatalData !== defaultPreNatalData) {
            try {
                let response = await putPreNatalFunc(fichaId, values);
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
                let response = await postPreNatalFunc(pacientId, values);
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
                <h1 className="text-2xl md:text-3xl text-pink-900 font-bold mb-1"> Dados de Pré-Natais</h1>
                {
                    Object.keys(PreNatalData).length != 0 &&
                    <p onClick={() => { setPreNataisData(PreNataisData); setPreNatalData({} as PreNatalType); setFichaId(''); fetchPreNatalData(pacientId) }} className="text-pink-500 hover:text-teal-500 cursor-pointer">
                        Voltar
                    </p>
                }
            </div>
            {/* Ficha Unitaria */}
            {
                Object.keys(PreNatalData).length != 0 && (
                    <>
                        <Formik
                            initialValues={PreNatalData}
                            enableReinitialize
                            onSubmit={handlePostPreNatalData}
                            validationSchema={validationsRegister}
                        >
                            <Form className="register-form">
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-brown-900 text-sm font-bold pt-2 pb-1">
                                            Nível de instrução
                                        </label>
                                        <Field
                                            as="select"
                                            className="border-0 px-3 py-3 placeholder-gray-400 text-brown-900 bg-white rounded text-sm shadow focus:outline-none focus:ring focus:ring-teal-300 w-full"
                                            name="nivelInstrucao"
                                            id="nivelInstrucao"
                                            disabled={!isEditing}
                                        >
                                            <option value="">Selecione</option>
                                            {Object.values(NivelInstrucao).map((value) => (
                                                <option key={value} value={value}>
                                                    {value}
                                                </option>
                                            ))}
                                        </Field>
                                        <ErrorMessage
                                            component="span"
                                            name="nivelInstrucao"
                                            className="form-error"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-brown-900 text-sm font-bold pt-2 pb-1">
                                            Estado civil
                                        </label>
                                        <Field
                                            as="select"
                                            className="border-0 px-3 py-3 placeholder-gray-400 text-brown-900 bg-white rounded text-sm shadow focus:outline-none focus:ring focus:ring-teal-300 w-full"
                                            name="estadoCivil"
                                            id="estadoCivil"
                                            disabled={!isEditing}
                                        >
                                            <option value="">Selecione</option>
                                            {Object.values(EstadoCivil).map((value) => (
                                                <option key={value} value={value}>
                                                    {value}
                                                </option>
                                            ))}
                                        </Field>
                                        <ErrorMessage
                                            component="span"
                                            name="estadoCivil"
                                            className="form-error"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-brown-900 text-sm font-bold pt-2 pb-1">
                                            Peso anterior (kg)
                                        </label>
                                        <Field
                                            className="border-0 px-3 py-3 placeholder-gray-400 text-brown-900 bg-white rounded text-sm shadow focus:outline-none focus:ring focus:ring-teal-300 w-full"
                                            name="pesoAnterior"
                                            type="text"
                                            id="pesoAnterior"
                                            placeholder="Digite o valor do peso"
                                            disabled={!isEditing}
                                        />
                                        <ErrorMessage
                                            component="span"
                                            name="pesoAnterior"
                                            className="form-error"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-brown-900 text-sm font-bold pt-2 pb-1">
                                            Altura (cm)
                                        </label>
                                        <Field
                                            className="border-0 px-3 py-3 placeholder-gray-400 text-brown-900 bg-white rounded text-sm shadow focus:outline-none focus:ring focus:ring-teal-300 w-full"
                                            name="altura"
                                            type="text"
                                            id="altura"
                                            placeholder="Digite a altura"
                                            disabled={!isEditing}
                                        />
                                        <ErrorMessage
                                            component="span"
                                            name="altura"
                                            className="form-error"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-brown-900 text-sm font-bold pt-2 pb-1">
                                            IMC (Kg/m²)
                                        </label>
                                        <Field
                                            className="border-0 px-3 py-3 placeholder-gray-400 text-brown-900 bg-white rounded text-sm shadow focus:outline-none focus:ring focus:ring-teal-300 w-full"
                                            name="IMC"
                                            type="string"
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
                                            Data da última menstruação (DUM)
                                        </label>
                                        <Field
                                            className="border-0 px-3 py-3 placeholder-gray-400 text-brown-900 bg-white rounded text-sm shadow focus:outline-none focus:ring focus:ring-teal-300 w-full"
                                            name="DUM"
                                            type="date"
                                            id="DUM"
                                            placeholder="Digite a data"
                                            disabled={!isEditing}
                                        />
                                        <ErrorMessage
                                            component="span"
                                            name="DUM"
                                            className="form-error"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-brown-900 text-sm font-bold pt-2 pb-1">
                                            Data provável do parto pela DUM (DPP)
                                        </label>
                                        <Field
                                            className="border-0 px-3 py-3 placeholder-gray-400 text-brown-900 bg-white rounded text-sm shadow focus:outline-none focus:ring focus:ring-teal-300 w-full"
                                            name="DPPD"
                                            type="date"
                                            id="DPPD"
                                            placeholder="Digite a data"
                                            disabled={!isEditing}
                                        />
                                        <ErrorMessage
                                            component="span"
                                            name="DPPD"
                                            className="form-error"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-brown-900 text-sm font-bold pt-2 pb-1">
                                            Data provável do parto pela pela ecografia
                                        </label>
                                        <Field
                                            className="border-0 px-3 py-3 placeholder-gray-400 text-brown-900 bg-white rounded text-sm shadow focus:outline-none focus:ring focus:ring-teal-300 w-full"
                                            name="DPPE"
                                            type="date"
                                            id="DPPE"
                                            placeholder="Digite o DPPE"
                                            disabled={!isEditing}
                                        />
                                        <ErrorMessage
                                            component="span"
                                            name="DPPE"
                                            className="form-error"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-brown-900 text-sm font-bold pt-2 pb-1">
                                            Idade gestacional hoje (IG)
                                        </label>
                                        <Field
                                            className="border-0 px-3 py-3 placeholder-gray-400 text-brown-900 bg-white rounded text-sm shadow focus:outline-none focus:ring focus:ring-teal-300 w-full"
                                            name="IGH"
                                            type="text"
                                            id="IGH"
                                            placeholder="Digite a idade"
                                            disabled={!isEditing}
                                        />
                                        <ErrorMessage
                                            component="span"
                                            name="IGH"
                                            className="form-error"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-brown-900 text-sm font-bold pt-2 pb-1">
                                            Idade gestacional em meses
                                        </label>
                                        <Field
                                            className="border-0 px-3 py-3 placeholder-gray-400 text-brown-900 bg-white rounded text-sm shadow focus:outline-none focus:ring focus:ring-teal-300 w-full"
                                            name="IGM"
                                            type="text"
                                            id="IGM"
                                            placeholder="Digite o IGM"
                                            disabled={!isEditing}
                                        />
                                        <ErrorMessage
                                            component="span"
                                            name="IGM"
                                            className="form-error"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-brown-900 text-sm font-bold pt-2 pb-1">
                                            Tipo de gravidez
                                        </label>
                                        <Field
                                            className="border-0 px-3 py-3 placeholder-gray-400 text-brown-900 bg-white rounded text-sm shadow focus:outline-none focus:ring focus:ring-teal-300 w-full"
                                            name="tipoGravidez"
                                            type="text"
                                            id="tipoGravidez"
                                            placeholder="Digite o tipo de gravidez"
                                            disabled={!isEditing}
                                        />
                                        <ErrorMessage
                                            component="span"
                                            name="tipoGravidez"
                                            className="form-error"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-brown-900 text-sm font-bold pt-2 pb-1">
                                            Risco gestacional
                                        </label>
                                        <Field
                                            className="border-0 px-3 py-3 placeholder-gray-400 text-brown-900 bg-white rounded text-sm shadow focus:outline-none focus:ring focus:ring-teal-300 w-full"
                                            name="riscoGestacional"
                                            type="text"
                                            id="riscoGestacional"
                                            placeholder="Digite a risco gestacional"
                                            disabled={!isEditing}
                                        />
                                        <ErrorMessage
                                            component="span"
                                            name="riscoGestacional"
                                            className="form-error"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-brown-900 text-sm font-bold pt-2 pb-1">
                                            Gravidez planejada?
                                        </label>
                                        <Field
                                            className="border-0 px-3 py-3 placeholder-gray-400 text-brown-900 bg-white rounded text-sm shadow focus:outline-none focus:ring focus:ring-teal-300 w-full"
                                            name="gravidezPlanejada"
                                            id="gravidezPlanejada"
                                            render={({ field }) => (
                                                <label className="relative inline-flex items-center cursor-pointer">
                                                    <input
                                                        placeholder="Sim? Não?"
                                                        type="checkbox"
                                                        disabled={!isEditing}
                                                        value=""
                                                        className="sr-only peer"
                                                        {...field}
                                                        checked={field.value}
                                                        onChange={() => {
                                                            const newValue = !field.value;
                                                            field.onChange({ target: { id: field.name, value: newValue } });
                                                        }}
                                                    />
                                                    <div
                                                        className={`w-11 h-6 ${field.value ? 'bg-pink-500' : 'bg-gray-500'} peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-pink-800 dark:peer-focus:ring-pink-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600`}
                                                    ></div>
                                                    <span className={`ml-3 text-sm font-medium ${field.value ? 'text-green-500' : 'text-red-500'}`}>
                                                        {field.value ? 'Sim' : 'Não'}
                                                    </span>
                                                </label>
                                            )}
                                        />
                                        <ErrorMessage
                                            component="span"
                                            name="gravidezPlanejada"
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
            {/* Lista de Fichas */}
            {
                Object.keys(PreNatalData).length == 0 &&
                (
                    <>
                        <h1 className="text-2xl md:text-1xl text-teal-300 font-bold mb-1">Pré-natais</h1>
                        {PreNataisData.map((element, index) => (
                            <div key={index} className="text-center p-4 mt-6 bg-pink-50 text-brown-800 rounded-md cursor-pointer hover:text-teal-500"
                                onClick={() => {
                                    setPreNatalData(element);
                                    setFichaId(element.id);
                                }}>
                                Pré-Natal {index + 1}
                            </div>
                        ))}
                        <div className="text-center mt-6">
                            <div className="flex flex-row"></div>
                            <button onClick={() => {
                                setIsEditing(true);
                                setPreNatalData(defaultPreNatalData);
                            }
                            } className='bg-teal-500 hover:bg-pink-500  btn text-white p-2 rounded-sm'>
                                Criar nova ficha de pré-natal
                            </button>
                        </div>
                    </>
                )
            }
        </div >
    );
}

export default PreNatalDataCard;
