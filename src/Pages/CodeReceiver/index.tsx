import { useSearchParams } from "react-router-dom";
import useCopyToClipboard from "../../hooks/useCopyToClipboard";
import PageContainer from "../../Components/PageContainer";

export default function CodeReceiver() {
    const [searchParams, _setSearchParams] = useSearchParams();
    const code = searchParams.get("code");

    const [copyCode, copyCodeResult] = useCopyToClipboard();

    const handleClickCopyCode = () => {
        if (code) {
            copyCode(code);
        }
    };

    return (
        <PageContainer>
            <h1 className="text-3xl text-base-content font-medium">
                Adidas Runstatic 2 Strava
            </h1>
            <div>
                {code ? (
                    <div>
                        <h2 className="text-xl text-success font-medium mb-8">
                            Code received successfully!
                        </h2>
                        <p className="mb-1">Your code is:</p>
                        <div className="flex items-center gap-2 h-14 mb-8">
                            <div className="flex items-center bg-base-200 px-4 h-full rounded-md font-bold text-base-content">
                                {code}
                            </div>
                            <button
                                className="btn btn-primary h-full"
                                onClick={handleClickCopyCode}
                            >
                                Copy
                            </button>
                            <div className="text-xs text-base-content">
                                {copyCodeResult?.state === "success" &&
                                    "Copied!"}
                                {copyCodeResult?.state === "error" &&
                                    "Something gone wrong. Please copy manually"}
                            </div>
                        </div>
                        <p className="font-medium">
                            PS: This is a short-lived code. Copy it, close this
                            page and go back to the form!
                        </p>
                    </div>
                ) : (
                    <div>
                        <h2>
                            No <span className="italic">code</span> param was
                            found at the URL. Try again!
                        </h2>
                    </div>
                )}
            </div>
        </PageContainer>
    );
}
