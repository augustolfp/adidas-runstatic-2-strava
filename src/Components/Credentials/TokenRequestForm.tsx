import { useState } from "react";
import axios from "axios";

export default function TokenRequestForm() {
    const [clientId, setClientId] = useState<number>();
    const [clientSecret, setClientSecret] = useState<string>("");
    const [code, setCode] = useState<string>("");
    const [status, setStatus] = useState<
        "loading" | "success" | "error" | "idle"
    >("idle");
    const [result, setResult] = useState({
        accessToken: "",
        athleteName: "",
        expiresIn: 0,
    });

    const baseURL = import.meta.env.VITE_TOKEN_REQUEST_URL;

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus("loading");

        const response = axios.post(baseURL, null, {
            params: {
                client_id: clientId,
                client_secret: clientSecret,
                code: code,
            },
        });

        response.then((res) => {
            setStatus("success");
            console.log("Success!", res);
            setResult({
                accessToken: res.data.access_token,
                athleteName: res.data.athlete.firstname,
                expiresIn: res.data.expires_in,
            });
        });
        response.catch((err) => {
            setStatus(err);
            console.log("Error!", err);
        });
    };

    return (
        <div className="flex">
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
                        disabled={status === "loading"}
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
                        disabled={status === "loading"}
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
                        disabled={status === "loading"}
                        value={code || ""}
                        onChange={(e) => setCode(e.target.value)}
                    />
                </div>

                <button
                    type="submit"
                    disabled={status === "loading"}
                    className="btn btn-primary w-full btn-sm md:btn-md"
                >
                    {status === "loading" ? "Loading..." : "Send Token request"}
                </button>
            </form>
            <div className="flex flex-col p-4 bg-base-200 m-4 rounded-xl w-1/2">
                <div>
                    <h4 className="text-lg font-medium text-base-content text-center">
                        Results Panel
                    </h4>
                    <p className="text-sm font-light text-base-content">
                        The Strava's API Response will appear here, after the
                        Token Request Submit
                    </p>
                </div>
                <div className="divider divider-vertical m-0"></div>
                {status === "success" && (
                    <div>
                        <h4 className="text-success font-medium text-center">
                            Success!
                        </h4>
                        <ul>
                            <li>
                                <strong>Athlete name:</strong>
                                {result.athleteName}
                            </li>
                            <li>
                                <strong>Access Token:</strong>
                                {result.accessToken}
                            </li>
                            <li>
                                <strong>Expires in:</strong>
                                {result.expiresIn}
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
}
