import useAuth from "../../hooks/useAuth";
import GetCode from "./GetCode";
import TokenRequestForm from "./TokenRequestForm";
import AuthResultPanel from "./AuthResultPanel";

export default function Credentials() {
    const { status, error, result, getAuth } = useAuth();
    return (
        <div className="card w-full bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title">1. Credentials</h2>

                <GetCode />
                <TokenRequestForm onSubmit={getAuth} status={status} />
                <AuthResultPanel
                    status={status}
                    result={result}
                    error={error}
                />
            </div>
        </div>
    );
}
