import ReactMarkdown from "react-markdown";
import fileTree from "./fileTree.md";

export default function Instructions() {
    return (
        <div className="mockup-code max-w-3xl text-xs">
            <pre>
                <code>
                    <ReactMarkdown children={fileTree} />
                </code>
            </pre>
        </div>
    );
}
