import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <div className="navbar bg-white drop-shadow-md sticky top-0 z-30 h-16 flex justify-between items-center">
            <Link
                to="/"
                className="btn btn-ghost normal-case text-3xl flex gap-0 text-base-content"
            >
                <span>Adidas</span>
                <span className="text-secondary text-4xl">2</span>
                <span>Strava </span>
            </Link>
            <div className="flex items-center gap-2">
                <Link
                    to="/instructions"
                    className="btn btn-ghost normal-case font-normal"
                >
                    Getting started
                </Link>

                <Link
                    to="/upload-tool"
                    className="btn btn-ghost normal-case font-normal"
                >
                    Upload tool
                </Link>

                <Link
                    to="https://github.com/augustolfp/adidas-runstatic-2-strava"
                    className="btn btn-ghost normal-case font-normal"
                >
                    Github repo
                </Link>
            </div>
        </div>
    );
}
