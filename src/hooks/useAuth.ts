import { useState } from "react";
import axios from "axios";

interface AuthParams {
    client_id: number;
    client_secret: string;
    code: string;
}

type SuccessResponse = {
    accessToken: string;
    athleteName: string;
    expiresIn: number;
};

type ErrorResponse = {
    message: string;
    errorArr: string;
};

export default function useAuth() {
    const baseURL = import.meta.env.VITE_TOKEN_REQUEST_URL;

    const [status, setStatus] = useState<
        "loading" | "success" | "error" | "idle"
    >("idle");
    const [error, setError] = useState<ErrorResponse | null>(null);
    const [result, setResult] = useState<SuccessResponse | null>(null);

    const getAuth = (paramsObj: AuthParams) => {
        setStatus("loading");

        const response = axios.post(baseURL, null, {
            params: paramsObj,
        });

        response.then((res) => {
            setResult({
                accessToken: res.data.access_token,
                athleteName: res.data.athlete.firstName,
                expiresIn: res.data.expires_in,
            });
            setStatus("success");
        });

        response.catch((err) => {
            let errResponse: ErrorResponse = {
                message: "Unknown error",
                errorArr: "",
            };

            if (typeof err.message === "string") {
                errResponse.message = err.message;
            }

            if (err.response.data) {
                errResponse.errorArr = JSON.stringify(err.response.data);
            }

            setError(errResponse);
            setStatus("error");
        });
    };

    return {
        status,
        error,
        result,
        getAuth,
    };
}