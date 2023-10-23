interface Props {
    accessToken: string;
    handleInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function UserHasToken({ accessToken, handleInput }: Props) {
    return (
        <div className="flex items-center gap-4">
            <h4 className="font-medium text-base-content">
                Just paste your Access Token here!
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
    );
}
