import Navbar from "@/Components/Navbar";
import NewsList from "@/Components/NewsList";
import { Head } from "@inertiajs/react";

export default function Homepage({ news }) {
    return (
        <>
            <Head />
            <Navbar />
            <main className="container">
                <NewsList news={news} />
            </main>
        </>
    );
}
