import { type POST_File_Request } from "../../hooks/useSendToStrava";

export default function ResultListItem({ name, status }: POST_File_Request) {
    return (
        <li className="flex justify-between items-center text-xs p-3 rounded-xl bg-base-200">
            {name}
            <div
                className={`badge ${
                    status === "success" ? "badge-success" : "badge-error"
                }`}
            >
                {status === "success" ? "Success" : "Error"}
            </div>
        </li>
    );
}
