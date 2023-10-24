import { useState } from "react";
import { type AuthRequestParams } from "../../types";
import GetCode from "./GetCode";

interface Props {
    onSubmit: (paramsObj: AuthRequestParams) => void;
    status: "loading" | "success" | "error" | "idle";
}

export default function Form({ onSubmit, status }: Props) {
    const [clientId, setClientId] = useState<number>();
    const [clientSecret, setClientSecret] = useState<string>("");
    const [code, setCode] = useState<string>("");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const params = {
            client_id: clientId ?? 0,
            client_secret: clientSecret,
            code: code,
        };

        onSubmit(params);
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-2">
            <div className="w-full">
                <label htmlFor="client_id" className="label">
                    <span className="label-text">Client ID:</span>
                </label>
                <input
                    id="client_id"
                    name="client_id"
                    placeholder="Client ID"
                    className="input input-bordered w-full"
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

            <div className="w-full">
                <label htmlFor="client_secret" className="label">
                    <span className="label-text">Client Secret:</span>
                </label>
                <input
                    id="client_secret"
                    name="client_secret"
                    placeholder="Client Secret"
                    className="input input-bordered w-full"
                    type="password"
                    disabled={status === "loading"}
                    value={clientSecret || ""}
                    onChange={(e) => setClientSecret(e.target.value)}
                />
            </div>

            <div className="w-full">
                <label htmlFor="code" className="label">
                    <span className="label-text">
                        One-time use Strava Code:
                    </span>
                </label>
                <div className="flex gap-2">
                    <input
                        id="code"
                        name="code"
                        placeholder="Code"
                        className="input input-bordered w-1/2"
                        type="text"
                        disabled={status === "loading"}
                        value={code || ""}
                        onChange={(e) => setCode(e.target.value)}
                    />
                    <GetCode clientId={clientId} />
                </div>
            </div>

            <button
                type="submit"
                disabled={status === "loading"}
                className="btn btn-primary"
            >
                {status === "loading" ? "Loading..." : "Send Token request"}
            </button>
        </form>
    );
}
