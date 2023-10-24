import { useState } from "react";
import AuthResultPanel from "./AuthResultPanel";
import useAuth from "../../../hooks/useAuth";

export default function TokenRequestForm() {
    const [clientId, setClientId] = useState<number>();
    const [clientSecret, setClientSecret] = useState<string>("");
    const [code, setCode] = useState<string>("");

    const { status, error, result, getAuth } = useAuth();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const params = {
            client_id: clientId ?? 0,
            client_secret: clientSecret,
            code: code,
        };

        getAuth(params);
    };

    return (
        <div className="flex">
            <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-2 p-4 bg-base-200 m-4 rounded-xl w-1/2"
            >
                <div>
                    <h4 className="text-lg font-medium text-base-content text-center">
                        Access Token Request
                    </h4>
                    <p className="text-sm font-light text-base-content">
                        Submit this form to receive an Access Token from Strava
                    </p>
                </div>
                <div className="divider divider-vertical m-0"></div>
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

            <AuthResultPanel status={status} result={result} error={error} />
        </div>
    );
}
