import { useState } from "react";

interface Target extends HTMLInputElement {
    files: FileList;
}

export default function useGetGPX() {
    const [gpxList, setGpxList] = useState<File[]>([]);

    const handleGpxInput = (event: React.FormEvent<HTMLInputElement>) => {
        const target = event.target as Target;
        const gpxArr = Array.from(target.files);
        setGpxList(gpxArr);
    };

    return {
        gpxList,
        handleGpxInput
    }
}