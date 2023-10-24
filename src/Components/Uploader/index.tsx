import Card from "../Card";
import ImportGPX from "../ImportGPX";
import FilesList from "../FilesList";
import StatusPanel from "../StatusPanel";

export default function Uploader() {
    return (
        <Card>
            <ImportGPX />
            <StatusPanel />
            <FilesList />
        </Card>
    );
}
