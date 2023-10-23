import { AiFillCheckCircle, AiFillCloseCircle } from "react-icons/ai";
interface Props {
    hasAccessToken: boolean;
    hasGpxFiles: boolean;
}

export default function SanityCheck({ hasAccessToken, hasGpxFiles }: Props) {
    return (
        <div>
            <h3 className="text-lg font-medium">Sanity check</h3>

            <div className="flex gap-6 ">
                <div
                    className={`flex items-center justify-center p-4 rounded-md gap-3 font-semibold w-full border-solid border-2 ${
                        hasGpxFiles ? "border-success" : "border-error"
                    }`}
                >
                    <p
                        className={`text-sm text-base-content ${
                            hasGpxFiles
                                ? "text-success-content"
                                : "text-error-content"
                        }`}
                    >
                        .gpx files added?
                    </p>
                    <div
                        className={`${
                            hasGpxFiles ? "text-success" : "text-error"
                        }`}
                    >
                        {hasGpxFiles ? (
                            <AiFillCheckCircle size={24} />
                        ) : (
                            <AiFillCloseCircle size={20} />
                        )}
                    </div>
                </div>

                <div
                    className={`flex items-center justify-center p-4 rounded-md gap-3 font-semibold w-full border-solid border-2 ${
                        hasAccessToken ? "border-success" : "border-error"
                    }`}
                >
                    <p
                        className={`text-sm text-base-content ${
                            hasAccessToken
                                ? "text-success-content"
                                : "text-error-content"
                        }`}
                    >
                        Access Token provided?
                    </p>
                    <div
                        className={`${
                            hasAccessToken ? "text-success" : "text-error"
                        }`}
                    >
                        {hasAccessToken ? (
                            <AiFillCheckCircle size={24} />
                        ) : (
                            <AiFillCloseCircle size={20} />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
