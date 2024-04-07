import { Head } from "@inertiajs/react";

export default function Homepage(props) {
    console.log(props);

    return (
        <>
            <Head title={props.title} />
            <main>
                <div className="container">
                    <div className="py-4">
                        <h1 className="text-2xl font-bold">{props.title}</h1>
                        <p>{props.description}</p>
                    </div>
                    <div className="flex flex-col gap-2">
                        {props.news.map((news, index) => {
                            return (
                                <div
                                    className="p-4 border border-slate-300"
                                    key={index}
                                >
                                    <h1 className="text-xl font-bold">
                                        {news.title}
                                    </h1>
                                    <p className="text-slate-600">
                                        {news.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </main>
        </>
    );
}
