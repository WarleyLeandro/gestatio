import { createContext, useContext, useState, ReactNode } from "react";
import { IResponseLogin } from "../@types/login.response";

interface AuthProviderProps {
  children: ReactNode;
}

interface AuthContextData {
  userDataLogin: IResponseLogin;
  setUserDataLogin: (userDataLogin: IResponseLogin) => void;
  isAuth: boolean;
  setIsAuth: (isAuth: boolean) => void;
  login: () => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export function AuthProvider({ children }: AuthProviderProps) {
  const [isAuth, setIsAuth] = useState<boolean>(true);
  const [userDataLogin, setUserDataLogin] = useState<IResponseLogin>(
    //{} as IResponseLogin

    //TODO: user default
    {
      token: "",
      user: {
        id: "01",
        nome: "Ana test",
        email: "exemplo@email.com",
        cpf: "123.456.789-00",
      },
    }
  );

  const getIsLogged = () => {
    return isAuth;
  };

  const logout = () => {
    setIsAuth(false);
  };

  const login = () => {
    setIsAuth(true);
  };

  return (
    <AuthContext.Provider
      value={{
        userDataLogin,
        setUserDataLogin,
        isAuth,
        setIsAuth,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  return context;
}
