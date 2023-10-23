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
                            Export results:
                        </h3>
                        <div className="bg-base-200 p-2 rounded-lg">
                            <ul className="h-32 overflow-y-scroll p-2">
                                {results.map((result, index) => (
                                    <li
                                        key={index}
                                        className={`${
                                            result.status === "success"
                                                ? "bg-success"
                                                : "bg-error"
                                        }`}
                                    >
                                        {result.name}
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
