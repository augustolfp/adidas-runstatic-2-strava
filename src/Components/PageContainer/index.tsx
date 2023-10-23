interface Props {
    children?: React.ReactNode;
}

export default function PageContainer({ children }: Props) {
    return (
        <div className="w-full min-h-screen bg-base-100">
            <div className="container mx-auto flex flex-col gap-6 max-w-5xl px-6 py-6">
                {children}
            </div>
        </div>
    );
}
