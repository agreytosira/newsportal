import Navbar from "@/Components/Navbar";
import NewsList from "@/Components/NewsList";
import { Head } from "@inertiajs/react";

export default function Homepage(props) {
    console.log(props);

    return (
        <>
            <Head title={props.title} />
            <Navbar />
            <main className="container">
                <NewsList />
            </main>
        </>
    );
}
