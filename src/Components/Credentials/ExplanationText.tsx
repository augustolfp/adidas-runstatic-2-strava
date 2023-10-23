export default function ExplanationText() {
    return (
        <div className="p-4 bg-base-300 rounded-md">
            <p className="font-medium text-base-content">
                There are two different scenarios:
            </p>
            <ol className="list-decimal list-inside text-sm px-3 text-base-content">
                <li>
                    You already have an Access Token with necessary permissions
                    <p className="px-6 font-light">
                        If that's the case, just skip this section.
                    </p>
                </li>
                <li>
                    You have to generate an Access Token with necessary
                    permissions
                    <p className="px-6 font-light">
                        If that's the case, follow this section.
                    </p>
                </li>
            </ol>
        </div>
    );
}
