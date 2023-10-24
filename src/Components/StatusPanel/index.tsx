import SanityCheck from "./SanityCheck";
import useSendToStrava from "../../hooks/useSendToStrava";
import { useAppContext } from "../../contexts/AppContext";

interface Props {
    gpxList: File[];
}

export default function StatusPanel({ gpxList }: Props) {
    const { accessToken } = useAppContext();
    const { batchUpload, results, isLoading } = useSendToStrava();
    const handleUpload = () => {
        if (accessToken) {
            batchUpload(gpxList, accessToken);
        }
    };

    return (
        <div className="card w-full bg-base-100 shadow-xl">
            <div className="card-body">
                <div>Access token: {accessToken}</div>
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
                            disabled={
                                isLoading ||
                                gpxList.length === 0 ||
                                !accessToken
                            }
                        >
                            {isLoading ? "Loading..." : "Send!"}
                        </button>
                    </div>
                    {results.length > 0 && (
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
                            <p className="text-xs text-secondary text-right">
                                To see result details, open you Browser
                                Developer tools and check the logs!
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
