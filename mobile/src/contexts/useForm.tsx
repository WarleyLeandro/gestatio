import { createContext, useContext, useState, ReactNode } from "react";
import { PersonalDataTypes } from "../@types/signOff.interface";

interface FormProviderProps {
  children: ReactNode;
}

interface FormContextData {
  updateFormValues: (values: PersonalDataTypes) => void;
  getFormValues: () => PersonalDataTypes | undefined;
  clearFormValues: () => void;
}

const FormContext = createContext<FormContextData>({} as FormContextData);

export function FormProvider({ children }: FormProviderProps) {
  const [formValues, setFormValues] = useState<PersonalDataTypes>(
    {} as PersonalDataTypes
  );

  const updateFormValues = (values: PersonalDataTypes) => {
    let newValues = { ...formValues, values };
    setFormValues(newValues);
  };

  const clearFormValues = () => {
    setFormValues({} as PersonalDataTypes);
  };

  const getFormValues = () => {
    if (Object.keys(formValues).length !== 0) {
      //TODO: gambiarra, remover
      formValues.trabalhaEmCasa = false;
      return formValues;
    } else {
      throw new Error();
    }
  };

  return (
    <FormContext.Provider
      value={{
        updateFormValues,
        getFormValues,
        clearFormValues,
      }}
    >
      {children}
    </FormContext.Provider>
  );
}

export function useForm(): FormContextData {
  const context = useContext(FormContext);

  return context;
}
