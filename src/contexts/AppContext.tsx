import { createContext, useState, useContext } from "react";
import useGetGPX from "../hooks/useGetGPX";

interface ProviderProps {
    children?: React.ReactNode;
}

interface AuthContext {
    accessToken: string | null;
    setAccessToken: React.Dispatch<React.SetStateAction<string | null>>;
    gpxList: File[];
    handleGpxInput: (e: React.FormEvent<HTMLInputElement>) => void;
}

const AppContext = createContext({} as AuthContext);

export function useAppContext() {
    return useContext(AppContext);
}

export function AppProvider({ children }: ProviderProps) {
    const [accessToken, setAccessToken] = useState<string | null>(null);
    const { gpxList, handleGpxInput } = useGetGPX();

    return (
        <AppContext.Provider
            value={{ accessToken, setAccessToken, gpxList, handleGpxInput }}
        >
            {children}
        </AppContext.Provider>
    );
}
