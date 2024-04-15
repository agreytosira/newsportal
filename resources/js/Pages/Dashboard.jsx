import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function Dashboard({ auth }) {
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
                        />
                        <input
                            type="text"
                            placeholder="Deskripsi"
                            className="w-full input input-bordered"
                        />
                        <input
                            type="text"
                            placeholder="Kategori"
                            className="w-full input input-bordered"
                        />
                        <button className="btn btn-primary">SUBMIT</button>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
