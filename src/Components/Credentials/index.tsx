import useAuth from "../../hooks/useAuth";
import Card from "../Card";
import Form from "./Form";
import FormResult from "./FormResult";
import { AiOutlineCheck } from "react-icons/ai";

export default function Credentials() {
    const { status, error, result, getAuth } = useAuth();

    return (
        <Card>
            <div className="relative">
                <div className={`p-2 ${status === "success" && "opacity-60"}`}>
                    <Form onSubmit={getAuth} status={status} />
                </div>
                {status === "success" && (
                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                        <div className="bg-black opacity-40 rounded-lg w-full h-full"></div>
                        <div className="absolute text-success">
                            <AiOutlineCheck size={256} />
                        </div>
                    </div>
                )}
            </div>
            <FormResult result={result} error={error} />
        </Card>
    );
}
