import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  useLoaderData,
} from "@remix-run/react";

import appStylesHref from "./app.css";
import app2StylesHref from "./assets/css/style.css";
import React from "react";

import { useChangeLanguage } from "remix-i18next";
import { useTranslation } from "react-i18next";
import i18next from "./structures/i18next.server.mjs";

export async function loader({ request }) {
  let locale = await i18next.getLocale(request);
  return JSON.stringify({ locale });
}

export let handle = {
  i18n: "common"
}

export let links = () => {
  return [{ rel: "stylesheet", href: appStylesHref }, { rel: "stylesheet", href: app2StylesHref }];
}

export default function App() {

  let { locale } = useLoaderData();

  let { t } = useTranslation("common");

  useChangeLanguage(locale);

  return (
    <html lang={locale} >
      <head>
        <title>{t('info.name')}</title>
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

        <link rel="preload" as="style"
          href="https://fonts.googleapis.com/css?family=Open%20Sans%3ARegular%20400%26amp%3Bamp%3BOpen%20Sans%7CPoppins%7CNunito%7CRoboto%3A100%2C100italic%2C200%2C200italic%2C300%2C300italic%2C400%2C400italic%2C500%2C500italic%2C600%2C600italic%2C700%2C700italic%2C800%2C800italic%2C900%2C900italic%7CRoboto%20Slab%3A100%2C100italic%2C200%2C200italic%2C300%2C300italic%2C400%2C400italic%2C500%2C500italic%2C600%2C600italic%2C700%2C700italic%2C800%2C800italic%2C900%2C900italic%7CLato%3A100%2C100italic%2C200%2C200italic%2C300%2C300italic%2C400%2C400italic%2C500%2C500italic%2C600%2C600italic%2C700%2C700italic%2C800%2C800italic%2C900%2C900italic%7CNunito%3A100%2C100italic%2C200%2C200italic%2C300%2C300italic%2C400%2C400italic%2C500%2C500italic%2C600%2C600italic%2C700%2C700italic%2C800%2C800italic%2C900%2C900italic&#038;display=swap" />

        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open%20Sans%3ARegular%20400%26amp%3Bamp%3BOpen%20Sans%7CPoppins%7CNunito%7CRoboto%3A100%2C100italic%2C200%2C200italic%2C300%2C300italic%2C400%2C400italic%2C500%2C500italic%2C600%2C600italic%2C700%2C700italic%2C800%2C800italic%2C900%2C900italic%7CRoboto%20Slab%3A100%2C100italic%2C200%2C200italic%2C300%2C300italic%2C400%2C400italic%2C500%2C500italic%2C600%2C600italic%2C700%2C700italic%2C800%2C800italic%2C900%2C900italic%7CLato%3A100%2C100italic%2C200%2C200italic%2C300%2C300italic%2C400%2C400italic%2C500%2C500italic%2C600%2C600italic%2C700%2C700italic%2C800%2C800italic%2C900%2C900italic%7CNunito%3A100%2C100italic%2C200%2C200italic%2C300%2C300italic%2C400%2C400italic%2C500%2C500italic%2C600%2C600italic%2C700%2C700italic%2C800%2C800italic%2C900%2C900italic&#038;display=swap" />

        <link href='https://fonts.gstatic.com' crossOrigin="true" rel='preconnect' />
        <script id="Cookiebot" src="https://consent.cookiebot.com/uc.js" data-cbid="1f21a70c-52af-41d6-b176-a87a9f32d685" data-blockingmode="auto" type="text/javascript"></script>
        <Meta />
        <Links />
      </head>
      <body>
        <div id="app">
          <Outlet />
        </div>

        <script async src="https://www.googletagmanager.com/gtag/js?id=G-KN5MF3TFKE"></script>
        <script dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'G-KN5MF3TFKE');
         `}} />

        <script
          data-section-id="navbar"
          src="https://unpkg.com/@teleporthq/teleport-custom-scripts"
        ></script>

        <script src="https://kit.fontawesome.com/a1a8c654c5.js" crossOrigin="anonymous"></script>
        <Scripts />
        <Links />
        <LiveReload />
      </body>
    </html>
  );
}
