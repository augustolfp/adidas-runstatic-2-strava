import ExplanationText from "./ExplanationText";
import GetCredentials from "./GetCredentials";

export default function Credentials() {
    return (
        <div className="card w-full bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title">1. Credentials</h2>
                <ExplanationText />
                <GetCredentials />
            </div>
        </div>
    );
}
