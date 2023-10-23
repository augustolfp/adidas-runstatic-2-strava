import SanityCheck from "./SanityCheck";
import useSendToStrava from "../../hooks/useSendToStrava";

interface Props {
    gpxList: File[];
    accessToken: string;
}

export default function StatusPanel({ gpxList, accessToken }: Props) {
    const { batchUpload, results } = useSendToStrava();
    const handleUpload = () => {
        batchUpload(gpxList, accessToken);
    };

    return (
        <div className="card w-full bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title">4. Send to Strava!</h2>
                <div className="flex flex-col gap-2">
                    <div className="flex flex-col gap-2 justify-end">
                        <SanityCheck
                            hasAccessToken={Boolean(accessToken)}
                            hasGpxFiles={Boolean(gpxList.length)}
                        />
                        <button
                            onClick={handleUpload}
                            className="btn btn-primary"
                        >
                            Send!
                        </button>
                    </div>

                    <div className="w-full">
                        <h3 className="font-medium text-base-content">
                            Results:
                        </h3>
                        <div className="bg-base-200 p-2 rounded-lg">
                            <ul className="p-2">
                                {results.map((result, index) => (
                                    <li
                                        key={index}
                                        className={`flex justify-between gap-4 text-xs py-1 px-2 rounded-md ${
                                            index % 2 === 0
                                                ? "bg-base-300"
                                                : "bg-base-200"
                                        }`}
                                    >
                                        {result.name}
                                        <div
                                            className={`badge ${
                                                result.status === "success"
                                                    ? "badge-success"
                                                    : "badge-error"
                                            }`}
                                        >
                                            {result.status === "success"
                                                ? "Success"
                                                : "Error"}
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
