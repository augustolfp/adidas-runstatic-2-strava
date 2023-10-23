import { useState } from "react";

import ExplanationText from "./ExplanationText";

import UserHasToken from "./UserHasToken";
import UserHasNoToken from "./UserHasNoToken";

interface Props {
    accessToken: string;
    handleInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Credentials({ accessToken, handleInput }: Props) {
    const [toggle, setToggle] = useState(true);

    const handleToggle = () => {
        setToggle(!toggle);
    };

    return (
        <div className="card w-full bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title">2. Credentials</h2>
                <ExplanationText />
                <div className="w-full">
                    <div className="tabs">
                        <a
                            onClick={handleToggle}
                            className={`tab tab-bordered tab-sm w-1/2 ${
                                toggle ? "tab-active" : ""
                            }`}
                        >
                            I already have a Token
                        </a>
                        <a
                            onClick={handleToggle}
                            className={`tab tab-bordered tab-sm w-1/2 ${
                                !toggle ? "tab-active" : ""
                            }`}
                        >
                            I need to Request a Token
                        </a>
                    </div>
                    <div className="py-4">
                        {toggle ? (
                            <UserHasToken
                                accessToken={accessToken}
                                handleInput={handleInput}
                            />
                        ) : (
                            <UserHasNoToken />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
