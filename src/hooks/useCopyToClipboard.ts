import { useState } from "react";

export default function useCopyToClipboard() {
    const [result, setResult] = useState<
        null | { state: "success" } | { state: "error"; message: string }
    >(null);

    const copy = async (text: string) => {
        try {
            await navigator.clipboard.writeText(text);
            setResult({ state: "success" });
        } catch (e) {
            setResult({
                state: "error",
                message:
                    "Something gone wrong. Please copy the text manually.",
            });
            throw e;
        } finally {
            setTimeout(() => {
                setResult(null);
            }, 2000);
        }
    };

    return [copy, result] as const;
}
