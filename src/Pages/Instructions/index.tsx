import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import fileTree from "./fileTree.md";

export default function Instructions() {
    return (
        <div className="container mx-auto max-w-5xl p-8">
            <div className="prose max-w-none">
                <ReactMarkdown
                    children={fileTree}
                    rehypePlugins={[rehypeRaw]}
                />
            </div>
        </div>
    );
}
