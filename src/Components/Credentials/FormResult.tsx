import secondsToHoursConverter from "../../utils/secondsToHoursConverter";
import { type SuccessResponse, type ErrorResponse } from "../../types";

interface Props {
    result: SuccessResponse | null;
    error: ErrorResponse | null;
}

export default function FormResult({ result, error }: Props) {
    return (
        <div>
            {result && (
                <div className="flex items-center">
                    <h4 className="text-success font-bold w-1/2 text-center text-4xl">
                        Success!
                    </h4>
                    <div className="w-1/2">
                        <h5 className="text-lg font-medium">Received data</h5>
                        <ul className="list-inside list-disc bg-neutral-content py-2 px-4 rounded-xl text-neutral font-semibold">
                            <li>
                                Athlete name:
                                <p className="pl-8 pr-4 break-all font-normal">
                                    {result.athleteName}
                                </p>
                            </li>
                            <li>
                                Access Token:
                                <p className="pl-8 pr-4 break-all font-normal">
                                    {result.accessToken}
                                </p>
                            </li>
                            <li>
                                Expires in:
                                <p className="pl-8 pr-4 break-all font-normal">
                                    {secondsToHoursConverter(result.expiresIn)}{" "}
                                    <span className="font-light">
                                        (HH:mm:ss)
                                    </span>
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            )}
            {error && (
                <div>
                    <h4 className="text-error font-medium text-center">
                        Error!
                    </h4>
                    <div>
                        <h5 className="font-medium">Message:</h5>
                        <p className="px-4 break-all">{error.message}</p>
                    </div>
                    <div>
                        <h5 className="font-medium">Errors:</h5>
                        <p className="px-4 break-all">{error.errorArr}</p>
                    </div>
                </div>
            )}
        </div>
    );
}
