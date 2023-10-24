import useGetGPX from "../../hooks/useGetGPX";
import ImportGPX from "../../Components/ImportGPX";

import Credentials from "../../Components/Credentials";

import StatusPanel from "../../Components/StatusPanel";

import PageContainer from "../../Components/PageContainer";

export default function Dashboard() {
    const { gpxList, handleGpxInput } = useGetGPX();

    return (
        <PageContainer>
            <h1 className="text-3xl text-base-content font-medium">
                Adidas Runstatic 2 Strava
            </h1>

            <Credentials />

            <ImportGPX gpxList={gpxList} handleGpxInput={handleGpxInput} />

            <StatusPanel gpxList={gpxList} />
        </PageContainer>
    );
}
