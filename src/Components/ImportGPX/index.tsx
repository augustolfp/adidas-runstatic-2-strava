interface Props {
    gpxList: File[];
    handleGpxInput: (e: React.FormEvent<HTMLInputElement>) => void;
}

export default function ImportGPX({ gpxList, handleGpxInput }: Props) {
    return (
        <div className="card w-full bg-base-100 shadow-xl">
            <div className="card-body h-72">
                <h2 className="card-title">1. GPX Files</h2>
                <div className="flex w-full">
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

                    <div className="flex flex-col gap-2 w-1/2">
                        <h3 className="font-medium text-base-content">
                            {gpxList.length} selected files:
                        </h3>
                        <div className="bg-base-200 p-2 rounded-lg">
                            <ul className="h-32 overflow-y-scroll">
                                {gpxList.map((file, index) => (
                                    <li key={index} className="text-xs">
                                        {file.name}
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
