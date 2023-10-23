interface Props {
    disabled: boolean;
    loading: boolean;
}

export default function StatusPanel({ disabled, loading }: Props) {
    return (
        <div className="card w-full bg-base-100 shadow-xl">
            <div className="card-body h-72">
                <h2 className="card-title">3. Send to Strava!</h2>
                <div className="w-full grid grid-cols-[1fr_2fr_2fr] gap-4">
                    <div>
                        <button
                            className="btn btn-primary"
                            disabled={loading || disabled}
                        >
                            Send!
                        </button>
                    </div>

                    <div>
                        <h3 className="font-medium text-base-content">
                            Successful exports:
                        </h3>
                        <div className="bg-base-200 p-2 rounded-lg">
                            <ul className="h-32 overflow-y-scroll p-2"></ul>
                        </div>
                    </div>

                    <div>
                        <h3 className="font-medium text-base-content">
                            Failed exports:
                        </h3>
                        <div className="bg-base-200 p-2 rounded-lg">
                            <ul className="h-32 overflow-y-scroll p-2"></ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
