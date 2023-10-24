import { createContext, useState, useContext } from "react";

interface ProviderProps {
    children?: React.ReactNode;
}

interface AuthContext {
    accessToken: string | null;
    setAccessToken: React.Dispatch<React.SetStateAction<string | null>>;
}

const AppContext = createContext({} as AuthContext);

export function useAppContext() {
    return useContext(AppContext);
}

export function AppProvider({ children }: ProviderProps) {
    const [accessToken, setAccessToken] = useState<string | null>(null);
    return (
        <AppContext.Provider value={{ accessToken, setAccessToken }}>
            {children}
        </AppContext.Provider>
    );
}
