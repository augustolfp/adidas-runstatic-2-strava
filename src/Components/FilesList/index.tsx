interface Props {
    list: string[];
}

export default function FilesList({ list }: Props) {
    return (
        <div className="flex flex-col gap-2 w-1/2">
            <h3 className="font-medium text-base-content">
                {list.length} selected files:
            </h3>
            <div className="bg-base-200 p-2 rounded-lg">
                <ul className="h-32 overflow-y-scroll p-2">
                    {list.map((name, index) => (
                        <li
                            key={index}
                            className={`text-xs py-1 px-2 rounded-md ${
                                index % 2 === 0 ? "bg-base-300" : "bg-base-200"
                            }`}
                        >
                            {name}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
