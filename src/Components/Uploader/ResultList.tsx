import { type POST_File_Request } from "../../hooks/useSendToStrava";
interface Props {
    results: POST_File_Request[];
}

export default function ResultList({ results }: Props) {
    return (
        <div>
            {results.length > 0 && (
                <div className="w-full">
                    <h3 className="font-medium text-base-content">Results:</h3>
                    <div className="bg-base-200 p-2 rounded-lg">
                        <ul className="p-2">
                            {results.map((result, index) => (
                                <li
                                    key={index}
                                    className={`flex justify-between gap-4 text-xs py-1 px-2 rounded-md ${
                                        index % 2 === 0
                                            ? "bg-base-300"
                                            : "bg-base-200"
                                    }`}
                                >
                                    {result.name}
                                    <div
                                        className={`badge ${
                                            result.status === "success"
                                                ? "badge-success"
                                                : "badge-error"
                                        }`}
                                    >
                                        {result.status === "success"
                                            ? "Success"
                                            : "Error"}
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <p className="text-xs text-secondary text-right">
                        To see result details, open you Browser Developer tools
                        and check the logs!
                    </p>
                </div>
            )}
        </div>
    );
}
