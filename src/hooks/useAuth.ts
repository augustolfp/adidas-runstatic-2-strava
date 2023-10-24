import {
    type SuccessResponse,
    type ErrorResponse,
    type Status,
    type AuthRequestParams,
} from "../types";
import { useState } from "react";
import axios from "axios";

export default function useAuth() {
    const baseURL = import.meta.env.VITE_TOKEN_REQUEST_URL;

    const [status, setStatus] = useState<Status>("idle");
    const [error, setError] = useState<ErrorResponse | null>(null);
    const [result, setResult] = useState<SuccessResponse | null>(null);

    const getAuth = (paramsObj: AuthRequestParams) => {
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
