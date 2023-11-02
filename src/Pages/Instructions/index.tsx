import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import instructions from "./instructions.md";

export default function Instructions() {
    return (
        <div className="container mx-auto max-w-5xl p-8 flex flex-col items-center">
            <div className="prose prose-img:rounded-2xl prose-img:shadow-md">
                <ReactMarkdown
                    children={instructions}
                    rehypePlugins={[rehypeRaw]}
                />
            </div>
        </div>
    );
}
