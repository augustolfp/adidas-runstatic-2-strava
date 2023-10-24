import Credentials from "../../Components/Credentials";

import PageContainer from "../../Components/PageContainer";

import Uploader from "../../Components/Uploader";

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
                <Uploader />
            </div>
        </PageContainer>
    );
}
