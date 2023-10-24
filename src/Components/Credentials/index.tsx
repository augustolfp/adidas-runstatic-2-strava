import useAuth from "../../hooks/useAuth";
import Card from "../Card";
import Form from "./Form";
import FormResult from "./FormResult";

export default function Credentials() {
    const { status, error, result, getAuth } = useAuth();

    return (
        <Card>
            <Form onSubmit={getAuth} status={status} />
            <FormResult result={result} error={error} />
        </Card>
    );
}
