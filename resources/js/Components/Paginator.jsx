import { Link } from "@inertiajs/react";

function Paginator({ meta }) {
    const prev = meta.links[0].url;
    const next = meta.links[meta.links.length - 1].url;
    const current = meta.current_page;

    return (
        <div className="btn-group">
            {prev && (
                <Link className="btn" href={prev}>
                    Previous
                </Link>
            )}
            <button className="btn">Page {current}</button>
            {next && (
                <Link className="btn" href={next}>
                    Next
                </Link>
            )}
        </div>
    );
}

export default Paginator;
