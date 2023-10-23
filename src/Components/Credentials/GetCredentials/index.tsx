import { useState } from "react";
import TokenRequestForm from "./TokenRequestForm";

export default function GetCredentials() {
    const [clientId, setClientId] = useState<string>("");

    const scopeUrl = import.meta.env.VITE_SCOPE_URL;
    const redirectUri = import.meta.env.VITE_REDIRECT_URI;

    const completeUrl = `${scopeUrl}&redirect_uri=${redirectUri}&client_id=${clientId}`;

    return (
        <div className="flex flex-col gap-4">
            <h4 className="font-medium text-base-content">
                Follow the steps below:
            </h4>
            <ol className="list-roman list-inside">
                <li>
                    Paste your <span className="italic">Client ID</span> to
                    complete the scope URL:
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

                <div className="divider divider-vertical"></div>

                <li>
                    You received a <span className="italic">code</span> at the
                    previus step. Now when can use it to request an Access Token
                    that will give us the desired permissions. Fill this form
                    and submit:
                    <TokenRequestForm />
                </li>
            </ol>
        </div>
    );
}
