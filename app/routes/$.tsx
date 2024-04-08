// Import React and Remix packages
import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "@remix-run/react";

// Import CSS
import errorStylesHref from "../styles/404.css?url";

// Load the CSS
export const links = () => {
    return [
        { rel: 'stylesheet', href: errorStylesHref },
        { rel: 'stylesheet', href: "https://fonts.googleapis.com/css?family=Montserrat:700,900" }
    ]
}

// Page loader
export function loader() {
    return new Response("Not Found", {
        status: 404,
    });
};

// 404 Page
export default function NotFoundPage() {
    return (
        <>
            <div id="notfound">
                <div className="notfound">
                    <div className="notfound-404">
                        <h1>404</h1>
                        <h2>Page not found</h2>
                    </div>
                    <Link to="/">Homepage</Link>
                </div>
            </div>
        </>
    )
}