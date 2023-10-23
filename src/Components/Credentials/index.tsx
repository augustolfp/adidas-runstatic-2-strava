import ExplanationText from "./ExplanationText";
import UserHasNoToken from "./UserHasNoToken";

export default function Credentials() {
    return (
        <div className="card w-full bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title">2. Credentials</h2>
                <ExplanationText />
                <UserHasNoToken />
            </div>
        </div>
    );
}
