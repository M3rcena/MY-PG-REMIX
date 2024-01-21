import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
} from "@remix-run/react";

import appStylesHref from "./app.css";
import app2StylesHref from "#app/assets/css/style.css";
import React from "react";

export let links = () => {
  return [{ rel: "stylesheet", href: appStylesHref }, { rel: "stylesheet", href: app2StylesHref}];
}

export default function App() {
  return (
    <html lang="en">
      <head>
        <title>MyPG | My Playground</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="utf-8" />
        <meta property="twitter:card" content="summary_large_image" />
        <link
          rel="icon"
          href="data:image/x-icon;base64,AA"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
          data-tag="font"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          data-tag="font"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap"
          data-tag="font"
        />
        <Meta />
        <Links />
      </head>
      <body>
        <div id="app">
          <Outlet />
        </div>

        <script
          data-section-id="navbar"
          src="https://unpkg.com/@teleporthq/teleport-custom-scripts"
        ></script>
        <Scripts />
        <LiveReload />
      </body>
    </html>    
  );
}
