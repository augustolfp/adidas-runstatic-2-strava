interface Props {
    disabled: boolean;
    loading: boolean;
    children?: React.ReactNode;
}

export default function StatusPanel({ disabled, loading, children }: Props) {
    return (
        <div className="card w-full bg-base-100 shadow-xl">
            <div className="card-body h-72">
                <h2 className="card-title">4. Send to Strava!</h2>
                <div className="w-full grid grid-cols-[1fr_2fr_2fr] gap-4">
                    <div className="flex flex-col gap-2 justify-end">
                        {children}
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
