import { useState } from "react";
import axios from "axios";
import SanityCheck from "./SanityCheck";

interface Props {
    gpxList: File[];
    accessToken: string;
}

type POST_File_Request = {
    status: "success" | "fail";
    name: string;
};

export default function StatusPanel({ gpxList, accessToken }: Props) {
    const [postFileRequests, setPostFileRequests] = useState<
        POST_File_Request[]
    >([]);

    const uploadURL = import.meta.env.VITE_UPLOAD_URL;

    const uploadFile = (file: File) => {
        const formData = new FormData();
        formData.append("file", file);
        const randomId = crypto.randomUUID().substring(0, 6);

        const params = {
            name: `Adidas2Strava import-${randomId}`,
            description: "No description",
            trainer: "false",
            commute: "false",
            data_type: "gpx",
            external_id: file.name,
        };

        const headers = {
            Authorization: `Bearer ${accessToken}`,
        };

        const response = axios.post(uploadURL, formData, {
            headers: { ...headers },
            params: { ...params },
        });

        response.then((_res) => {
            const result: POST_File_Request = {
                status: "success",
                name: file.name,
            };
            setPostFileRequests((prev) => [...prev, result]);
        });

        response.catch((_err) => {
            const result: POST_File_Request = {
                status: "fail",
                name: file.name,
            };
            setPostFileRequests((prev) => [...prev, result]);
        });
    };

    const handleUpload = () => {
        gpxList.map((file) => uploadFile(file));
    };

    return (
        <div className="card w-full bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title">4. Send to Strava!</h2>
                <div className="flex flex-col gap-2">
                    <div className="flex flex-col gap-2 justify-end">
                        <SanityCheck
                            hasAccessToken={Boolean(accessToken)}
                            hasGpxFiles={Boolean(gpxList.length)}
                        />
                        <button
                            onClick={handleUpload}
                            className="btn btn-primary"
                        >
                            Send!
                        </button>
                    </div>

                    <div className="w-full">
                        <h3 className="font-medium text-base-content">
                            Export results:
                        </h3>
                        <div className="bg-base-200 p-2 rounded-lg">
                            <ul className="h-32 overflow-y-scroll p-2">
                                {postFileRequests.map((result, index) => (
                                    <li
                                        key={index}
                                        className={`${
                                            result.status === "success"
                                                ? "bg-success"
                                                : "bg-error"
                                        }`}
                                    >
                                        {result.name}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
