import { useState } from "react";
import axios from "axios";

type POST_File_Request = {
    status: "success" | "fail";
    name: string;
};

export default function useSendToStrava() {
    const [postFileRequests, setPostFileRequests] = useState<
    POST_File_Request[]
>([]);

const uploadURL = import.meta.env.VITE_UPLOAD_URL;

const uploadFile = (file: File, accessToken: string) => {
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

    response.then((res) => {
        console.log("Success!", res);
        const result: POST_File_Request = {
            status: "success",
            name: file.name,
        };
        setPostFileRequests((prev) => [...prev, result]);
    });

    response.catch((err) => {
        console.log("Error!", err);
        const result: POST_File_Request = {
            status: "fail",
            name: file.name,
        };
        setPostFileRequests((prev) => [...prev, result]);
    });
};

const batchUpload = (gpxList: File[], accessToken: string) => {
    gpxList.map((file) => uploadFile(file, accessToken));
} 

return {
    batchUpload,
    results: postFileRequests
}
}