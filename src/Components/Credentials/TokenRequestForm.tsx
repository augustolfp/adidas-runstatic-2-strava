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
        <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-2 p-4 bg-base-200 m-4 rounded-xl w-1/2"
        >
            <div className="flex flex-col md:flex-row md:justify-between">
                <label htmlFor="client_id" className="label">
                    <span className="label-text">Client ID:</span>
                </label>
                <input
                    id="client_id"
                    name="client_id"
                    placeholder="Client ID"
                    className="input input-bordered input-sm md:input-md"
                    type="number"
                    disabled={isLoading}
                    value={clientId || ""}
                    onChange={(e) => {
                        if (e.target.value) {
                            setClientId(parseInt(e.target.value));
                        }
                    }}
                />
            </div>

            <div className="flex flex-col md:flex-row md:justify-between">
                <label htmlFor="client_secret" className="label">
                    <span className="label-text">Client Secret:</span>
                </label>
                <input
                    id="client_secret"
                    name="client_secret"
                    placeholder="Client Secret"
                    className="input input-bordered input-sm md:input-md"
                    type="password"
                    disabled={isLoading}
                    value={clientSecret || ""}
                    onChange={(e) => setClientSecret(e.target.value)}
                />
            </div>

            <div className="flex flex-col md:flex-row md:justify-between">
                <label htmlFor="code" className="label">
                    <span className="label-text">
                        Code (from previous step):
                    </span>
                </label>
                <input
                    id="code"
                    name="code"
                    placeholder="Code"
                    className="input input-bordered input-sm md:input-md"
                    type="text"
                    disabled={isLoading}
                    value={code || ""}
                    onChange={(e) => setCode(e.target.value)}
                />
            </div>

            <button
                type="submit"
                disabled={isLoading}
                className="btn btn-primary w-full btn-sm md:btn-md"
            >
                {isLoading ? "Loading..." : "Send Token request"}
            </button>
        </form>
    );
}
