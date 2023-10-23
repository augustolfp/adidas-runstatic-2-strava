import { useState } from "react";

import useGetGPX from "../../hooks/useGetGPX";
import ImportGPX from "../../Components/ImportGPX";

import Credentials from "../../Components/Credentials";

import InsertAccessToken from "../../Components/InsertAccessToken";

import StatusPanel from "../../Components/StatusPanel";

import PageContainer from "../../Components/PageContainer";

export default function Dashboard() {
    const [accessToken, setAccessToken] = useState<string>("");
    const { gpxList, handleGpxInput } = useGetGPX();

    const handleAccessToken = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAccessToken(e.target.value);
    };

    return (
        <PageContainer>
            <h1 className="text-3xl text-base-content font-medium">
                Adidas Runstatic 2 Strava
            </h1>

            <Credentials />

            <InsertAccessToken
                accessToken={accessToken}
                handleInput={handleAccessToken}
            />

            <ImportGPX gpxList={gpxList} handleGpxInput={handleGpxInput} />

            <StatusPanel gpxList={gpxList} accessToken={accessToken} />
        </PageContainer>
    );
}
