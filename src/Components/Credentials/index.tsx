interface Props {
    accessToken: string;
    handleInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Credentials({ accessToken, handleInput }: Props) {
    return (
        <div className="card w-full bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title">2. Credentials</h2>
                <div className="flex w-full">
                    <input
                        type="text"
                        placeholder="Paste your Access Token Here"
                        className="input input-bordered"
                        value={accessToken}
                        onChange={handleInput}
                    />
                </div>
            </div>
        </div>
    );
}
