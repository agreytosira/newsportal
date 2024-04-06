import { Head } from "@inertiajs/react";

export default function Homepage({ title, description }) {
    return (
        <>
            <Head title={title} />
            <main>
                <div className="container px-4">
                    <h1 className="text-2xl font-bold">{title}</h1>
                    <p>{description}</p>
                </div>
            </main>
        </>
    );
}
