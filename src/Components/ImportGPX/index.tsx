import { useAppContext } from "../../contexts/AppContext";

export default function ImportGPX() {
    const { handleGpxInput } = useAppContext();
    return (
        <div className="flex flex-col w-full">
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
                className="file-input file-input-bordered"
            />
        </div>
    );
}
