import useAuth from "../../hooks/useAuth";
import Card from "../Card";
import GetCode from "./GetCode";
import Form from "./Form";
import FormResult from "./FormResult";

export default function Credentials() {
    const { status, error, result, getAuth } = useAuth();

    return (
        <div>
            <h2 className="card-title">1. Credentials</h2>
            <Card>
                <GetCode />
                <Form onSubmit={getAuth} status={status} />
                <FormResult status={status} result={result} error={error} />
            </Card>
        </div>
    );
}
