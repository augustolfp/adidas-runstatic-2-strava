import { useState } from "react";

export default function GetCode() {
    const [clientId, setClientId] = useState<string>("");

    const scopeUrl = import.meta.env.VITE_SCOPE_URL;
    const redirectUri = import.meta.env.VITE_REDIRECT_URI;

    const completeUrl = `${scopeUrl}&redirect_uri=${redirectUri}&client_id=${clientId}`;

    return (
        <>
            <li>
                Paste your <span className="italic">Client ID</span> to complete
                the scope URL:
                <input
                    type="text"
                    placeholder="Client ID"
                    value={clientId}
                    onChange={(e) => setClientId(e.target.value)}
                    className="input input-bordered mx-4"
                />
            </li>
            <div className="divider divider-vertical"></div>
            <li>
                Access the scope URL to get a code to generate a token:
                <div className="py-4 px-6">
                    <a
                        href={completeUrl}
                        className="link link-primary text-sm break-all"
                    >
                        {completeUrl}
                    </a>
                </div>
            </li>
        </>
    );
}
