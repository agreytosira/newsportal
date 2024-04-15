import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, router } from "@inertiajs/react";
import { useState } from "react";

export default function Dashboard({ auth, props }) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");

    console.log("dashboard", props);

    const handleSubmit = () => {
        const data = {
            title,
            description,
            category,
        };
        router.post("/news", data);
        setTitle("");
        setDescription("");
        setCategory("");
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="flex flex-col w-1/3 p-6 mx-auto space-y-4 bg-white border-b border-gray-200">
                        <input
                            type="text"
                            placeholder="Judul"
                            className="w-full input input-bordered"
                            onChange={(e) => setTitle(e.target.value)}
                            value={title}
                        />
                        <input
                            type="text"
                            placeholder="Deskripsi"
                            className="w-full input input-bordered"
                            onChange={(e) => setDescription(e.target.value)}
                            value={description}
                        />
                        <input
                            type="text"
                            placeholder="Kategori"
                            className="w-full input input-bordered"
                            onChange={(e) => setCategory(e.target.value)}
                            value={category}
                        />
                        <button
                            className="btn btn-primary"
                            onClick={() => handleSubmit()}
                        >
                            SUBMIT
                        </button>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
