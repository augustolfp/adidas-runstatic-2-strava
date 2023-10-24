import { type POST_File_Request } from "../../hooks/useSendToStrava";
import ResultListItem from "./ResultListItem";

interface Props {
    results: POST_File_Request[];
}

export default function UploadResultList({ results }: Props) {
    return (
        <div>
            <h5 className="text-lg font-medium">Upload Results:</h5>
            <ul className="flex flex-col gap-1 bg-base-300 p-3 rounded-xl">
                {results.map((result, index) => (
                    <ResultListItem
                        key={index}
                        name={result.name}
                        status={result.status}
                    />
                ))}
            </ul>
        </div>
    );
}
