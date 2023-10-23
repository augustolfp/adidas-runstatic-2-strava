interface Props {
    children?: React.ReactNode;
    title: string;
}

export default function ImportCardLayout({ children, title }: Props) {
    return (
        <div className="card w-full bg-base-100 shadow-xl">
            <div className="card-body h-72">
                <h2 className="card-title">{title}</h2>
                <div className="flex w-full">{children}</div>
            </div>
        </div>
    );
}
