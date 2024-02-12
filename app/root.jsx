import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
} from "@remix-run/react";

import appStylesHref from "./app.css";
import app2StylesHref from "./assets/css/style.css";
import React from "react";
import initi18n from "./structures/i18n.mjs";
import { translate } from "./structures/i18n.mjs";
initi18n();

export let links = () => {
  return [{ rel: "stylesheet", href: appStylesHref }, { rel: "stylesheet", href: app2StylesHref }];
}

export default function App() {
  return (
    <html lang="en">
      <head>
        <title>{translate('gr', 'info.name')}</title>
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

        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open%20Sans%3ARegular%20400%26amp%3Bamp%3BOpen%20Sans%7CPoppins%7CNunito%7CRoboto%3A100%2C100italic%2C200%2C200italic%2C300%2C300italic%2C400%2C400italic%2C500%2C500italic%2C600%2C600italic%2C700%2C700italic%2C800%2C800italic%2C900%2C900italic%7CRoboto%20Slab%3A100%2C100italic%2C200%2C200italic%2C300%2C300italic%2C400%2C400italic%2C500%2C500italic%2C600%2C600italic%2C700%2C700italic%2C800%2C800italic%2C900%2C900italic%7CLato%3A100%2C100italic%2C200%2C200italic%2C300%2C300italic%2C400%2C400italic%2C500%2C500italic%2C600%2C600italic%2C700%2C700italic%2C800%2C800italic%2C900%2C900italic%7CNunito%3A100%2C100italic%2C200%2C200italic%2C300%2C300italic%2C400%2C400italic%2C500%2C500italic%2C600%2C600italic%2C700%2C700italic%2C800%2C800italic%2C900%2C900italic&#038;display=swap" media="print" onLoad="this.media='all'" />

        <link href='https://fonts.gstatic.com' crossOrigin="true" rel='preconnect' />
        <Meta />
        <Links />
      </head>
      <body>
        <div id="app">
          <Outlet />
        </div>

        <script async src="https://www.googletagmanager.com/gtag/js?id=G-S1MWV8T99P"></script>
        {/* <script>
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments)}
          gtag('js', new Date());

          gtag('config', 'G-S1MWV8T99P');
  </script>*/}


        <link rel='stylesheet' id='e-animations-css'
          href='./assets/features/wp-content/plugins/elementor/assets/lib/animations/animations.min.css' type='text/css'
          media='all' />

        <script
          data-section-id="navbar"
          src="https://unpkg.com/@teleporthq/teleport-custom-scripts"
        ></script>

        <script type="text/javascript" id="eael-general-js-extra"
          src="./assets/features/js/localize.jsx">
        </script>

        <script type="text/javascript"
          src="./assets/features/wp-content/plugins/essential-addons-for-elementor-lite/assets/front-end/js/view/general.min.jsx"
          id="eael-general-js"></script>
        <script type="text/javascript" src="./assets/features/wp-content/uploads/essential-addons-elementor/eael-1261.jsx"
          id="eael-1261-js"></script>
        <script type="text/javascript" src="./assets/features/wp-content/uploads/essential-addons-elementor/eael-1264.jsx"
          id="eael-1264-js"></script>
        <script type="text/javascript"
          src="./assets/features/wp-content/plugins/easyjobs/public/assets/vendor/owl.carousel.min.jsx"
          id="easyjobsowl-js"></script>
        <script type="text/javascript"
          src="./assets/features/wp-content/plugins/easyjobs/public/assets/dist/js/easyjobs-public.min.jsx"
          id="easyjobs-js"></script>

        <script type="text/javascript" id="rocket-browser-checker-js-after"
          src="./assets/features/js/RocketBrowserChecker.jsx">
        </script>
        <script type="text/javascript" id="rocket-preload-links-js-extra"
          src="./assets/features/js/RocketPreloadLinksConfig.jsx">
        </script>
        <script type="text/javascript" id="rocket-preload-links-js-after"
          src="./assets/features/js/RocketPreloadLinks.jsx">
        </script>
        <script type="text/javascript" id="flexia-navigation-js-extra"
          src="./assets/features/js/settings.jsx">
        </script>

        <script type="text/javascript"
          src="./assets/features/wp-content/themes/flexia/framework/assets/site/js/flexia-scripts.min.jsx?ver=6.4.2"
          id="flexia-navigation-js"></script>
        <script type="text/javascript"
          src="./assets/features/wp-content/uploads/essential-addons-elementor/eael-1272.jsx?ver=1629781368"
          id="eael-1272-js"></script>
        <script type="text/javascript"
          src="./assets/features/wp-content/plugins/elementor-pro/assets/js/webpack-pro.runtime.min.jsx?ver=3.18.3"
          id="elementor-pro-webpack-runtime-js"></script>
        <script type="text/javascript"
          src="./assets/features/wp-content/plugins/elementor/assets/js/webpack.runtime.min.jsx?ver=3.18.3"
          id="elementor-webpack-runtime-js"></script>
        <script type="text/javascript"
          src="./assets/features/wp-content/plugins/elementor/assets/js/frontend-modules.min.jsx?ver=3.18.3"
          id="elementor-frontend-modules-js"></script>
        <script type="text/javascript" src="./assets/features/wp-includes/js/dist/vendor/wp-polyfill-inert.min.jsx?ver=3.1.2"
          id="wp-polyfill-inert-js"></script>
        <script type="text/javascript" src="./assets/features/wp-includes/js/dist/vendor/regenerator-runtime.min.jsx"
          id="regenerator-runtime-js"></script>
        <script type="text/javascript" src="./assets/features/wp-includes/js/dist/vendor/wp-polyfill.min.jsx"
          id="wp-polyfill-js"></script>
        <script type="text/javascript" src="./assets/features/wp-includes/js/dist/hooks.min.jsx" id="wp-hooks-js"></script>
        <script type="text/javascript" src="./assets/features/wp-includes/js/dist/i18n.min.jsx" id="wp-i18n-js"></script>

        <script type="text/javascript" id="wp-i18n-js-after"
          src="./assets/features/js/i18n.jsx">
        </script>

        <script type="text/javascript" id="elementor-pro-frontend-js-before" src="./assets/features/js/ElementorProFrontendConfig.jsx">
        </script>
        <script type="text/javascript" src="./assets/features/wp-content/plugins/elementor-pro/assets/js/frontend.min.jsx"
          id="elementor-pro-frontend-js"></script>
        <script type="text/javascript" src="./assets/features/wp-content/plugins/elementor/assets/lib/waypoints/waypoints.min.jsx"
          id="elementor-waypoints-js"></script>
        <script type="text/javascript" src="./assets/features/wp-includes/js/jquery/ui/core.min.jsx"
          id="jquery-ui-core-js"></script>
        <script type="text/javascript" id="elementor-frontend-js-before"
          src="./assets/features/js/elementorFrontendConfig.jsx">
        </script>
        <script type="text/javascript" src="./assets/features/wp-content/plugins/elementor/assets/js/frontend.min.jsx"
          id="elementor-frontend-js"></script>
        <script type="text/javascript"
          src="./assets/features/wp-content/plugins/elementor-pro/assets/js/elements-handlers.min.jsx"
          id="pro-elements-handlers-js"></script>

        <Scripts />
        <Links />
        <LiveReload />
      </body>
    </html>
  );
}
