import useGetGPX from "../../hooks/useGetGPX";
import ImportGPX from "../../Components/ImportGPX";
export default function Dashboard() {
    const { gpxList, handleGpxInput } = useGetGPX();

    return (
        <div className="w-full min-h-screen bg-base-100">
            <div className="container mx-auto flex flex-col gap-6 max-w-5xl px-6 py-6">
                <h1 className="text-3xl text-base-content font-medium">
                    Adidas Runstatic 2 Strava
                </h1>
                <ImportGPX gpxList={gpxList} handleGpxInput={handleGpxInput} />
            </div>
        </div>
    );
}
