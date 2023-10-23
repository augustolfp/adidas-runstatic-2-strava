import ImportCardLayout from "../ImportCardLayout";
import FilesList from "../FilesList";

interface Props {
    gpxList: File[];
    handleGpxInput: (e: React.FormEvent<HTMLInputElement>) => void;
}

export default function ImportGPX({ gpxList, handleGpxInput }: Props) {
    return (
        <ImportCardLayout title="1. GPX Files">
            <div className="flex flex-col gap-2 w-5/12">
                <p>
                    Upload <strong>.gpx</strong> files received from
                    <span className="italic">Adidas Runstatic</span>
                    Platform:
                </p>
                <label htmlFor="GPX-files" className="text-error">
                    Select only <strong>.gpx</strong> files!
                </label>
                <input
                    id="GPX-files"
                    type="file"
                    name="GPX-files"
                    placeholder="Adicione arquivos .gpx"
                    multiple
                    accept=".gpx"
                    onChange={handleGpxInput}
                    className="file-input w-full file-input-md file-input-bordered"
                />
            </div>

            <div className="divider divider-horizontal"></div>

            <FilesList list={gpxList.map((file) => file.name)} />
        </ImportCardLayout>
    );
}
