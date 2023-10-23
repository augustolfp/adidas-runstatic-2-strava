interface Props {
    accessToken: string;
    handleInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function InsertAccessToken({ accessToken, handleInput }: Props) {
    return (
        <div className="card w-full bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title">2. Access Token</h2>
                <div className="flex items-center gap-4">
                    <h4 className="font-medium text-base-content">
                        Paste Access Token here!
                    </h4>
                    <div></div>
                    <input
                        type="text"
                        placeholder="Access Token"
                        className="input input-bordered w-full"
                        value={accessToken}
                        onChange={handleInput}
                    />
                </div>
                <p className="text-xs text-secondary text-right">
                    Don't you have an Access Token? Go back one section :)
                </p>
            </div>
        </div>
    );
}
