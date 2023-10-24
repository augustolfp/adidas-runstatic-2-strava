import secondsToHoursConverter from "../../utils/secondsToHoursConverter";

type SuccessResponse = {
    accessToken: string;
    athleteName: string;
    expiresIn: number;
};

type ErrorResponse = {
    message: string;
    errorArr: string;
};

interface Props {
    status: "loading" | "success" | "error" | "idle";
    result: SuccessResponse | null;
    error: ErrorResponse | null;
}

export default function AuthResultPanel({ status, result, error }: Props) {
    return (
        <div className="flex flex-col p-4 bg-base-200 m-4 rounded-xl w-1/2">
            <div>
                <h4 className="text-lg font-medium text-base-content text-center">
                    Results Panel
                </h4>
                <p className="text-sm font-light text-base-content">
                    The Strava's API Response will appear here, after the Token
                    Request Submit
                </p>
            </div>
            <div className="divider divider-vertical m-0"></div>
            {result && (
                <div className="flex flex-col gap-2">
                    <h4 className="text-success font-medium text-center">
                        Success!
                    </h4>
                    <div className="p-2 bg-base-300 rounded-lg">
                        <h5 className="font-medium">Athlete name:</h5>
                        <p className="px-4 break-all">{result.athleteName}</p>
                    </div>
                    <div className="p-2 bg-base-300 rounded-lg">
                        <h5 className="font-medium">Access Token:</h5>
                        <p className="px-4 break-all">{result.accessToken}</p>
                    </div>
                    <div className="p-2 bg-base-300 rounded-lg">
                        <h5 className="font-medium">Expires in:</h5>
                        <p className="px-4 break-all">
                            {secondsToHoursConverter(result.expiresIn)}{" "}
                            <span className="font-light">(HH:mm:ss)</span>
                        </p>
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
