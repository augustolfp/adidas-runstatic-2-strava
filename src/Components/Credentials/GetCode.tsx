interface Props {
    clientId?: number;
}

export default function GetCode({ clientId }: Props) {
    const scopeUrl = import.meta.env.VITE_SCOPE_URL;
    const redirectUri = import.meta.env.VITE_REDIRECT_URI;

    const completeUrl = `${scopeUrl}&redirect_uri=${redirectUri}&client_id=${clientId}`;

    return (
        <div>
            <p className="py-4 px-6">
                Open{" "}
                <a
                    href={completeUrl}
                    target="_blank"
                    className="link link-primary text-sm break-all"
                >
                    this link
                </a>{" "}
                in another tab to get your code.
            </p>
            <p className="text-warning text-sm">
                <strong>PS:</strong> Be sure to properly fill your{" "}
                <strong>Client ID</strong> field in the form before, otherwise
                the link won't work!
            </p>
        </div>
    );
}
