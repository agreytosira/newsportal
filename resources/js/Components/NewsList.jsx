import React from "react";

const isNews = (news) => {
    return (
        <div className="grid grid-cols-3 gap-4">
            {news.data.map((data, index) => (
                <div className="w-full shadow-xl card bg-base-100" key={index}>
                    <figure>
                        <img
                            src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                            alt="Shoes"
                        />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            {data.title}
                            <div className="badge badge-secondary">NEW</div>
                        </h2>
                        <p>{data.description}</p>
                        <div className="justify-end card-actions">
                            <div className="badge badge-outline">Fashion</div>
                            <div className="badge badge-outline">Products</div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

const NoNews = () => {
    return <div>"Saat ini belum ada berita yang tersedia"</div>;
};

function NewsList({ news }) {
    return !news ? NoNews() : isNews(news);
}

export default NewsList;
