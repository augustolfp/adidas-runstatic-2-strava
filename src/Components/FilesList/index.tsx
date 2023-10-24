import { useAppContext } from "../../contexts/AppContext";

export default function FilesList() {
    const { gpxList } = useAppContext();
    const list = gpxList.map((file) => file.name);

    return (
        <div className="w-full">
            <h3 className="font-medium text-base-content">
                {list.length} selected files:
            </h3>
            <ul className="flex flex-col gap-1 bg-base-300 p-3 rounded-xl h-32 overflow-y-scroll">
                {list.map((name, index) => (
                    <li
                        key={index}
                        className="text-xs p-2 rounded-md bg-base-200"
                    >
                        {name}
                    </li>
                ))}
            </ul>
        </div>
    );
}
