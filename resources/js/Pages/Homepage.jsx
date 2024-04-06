import { Link, Head } from "@inertiajs/react";

export default function Homepage({ title, description }) {
    return (
        <main>
            <h1>{title}</h1>
            <p>{description}</p>
        </main>
    );
}
