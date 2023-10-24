import Card from "../Card";
import ImportGPX from "../ImportGPX";
import FilesList from "../FilesList";
import ResultList from "./ResultList";

import useSendToStrava from "../../hooks/useSendToStrava";
import { useAppContext } from "../../contexts/AppContext";

export default function Uploader() {
    const { accessToken, gpxList } = useAppContext();
    const { batchUpload, results, isLoading } = useSendToStrava();
    const handleUpload = () => {
        if (accessToken) {
            batchUpload(gpxList, accessToken);
        }
    };

    return (
        <Card>
            <div className="flex gap-4">
                <ImportGPX />
                <FilesList />
            </div>

            <button
                onClick={handleUpload}
                className="btn btn-primary"
                disabled={isLoading || gpxList.length === 0 || !accessToken}
            >
                {isLoading ? "Loading..." : "Send!"}
            </button>

            <ResultList results={results} />
        </Card>
    );
}
