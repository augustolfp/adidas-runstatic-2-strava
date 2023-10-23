import { useState } from "react";

import useGetGPX from "../../hooks/useGetGPX";
import ImportGPX from "../../Components/ImportGPX";

import Credentials from "../../Components/Credentials";

import StatusPanel from "../../Components/StatusPanel";

import PageContainer from "../../Components/PageContainer";

import SanityCheck from "../../Components/StatusPanel/SanityCheck";

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

            <ImportGPX gpxList={gpxList} handleGpxInput={handleGpxInput} />

            <Credentials
                accessToken={accessToken}
                handleInput={handleAccessToken}
            />

            <StatusPanel disabled={false} loading={false}>
                <SanityCheck
                    hasAccessToken={Boolean(accessToken)}
                    hasGpxFiles={Boolean(gpxList.length)}
                />
            </StatusPanel>
        </PageContainer>
    );
}
