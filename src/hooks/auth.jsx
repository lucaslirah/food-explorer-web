import { createContext, useContext } from 'react';

const AuthContext = createContext({});

function AuthProvider({ children }){
    return(
        <AuthContext.Provider value={{ name: 'Lucas', email: 'lucas@gmail.com' }}>
            {children}
        </AuthContext.Provider>
    )
}

function useAuth(){
    const context = useContext(AuthContext);

    return context;
}

export { AuthProvider, useAuth };