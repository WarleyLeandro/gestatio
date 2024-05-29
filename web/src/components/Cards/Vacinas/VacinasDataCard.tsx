import React, { useEffect, useState } from 'react';
import { ErrorMessage, Formik, Form, Field } from "formik";

// Components
import { VacinasType } from '../../../@types/vacinasType';
import { getVacinasFunc, postVacinasFunc, putVacinasFunc } from '../../../services/pacients/Vacinas';
// import { validationsRegister } from './yupSchema';
import toBRDate from '../../../utils/toBRDate';
import { ATStatus } from '../../../@Enums/enums';

const defaultVacinasData = {
    "ATStatus": ATStatus.NAO_INFORMADO,
    "AT1dose": "",
    "AT2dose": "",
    "vacinadTpa": "",
    "HBStatus": "",
    "HB1dose": "",
    "HB2dose": "",
    "HB3dose": "",
}

function VacinasDataCard({ handleHasVacinasData, pacient }) {
    const [VacinasData, setVacinasData] = useState<VacinasType[]>([] as VacinasType[]);
    const [VacinaData, setVacinaData] = useState<VacinasType>({} as VacinasType);
    const [isEditing, setIsEditing] = useState(false);
    const [hasVacinasData, setHasVacinasData] = useState(false);
    const [pacientId, setPacientId] = useState(localStorage.getItem('pacient_id') || '')
    const [fichaId, setFichaId] = useState('')

    useEffect(() => {
        fetchVacinasData(pacient.id);
        setIsEditing(false)
    }, [pacient.id || fichaId]);

    const fetchVacinasData = async (id_paciente: string) => {
        const response = await getVacinasFunc(id_paciente);
        setVacinasData(response);
        console.log(response)
        if (response) {
            handleHasVacinasData(true);
            setHasVacinasData(true);
        } else {
            handleHasVacinasData(false);
            setHasVacinasData(false);
        }
    };


    const handlePostVacinasData = async (values: VacinasType) => {
        if (pacientId == "") {
            alert("Paciente não encontrada")
        }
        if (VacinaData !== defaultVacinasData) {
            try {
                let response = await putVacinasFunc(fichaId, values);
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
                let response = await postVacinasFunc(pacientId, values);
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
                <h1 className="text-2xl md:text-3xl text-pink-900 font-bold mb-1">Dados de Vacinas</h1>
                {
                    Object.keys(VacinaData).length != 0 &&
                    <p onClick={() => { setVacinasData(VacinasData); setVacinaData({} as VacinasType); setFichaId(''); fetchVacinasData(pacientId) }} className="text-pink-500 hover:text-teal-500 cursor-pointer">
                        Voltar
                    </p>
                }
            </div>
            {
                Object.keys(VacinaData).length != 0 && (
                    <>
                        <Formik
                            initialValues={VacinaData}
                            enableReinitialize
                            onSubmit={handlePostVacinasData}
                        // validationSchema={validationsRegister}
                        >
                            <Form className="register-form">
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-brown-900 text-sm font-bold pt-2 pb-1">
                                            Data da Vacinas
                                        </label>
                                        <Field
                                            as="select"
                                            className="border-0 px-3 py-3 placeholder-gray-400 text-brown-900 bg-white rounded text-sm shadow focus:outline-none focus:ring focus:ring-teal-300 w-full"
                                            name="ATStatus"
                                            id="ATStatus"
                                            disabled={!isEditing}
                                        >
                                            <option value="">Selecione</option>
                                            {Object.values(ATStatus).map((value) => (
                                               <option key={value} value={value}>
                                               {value === "NAO_INFORMADO"
                                                 ? 'Não Informado'
                                                 : value === ATStatus.MENOS_5_ANOS
                                                 ? 'Menos que 5 anos'
                                                 : value === ATStatus.MAIS_5_ANOS
                                                 ? 'Mais que 5 anos'
                                                 : value.charAt(0) + value.slice(1).toLowerCase()}
                                             </option>                                             
                                            ))}
                                        </Field>
                                        <ErrorMessage
                                            component="span"
                                            name="ATStatus"
                                            className="form-error"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-brown-900 text-sm font-bold pt-2 pb-1">
                                            Vacina antitetânica (1 dose)
                                        </label>
                                        <Field
                                            className="border-0 px-3 py-3 placeholder-gray-400 text-brown-900 bg-white rounded text-sm shadow focus:outline-none focus:ring focus:ring-teal-300 w-full"
                                            name="AT1dose"
                                            type="text"
                                            id="AT1dose"
                                            placeholder="Digite a data da primeira dose"
                                            disabled={!isEditing}
                                        />
                                        <ErrorMessage
                                            component="span"
                                            name="AT1dose"
                                            className="form-error"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-brown-900 text-sm font-bold pt-2 pb-1">
                                            Vacina antitetânica (2 dose)
                                        </label>
                                        <Field
                                            className="border-0 px-3 py-3 placeholder-gray-400 text-brown-900 bg-white rounded text-sm shadow focus:outline-none focus:ring focus:ring-teal-300 w-full"
                                            name="AT2dose"
                                            type="text"
                                            id="AT2dose"
                                            placeholder="Digite a data da segunda dose"
                                            disabled={!isEditing}
                                        />
                                        <ErrorMessage
                                            component="span"
                                            name="AT2dose"
                                            className="form-error"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-brown-900 text-sm font-bold pt-2 pb-1">
                                            Vacina dTpa (Difteria, tétano e coqueluche)
                                        </label>
                                        <Field
                                            className="border-0 px-3 py-3 placeholder-gray-400 text-brown-900 bg-white rounded text-sm shadow focus:outline-none focus:ring focus:ring-teal-300 w-full"
                                            name="vacinadTpa"
                                            type="text"
                                            id="vacinadTpa"
                                            placeholder="Digite a data dose"
                                            disabled={!isEditing}
                                        />
                                        <ErrorMessage
                                            component="span"
                                            name="vacinadTpa"
                                            className="form-error"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-brown-900 text-sm font-bold pt-2 pb-1">
                                            Vacina Hepatite B
                                        </label>
                                        <Field
                                            className="border-0 px-3 py-3 placeholder-gray-400 text-brown-900 bg-white rounded text-sm shadow focus:outline-none focus:ring focus:ring-teal-300 w-full"
                                            name="HBStatus"
                                            type="text"
                                            id="HBStatus"
                                            placeholder="Digite se foi imunizada"
                                            disabled={!isEditing}
                                        />
                                        <ErrorMessage
                                            component="span"
                                            name="HBStatus"
                                            className="form-error"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-brown-900 text-sm font-bold pt-2 pb-1">
                                            Vacina Hepatite B (1 dose)
                                        </label>
                                        <Field
                                            className="border-0 px-3 py-3 placeholder-gray-400 text-brown-900 bg-white rounded text-sm shadow focus:outline-none focus:ring focus:ring-teal-300 w-full"
                                            name="HB1dose"
                                            type="text"
                                            id="HB1dose"
                                            placeholder="Digite a data da primeira dose"
                                            disabled={!isEditing}
                                        />
                                        <ErrorMessage
                                            component="span"
                                            name="HB1dose"
                                            className="form-error"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-brown-900 text-sm font-bold pt-2 pb-1">
                                            Vacina Hepatite B (2 dose)
                                        </label>
                                        <Field
                                            className="border-0 px-3 py-3 placeholder-gray-400 text-brown-900 bg-white rounded text-sm shadow focus:outline-none focus:ring focus:ring-teal-300 w-full"
                                            name="HB2dose"
                                            type="text"
                                            id="HB2dose"
                                            placeholder="Digite a data da segunda dose"
                                            disabled={!isEditing}
                                        />
                                        <ErrorMessage
                                            component="span"
                                            name="HB2dose"
                                            className="form-error"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-brown-900 text-sm font-bold pt-2 pb-1">
                                        Vacina Hepatite B (3 dose)
                                        </label>
                                        <Field
                                            className="border-0 px-3 py-3 placeholder-gray-400 text-brown-900 bg-white rounded text-sm shadow focus:outline-none focus:ring focus:ring-teal-300 w-full"
                                            name="HB3dose"
                                            type="text"
                                            id="HB3dose"
                                            placeholder="Digite o diagnóstico"
                                            disabled={!isEditing}
                                        />
                                        <ErrorMessage
                                            component="span"
                                            name="HB3dose"
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
                Object.keys(VacinaData).length == 0 &&
                (
                    <>
                        <h1 className="text-2xl md:text-1xl text-teal-300 font-bold mb-1">Vacinas</h1>
                        {VacinasData.map((element, index) => (
                            <div key={index} className="text-center p-4 mt-6 bg-pink-50 text-brown-800 rounded-md cursor-pointer hover:text-teal-500"
                                onClick={() => {
                                    setVacinaData(element);
                                    setFichaId(element.id);
                                }}>
                                Ficha de Vacinas {index + 1}
                            </div>
                        ))}
                        <div className="text-center mt-6">
                            <div className="flex flex-row"></div>
                            <button onClick={() => {
                                setIsEditing(true);
                                setVacinaData(defaultVacinasData);
                            }
                            } className='bg-teal-500 hover:bg-pink-500  btn text-white p-2 rounded-sm'>
                                Criar nova ficha de vacina
                            </button>
                        </div>
                    </>
                )
            }
            {/* {
                Object.keys(VacinasData).length == 0 &&
                (
                    <>
                        <h1 className="text-2xl md:text-1xl text-teal-300 font-bold mb-1">Essa paciente não tem dados registrados dessa Ficha</h1>
                        <div className="text-center mt-6">
                            <div className="flex flex-row"></div>
                            <button onClick={() => {
                                setIsEditing(true);
                                setVacinasData(defaultVacinasData);
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
export default VacinasDataCard;
