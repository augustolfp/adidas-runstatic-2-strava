import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

export default function Footer() {
    return (
        <footer className="footer items-center p-4 bg-neutral text-neutral-content">
            <aside className="flex flex-col gap-0">
                <p>Made by augustolfp</p>
                <p className="text-xs">augustolfp@gmail.com</p>
            </aside>
            <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
                <a
                    href="https://github.com/augustolfp/adidas-runstatic-2-strava"
                    target="_blank"
                >
                    <AiFillGithub size={24} />
                </a>
                <a
                    href="https://www.linkedin.com/in/augustolopesfalcao/"
                    target="_blank"
                >
                    <AiFillLinkedin size={24} />
                </a>
            </nav>
        </footer>
    );
}
