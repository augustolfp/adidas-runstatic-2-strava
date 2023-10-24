import ImportGPX from "../../Components/ImportGPX";

import Credentials from "../../Components/Credentials";

import StatusPanel from "../../Components/StatusPanel";

import PageContainer from "../../Components/PageContainer";

export default function Dashboard() {
    return (
        <PageContainer>
            <h1 className="text-3xl text-base-content font-medium">
                Adidas Runstatic 2 Strava
            </h1>

            <div>
                <h2 className="text-xl font-semibold">1. Credentials</h2>
                <Credentials />
            </div>

            <div>
                <h2 className="text-xl font-semibold">2. Send to Strava</h2>
            </div>

            <ImportGPX />

            <StatusPanel />
        </PageContainer>
    );
}
