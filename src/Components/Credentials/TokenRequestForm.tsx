import { useState } from "react";
import axios from "axios";

export default function TokenRequestForm() {
    const [clientId, setClientId] = useState<number>();
    const [clientSecret, setClientSecret] = useState<string>("");
    const [code, setCode] = useState<string>("");
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const baseURL = import.meta.env.VITE_TOKEN_REQUEST_URL;

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);

        const response = axios.post(baseURL, null, {
            params: {
                client_id: clientId,
                client_secret: clientSecret,
                code: code,
            },
        });

        response.then((res) => console.log("Success!", res));
        response.catch((err) => console.log("Error!", err));
        response.finally(() => setIsLoading(false));
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                name="client_id"
                placeholder="Client ID"
                className="input input-bordered"
                type="number"
                disabled={isLoading}
                value={clientId || ""}
                onChange={(e) => {
                    if (e.target.value) {
                        setClientId(parseInt(e.target.value));
                    }
                }}
            />

            <input
                name="client_secret"
                placeholder="Client Secret"
                className="input input-bordered"
                type="password"
                disabled={isLoading}
                value={clientSecret || ""}
                onChange={(e) => setClientSecret(e.target.value)}
            />

            <input
                name="code"
                placeholder="Code"
                className="input input-bordered"
                type="text"
                disabled={isLoading}
                value={code || ""}
                onChange={(e) => setCode(e.target.value)}
            />
            <button
                type="submit"
                disabled={isLoading}
                className="btn btn-primary"
            >
                {isLoading ? "Loading..." : "Send Token request"}
            </button>
        </form>
    );
}
