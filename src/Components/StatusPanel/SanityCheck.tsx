interface Props {
    hasAccessToken: boolean;
    hasGpxFiles: boolean;
}

export default function SanityCheck({ hasAccessToken, hasGpxFiles }: Props) {
    return (
        <div className="flex flex-col gap-3">
            <h3 className="font-medium">Sanity check</h3>
            <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                    <input
                        disabled
                        type="checkbox"
                        className="checkbox checkbox-sm"
                        checked={hasGpxFiles}
                        readOnly
                    />
                    <p className="text-sm text-base-content">
                        .gpx files added
                    </p>
                </div>

                <div className="flex items-center gap-2">
                    <input
                        disabled
                        type="checkbox"
                        className="checkbox checkbox-sm"
                        checked={hasAccessToken}
                        readOnly
                    />
                    <p className="text-sm text-base-content">
                        Access Token provided
                    </p>
                </div>
            </div>
        </div>
    );
}
