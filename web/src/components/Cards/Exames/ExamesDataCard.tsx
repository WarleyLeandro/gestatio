import React, { useEffect, useState } from 'react';
import { ErrorMessage, Formik, Form, Field } from "formik";

// Components
import { ExamesType } from '../../../@types/ExamesType';
import { getExamesFunc, postExamesFunc, putExamesFunc } from '../../../services/pacients/exames';
// import { validationsRegister } from './yupSchema';
import toBRDate from '../../../utils/toBRDate';
import { PositivoNegativo } from '../../../@Enums/enums';

const defaultExamesData = {
    "ABO_RH": "",
    "glicemiaJejum": "",
    "testeOralToleranciaGlicose": "",
    "sifilis": PositivoNegativo.NEGATIVO,
    "vdrl": PositivoNegativo.NEGATIVO,
    "hiv_antiHiv": PositivoNegativo.NEGATIVO,
    "hepatiteB": PositivoNegativo.NEGATIVO,
    "toxoplasmose": PositivoNegativo.NEGATIVO,
    "hemoglobina_hematocrito": "",
    "urinaEAS": "",
    "urinaCultura": "",
    "coombsIndireto": "",
}

function ExamesDataCard({ handleHasExamesData, pacient }) {
    const [ExamesData, setExamesData] = useState<ExamesType[]>([] as ExamesType[]);
    const [ExameData, setExameData] = useState<ExamesType>({} as ExamesType);
    const [isEditing, setIsEditing] = useState(false);
    const [hasExamesData, setHasExamesData] = useState(false);
    const [pacientId, setPacientId] = useState(localStorage.getItem('pacient_id') || '')
    const [fichaId, setFichaId] = useState('')

    useEffect(() => {
        fetchExamesData(pacient.id);
        setIsEditing(false)
    }, [pacient.id || fichaId]);

    const fetchExamesData = async (id_paciente: string) => {
        const response = await getExamesFunc(id_paciente);
        setExamesData(response);
        if (response) {
            handleHasExamesData(true);
            setHasExamesData(true);
        } else {
            handleHasExamesData(false);
            setHasExamesData(false);
        }
    };


    const handlePostExamesData = async (values: ExamesType) => {
        if (fichaId == "") {
            alert("Paciente não encontrada")
        }
        if (ExameData !== defaultExamesData) {
            try {
                let response = await putExamesFunc(fichaId, values);
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
                let response = await postExamesFunc(pacientId, values);
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
                <h1 className="text-2xl md:text-3xl text-pink-900 font-bold mb-1">Dados de Exames</h1>
                {
                    Object.keys(ExameData).length != 0 &&
                    <p onClick={() => { setExamesData(ExamesData); setExameData({} as ExamesType); setFichaId(''); fetchExamesData(pacientId) }} className="text-pink-500 hover:text-teal-500 cursor-pointer">
                        Voltar
                    </p>
                }
            </div>
            {
                Object.keys(ExameData).length != 0 && (
                    <>
                        <Formik
                            initialValues={ExameData}
                            enableReinitialize
                            onSubmit={handlePostExamesData}
                        >
                            <Form className="register-form">
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-brown-900 text-sm font-bold pt-2 pb-1">
                                            ABO com RH
                                        </label>
                                        <Field
                                            className="border-0 px-3 py-3 placeholder-gray-400 text-brown-900 bg-white rounded text-sm shadow focus:outline-none focus:ring focus:ring-teal-300 w-full"
                                            name="ABO_RH"
                                            type="text"
                                            id="ABO_RH"
                                            placeholder="Digite o resultado"
                                            disabled={!isEditing}
                                        />
                                        <ErrorMessage
                                            component="span"
                                            name="ABO_RH"
                                            className="form-error"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-brown-900 text-sm font-bold pt-2 pb-1">
                                            Glicemia de Jejum
                                        </label>
                                        <Field
                                            className="border-0 px-3 py-3 placeholder-gray-400 text-brown-900 bg-white rounded text-sm shadow focus:outline-none focus:ring focus:ring-teal-300 w-full"
                                            name="glicemiaJejum"
                                            type="text"
                                            id="glicemiaJejum"
                                            placeholder="Digite o resultado"
                                            disabled={!isEditing}
                                        />
                                        <ErrorMessage
                                            component="span"
                                            name="glicemiaJejum"
                                            className="form-error"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-brown-900 text-sm font-bold pt-2 pb-1">
                                            Teste Oral de Tolerâcia a Glicose
                                        </label>
                                        <Field
                                            className="border-0 px-3 py-3 placeholder-gray-400 text-brown-900 bg-white rounded text-sm shadow focus:outline-none focus:ring focus:ring-teal-300 w-full"
                                            name="testeOralToleranciaGlicose"
                                            type="text"
                                            id="testeOralToleranciaGlicose"
                                            placeholder="Digite o resultado"
                                            disabled={!isEditing}
                                        />
                                        <ErrorMessage
                                            component="span"
                                            name="testeOralToleranciaGlicose"
                                            className="form-error"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-brown-900 text-sm font-bold pt-2 pb-1">
                                            Sífilis (teste rápido)
                                        </label>
                                        <Field
                                            className="border-0 px-3 py-3 placeholder-gray-400 text-brown-900 bg-white rounded text-sm shadow focus:outline-none focus:ring focus:ring-teal-300 w-full"
                                            name="sifilis"
                                            type="text"
                                            id="sifilis"
                                            placeholder="Digite o resultado"
                                            disabled={!isEditing}
                                        />
                                        <ErrorMessage
                                            component="span"
                                            name="sifilis"
                                            className="form-error"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-brown-900 text-sm font-bold pt-2 pb-1">
                                            VDRL
                                        </label>
                                        <Field
                                            className="border-0 px-3 py-3 placeholder-gray-400 text-brown-900 bg-white rounded text-sm shadow focus:outline-none focus:ring focus:ring-teal-300 w-full"
                                            name="vdrl"
                                            type="text"
                                            id="vdrl"
                                            placeholder="Digite o resultado"
                                            disabled={!isEditing}
                                        />
                                        <ErrorMessage
                                            component="span"
                                            name="vdrl"
                                            className="form-error"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-brown-900 text-sm font-bold pt-2 pb-1">
                                            HIV / Anti HIV (teste rápido)
                                        </label>
                                        <Field
                                            className="border-0 px-3 py-3 placeholder-gray-400 text-brown-900 bg-white rounded text-sm shadow focus:outline-none focus:ring focus:ring-teal-300 w-full"
                                            name="hiv_antiHiv"
                                            type="text"
                                            id="hiv_antiHiv"
                                            placeholder="Digite o resultado"
                                            disabled={!isEditing}
                                        />
                                        <ErrorMessage
                                            component="span"
                                            name="hiv_antiHiv"
                                            className="form-error"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-brown-900 text-sm font-bold pt-2 pb-1">
                                            Hepatite B - HBsAg
                                        </label>
                                        <Field
                                            className="border-0 px-3 py-3 placeholder-gray-400 text-brown-900 bg-white rounded text-sm shadow focus:outline-none focus:ring focus:ring-teal-300 w-full"
                                            name="hepatiteB"
                                            type="text"
                                            id="hepatiteB"
                                            placeholder="Digite o resultado"
                                            disabled={!isEditing}
                                        />
                                        <ErrorMessage
                                            component="span"
                                            name="hepatiteB"
                                            className="form-error"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-brown-900 text-sm font-bold pt-2 pb-1">
                                            Toxoplasmose
                                        </label>
                                        <Field
                                            className="border-0 px-3 py-3 placeholder-gray-400 text-brown-900 bg-white rounded text-sm shadow focus:outline-none focus:ring focus:ring-teal-300 w-full"
                                            name="toxoplasmose"
                                            type="text"
                                            id="toxoplasmose"
                                            placeholder="Digite o resultado"
                                            disabled={!isEditing}
                                        />
                                        <ErrorMessage
                                            component="span"
                                            name="toxoplasmose"
                                            className="form-error"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-brown-900 text-sm font-bold pt-2 pb-1">
                                            Hemoglobina/Hematócrito
                                        </label>
                                        <Field
                                            className="border-0 px-3 py-3 placeholder-gray-400 text-brown-900 bg-white rounded text-sm shadow focus:outline-none focus:ring focus:ring-teal-300 w-full"
                                            name="hemoglobina_hematocrito"
                                            type="text"
                                            id="hemoglobina_hematocrito"
                                            placeholder="Digite o resultado"
                                            disabled={!isEditing}
                                        />
                                        <ErrorMessage
                                            component="span"
                                            name="hemoglobina_hematocrito"
                                            className="form-error"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-brown-900 text-sm font-bold pt-2 pb-1">
                                            Urina-EAS
                                        </label>
                                        <Field
                                            className="border-0 px-3 py-3 placeholder-gray-400 text-brown-900 bg-white rounded text-sm shadow focus:outline-none focus:ring focus:ring-teal-300 w-full"
                                            name="urinaEAS"
                                            type="text"
                                            id="urinaEAS"
                                            placeholder="Digite o resultado"
                                            disabled={!isEditing}
                                        />
                                        <ErrorMessage
                                            component="span"
                                            name="urinaEAS"
                                            className="form-error"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-brown-900 text-sm font-bold pt-2 pb-1">
                                            Urina cultura
                                        </label>
                                        <Field
                                            className="border-0 px-3 py-3 placeholder-gray-400 text-brown-900 bg-white rounded text-sm shadow focus:outline-none focus:ring focus:ring-teal-300 w-full"
                                            name="urinaCultura"
                                            type="text"
                                            id="urinaCultura"
                                            placeholder="Digite o resultado"
                                            disabled={!isEditing}
                                        />
                                        <ErrorMessage
                                            component="span"
                                            name="urinaCultura"
                                            className="form-error"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-brown-900 text-sm font-bold pt-2 pb-1">
                                            Coombs Indireto
                                        </label>
                                        <Field
                                            className="border-0 px-3 py-3 placeholder-gray-400 text-brown-900 bg-white rounded text-sm shadow focus:outline-none focus:ring focus:ring-teal-300 w-full"
                                            name="coombsIndireto"
                                            type="text"
                                            id="coombsIndireto"
                                            placeholder="Digite o resultado"
                                            disabled={!isEditing}
                                        />
                                        <ErrorMessage
                                            component="span"
                                            name="coombsIndireto"
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
                Object.keys(ExameData).length == 0 &&
                (
                    <>
                        <h1 className="text-2xl md:text-1xl text-teal-300 font-bold mb-1">Exames</h1>
                        {ExamesData.map((element, index) => (
                            <div key={index} className="text-center p-4 mt-6 bg-pink-50 text-brown-800 rounded-md cursor-pointer hover:text-teal-500"
                                onClick={() => {
                                    setExameData(element);
                                    setFichaId(element.id);
                                }}>
                                Ficha de Exames {index + 1}
                            </div>
                        ))}
                        <div className="text-center mt-6">
                            <div className="flex flex-row"></div>
                            <button onClick={() => {
                                setIsEditing(true);
                                setExameData(defaultExamesData);
                            }
                            } className='bg-teal-500 hover:bg-pink-500  btn text-white p-2 rounded-sm'>
                                Criar nova ficha de exame do pré-natal
                            </button>
                        </div>
                    </>
                )
            }
            {/* {
                Object.keys(ExamesData).length == 0 &&
                (
                    <>
                        <h1 className="text-2xl md:text-1xl text-teal-300 font-bold mb-1">Essa paciente não tem dados registrados dessa Ficha</h1>
                        <div className="text-center mt-6">
                            <div className="flex flex-row"></div>
                            <button onClick={() => {
                                setIsEditing(true);
                                setExamesData(defaultExamesData);
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
export default ExamesDataCard;
