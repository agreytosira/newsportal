import Navbar from "@/Components/Navbar";
import NewsList from "@/Components/NewsList";
import Paginator from "@/Components/Paginator";
import { Head } from "@inertiajs/react";

export default function Homepage({ auth, news }) {
    return (
        <>
            <Head title="Homepage" />
            <Navbar user={auth.user} />
            <main className="container">
                <NewsList news={news.data} />
            </main>
            <div className="flex items-center justify-center mt-8">
                <Paginator meta={news.meta} />
            </div>
        </>
    );
}
