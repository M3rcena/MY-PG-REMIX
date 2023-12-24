var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
};

// node_modules/@remix-run/dev/dist/config/defaults/entry.server.node.tsx
var entry_server_node_exports = {};
__export(entry_server_node_exports, {
  default: () => handleRequest
});
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@remix-run/node";
import { RemixServer } from "@remix-run/react";
import isbot from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { jsxDEV } from "react/jsx-dev-runtime";
var ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext, loadContext) {
  return isbot(request.headers.get("user-agent")) ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsxDEV(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "node_modules/@remix-run/dev/dist/config/defaults/entry.server.node.tsx",
          lineNumber: 42,
          columnNumber: 7
        },
        this
      ),
      {
        onAllReady() {
          shellRendered = !0;
          let body = new PassThrough(), stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsxDEV(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "node_modules/@remix-run/dev/dist/config/defaults/entry.server.node.tsx",
          lineNumber: 92,
          columnNumber: 7
        },
        this
      ),
      {
        onShellReady() {
          shellRendered = !0;
          let body = new PassThrough(), stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.jsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links
});
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts
} from "@remix-run/react";
import "@remix-run/node";

// app/app.css
var app_default = "/build/_assets/app-4TXP3AG2.css";

// app/root.jsx
import { jsxDEV as jsxDEV2 } from "react/jsx-dev-runtime";
var links = () => [{ rel: "stylesheet", href: app_default }];
function App() {
  return /* @__PURE__ */ jsxDEV2("html", { lang: "en", children: [
    /* @__PURE__ */ jsxDEV2("head", { children: [
      /* @__PURE__ */ jsxDEV2("title", { children: "EPAL ALIMOU" }, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 21,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2("meta", { name: "viewport", content: "width=device-width, initial-scale=1.0" }, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 22,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2("meta", { charSet: "utf-8" }, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 23,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2("meta", { property: "twitter:card", content: "summary_large_image" }, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 24,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(
        "link",
        {
          rel: "icon",
          href: "data:image/x-icon;base64,AA"
        },
        void 0,
        !1,
        {
          fileName: "app/root.jsx",
          lineNumber: 25,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ jsxDEV2(
        "link",
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap",
          "data-tag": "font"
        },
        void 0,
        !1,
        {
          fileName: "app/root.jsx",
          lineNumber: 29,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ jsxDEV2(
        "link",
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap",
          "data-tag": "font"
        },
        void 0,
        !1,
        {
          fileName: "app/root.jsx",
          lineNumber: 34,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ jsxDEV2(
        "link",
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap",
          "data-tag": "font"
        },
        void 0,
        !1,
        {
          fileName: "app/root.jsx",
          lineNumber: 39,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ jsxDEV2(
        "link",
        {
          rel: "stylesheet",
          href: "https://unpkg.com/@teleporthq/teleport-custom-scripts/dist/style.css"
        },
        void 0,
        !1,
        {
          fileName: "app/root.jsx",
          lineNumber: 44,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ jsxDEV2(Meta, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 48,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(Links, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 49,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.jsx",
      lineNumber: 20,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV2("body", { children: [
      /* @__PURE__ */ jsxDEV2("div", { id: "app", children: /* @__PURE__ */ jsxDEV2(Outlet, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 53,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 52,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(
        "script",
        {
          "data-section-id": "navbar",
          src: "https://unpkg.com/@teleporthq/teleport-custom-scripts"
        },
        void 0,
        !1,
        {
          fileName: "app/root.jsx",
          lineNumber: 56,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ jsxDEV2(Scripts, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 60,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(LiveReload, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 61,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.jsx",
      lineNumber: 51,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.jsx",
    lineNumber: 19,
    columnNumber: 5
  }, this);
}

// app/routes/home.jsx
var home_exports = {};
__export(home_exports, {
  default: () => Home,
  links: () => links2
});
import "react";
import "@remix-run/react";
import { Helmet } from "react-helmet";
import "@remix-run/node";

// app/components/feature-card.jsx
import "react";
import "prop-types";
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
function FeatureCard({ Heading, SubHeading }) {
  return /* @__PURE__ */ jsxDEV3("div", { className: "feature-card-feature-card", children: [
    /* @__PURE__ */ jsxDEV3("svg", { viewBox: "0 0 1024 1024", className: "feature-card-icon", children: /* @__PURE__ */ jsxDEV3("path", { d: "M809.003 291.328l-297.003 171.819-297.003-171.819 275.456-157.397c4.779-2.731 9.899-4.48 15.147-5.333 9.301-1.451 18.987 0.128 27.904 5.291zM491.776 979.669c6.016 3.243 12.928 5.077 20.224 5.077 7.381 0 14.336-1.877 20.395-5.163 15.189-2.475 29.909-7.68 43.392-15.36l298.709-170.709c26.368-15.232 45.269-38.315 55.424-64.597 5.675-14.592 8.619-30.165 8.747-46.251v-341.333c0-20.395-4.821-39.723-13.397-56.917-0.939-3.029-2.219-5.973-3.883-8.832-1.963-3.371-4.267-6.357-6.912-8.96-1.323-1.835-2.731-3.669-4.139-5.419-9.813-12.203-21.845-22.528-35.456-30.507l-299.051-170.88c-26.027-15.019-55.467-19.84-83.328-15.531-15.531 2.432-30.507 7.637-44.288 15.488l-298.709 170.709c-16.341 9.429-29.824 21.888-40.149 36.267-2.56 2.56-4.864 5.547-6.784 8.832-1.664 2.901-2.987 5.888-3.925 8.96-1.707 3.456-3.243 6.955-4.608 10.496-5.632 14.635-8.576 30.208-8.704 45.995v341.632c0.043 30.293 10.581 58.197 28.331 80.128 9.813 12.203 21.845 22.528 35.456 30.507l299.051 170.88c13.824 7.979 28.587 13.099 43.605 15.445zM469.333 537.045v340.949l-277.12-158.336c-4.736-2.773-8.832-6.315-12.16-10.411-5.931-7.381-9.387-16.512-9.387-26.581v-318.379zM554.667 877.995v-340.949l298.667-172.757v318.379c-0.043 5.163-1.067 10.496-2.987 15.445-3.413 8.789-9.6 16.384-18.176 21.333z" }, void 0, !1, {
      fileName: "app/components/feature-card.jsx",
      lineNumber: 15,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/feature-card.jsx",
      lineNumber: 14,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV3("div", { className: "feature-card-container", children: [
      /* @__PURE__ */ jsxDEV3("h3", { className: "feature-card-text heading3", children: Heading }, void 0, !1, {
        fileName: "app/components/feature-card.jsx",
        lineNumber: 18,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV3("span", { className: "feature-card-text1", children: SubHeading }, void 0, !1, {
        fileName: "app/components/feature-card.jsx",
        lineNumber: 19,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/feature-card.jsx",
      lineNumber: 17,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/feature-card.jsx",
    lineNumber: 13,
    columnNumber: 5
  }, this);
}

// app/components/question.jsx
import "react";
import "prop-types";
import { jsxDEV as jsxDEV4 } from "react/jsx-dev-runtime";
function Question({ Question: Question2, Answer }) {
  return /* @__PURE__ */ jsxDEV4("div", { className: "question-container", children: [
    /* @__PURE__ */ jsxDEV4("span", { className: "question-text heading4", children: Question2 }, void 0, !1, {
      fileName: "app/components/question.jsx",
      lineNumber: 14,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV4("span", { className: "question-text1", children: Answer }, void 0, !1, {
      fileName: "app/components/question.jsx",
      lineNumber: 15,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/question.jsx",
    lineNumber: 13,
    columnNumber: 5
  }, this);
}

// app/styles/home.css
var home_default = "/build/_assets/home-7BPU35HF.css";

// app/routes/home.jsx
import { Fragment, jsxDEV as jsxDEV5 } from "react/jsx-dev-runtime";
var links2 = () => [{ rel: "stylesheet", href: home_default }];
function Home() {
  return /* @__PURE__ */ jsxDEV5(Fragment, { children: /* @__PURE__ */ jsxDEV5("div", { className: "home-container", children: [
    /* @__PURE__ */ jsxDEV5(Helmet, { children: [
      /* @__PURE__ */ jsxDEV5("title", { children: "EPAL ALIMOU" }, void 0, !1, {
        fileName: "app/routes/home.jsx",
        lineNumber: 21,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV5("meta", { property: "og:title", content: "EPAL ALIMOU" }, void 0, !1, {
        fileName: "app/routes/home.jsx",
        lineNumber: 22,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/home.jsx",
      lineNumber: 20,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV5("div", { className: "home-header", children: /* @__PURE__ */ jsxDEV5("header", { "data-thq": "thq-navbar", className: "home-navbar-interactive", children: [
      /* @__PURE__ */ jsxDEV5("span", { className: "home-logo", children: "MY PG" }, void 0, !1, {
        fileName: "app/routes/home.jsx",
        lineNumber: 26,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV5("div", { "data-thq": "thq-navbar-nav", className: "home-desktop-menu", children: [
        /* @__PURE__ */ jsxDEV5("nav", { className: "home-links", children: [
          /* @__PURE__ */ jsxDEV5("span", { children: "Home" }, void 0, !1, {
            fileName: "app/routes/home.jsx",
            lineNumber: 29,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV5("span", { className: "home-nav2", children: "About" }, void 0, !1, {
            fileName: "app/routes/home.jsx",
            lineNumber: 30,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV5("span", { className: "home-nav3", children: "Features" }, void 0, !1, {
            fileName: "app/routes/home.jsx",
            lineNumber: 31,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV5("span", { className: "home-nav4", children: "Parties" }, void 0, !1, {
            fileName: "app/routes/home.jsx",
            lineNumber: 32,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV5("span", { className: "home-nav5", children: "Discounts" }, void 0, !1, {
            fileName: "app/routes/home.jsx",
            lineNumber: 33,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/home.jsx",
          lineNumber: 28,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV5("div", { className: "home-buttons", children: [
          /* @__PURE__ */ jsxDEV5("button", { className: "home-login button", children: "Login" }, void 0, !1, {
            fileName: "app/routes/home.jsx",
            lineNumber: 36,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV5("button", { className: "home-register button", children: "Register" }, void 0, !1, {
            fileName: "app/routes/home.jsx",
            lineNumber: 37,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/home.jsx",
          lineNumber: 35,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/home.jsx",
        lineNumber: 27,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV5("div", { "data-thq": "thq-burger-menu", className: "home-burger-menu", children: /* @__PURE__ */ jsxDEV5("svg", { viewBox: "0 0 1024 1024", className: "home-icon", children: /* @__PURE__ */ jsxDEV5("path", { d: "M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z" }, void 0, !1, {
        fileName: "app/routes/home.jsx",
        lineNumber: 42,
        columnNumber: 15
      }, this) }, void 0, !1, {
        fileName: "app/routes/home.jsx",
        lineNumber: 41,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/home.jsx",
        lineNumber: 40,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV5("div", { "data-thq": "thq-mobile-menu", className: "home-mobile-menu", children: [
        /* @__PURE__ */ jsxDEV5("div", { className: "home-nav", children: [
          /* @__PURE__ */ jsxDEV5("div", { className: "home-top", children: [
            /* @__PURE__ */ jsxDEV5("span", { className: "home-logo1", children: "MAPSTER" }, void 0, !1, {
              fileName: "app/routes/home.jsx",
              lineNumber: 48,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV5("div", { "data-thq": "thq-close-menu", className: "home-close-menu", children: /* @__PURE__ */ jsxDEV5("svg", { viewBox: "0 0 1024 1024", className: "home-icon02", children: /* @__PURE__ */ jsxDEV5("path", { d: "M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z" }, void 0, !1, {
              fileName: "app/routes/home.jsx",
              lineNumber: 51,
              columnNumber: 21
            }, this) }, void 0, !1, {
              fileName: "app/routes/home.jsx",
              lineNumber: 50,
              columnNumber: 19
            }, this) }, void 0, !1, {
              fileName: "app/routes/home.jsx",
              lineNumber: 49,
              columnNumber: 17
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/home.jsx",
            lineNumber: 47,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV5("nav", { className: "home-links1", children: [
            /* @__PURE__ */ jsxDEV5("span", { className: "home-nav11", children: "Home" }, void 0, !1, {
              fileName: "app/routes/home.jsx",
              lineNumber: 56,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV5("span", { className: "home-nav21", children: "About" }, void 0, !1, {
              fileName: "app/routes/home.jsx",
              lineNumber: 57,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV5("span", { className: "home-nav31", children: "Features" }, void 0, !1, {
              fileName: "app/routes/home.jsx",
              lineNumber: 58,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV5("span", { className: "home-nav41", children: "Parties" }, void 0, !1, {
              fileName: "app/routes/home.jsx",
              lineNumber: 59,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV5("span", { className: "home-nav51", children: "Discounts" }, void 0, !1, {
              fileName: "app/routes/home.jsx",
              lineNumber: 60,
              columnNumber: 17
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/home.jsx",
            lineNumber: 55,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV5("div", { className: "home-buttons1", children: [
            /* @__PURE__ */ jsxDEV5("button", { className: "home-login1 button", children: "Login" }, void 0, !1, {
              fileName: "app/routes/home.jsx",
              lineNumber: 63,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV5("button", { className: "home-register1 button", children: "Register" }, void 0, !1, {
              fileName: "app/routes/home.jsx",
              lineNumber: 64,
              columnNumber: 17
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/home.jsx",
            lineNumber: 62,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/home.jsx",
          lineNumber: 46,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV5("div", { children: [
          /* @__PURE__ */ jsxDEV5("svg", { viewBox: "0 0 950.8571428571428 1024", className: "home-icon04", children: /* @__PURE__ */ jsxDEV5("path", { d: "M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z" }, void 0, !1, {
            fileName: "app/routes/home.jsx",
            lineNumber: 69,
            columnNumber: 17
          }, this) }, void 0, !1, {
            fileName: "app/routes/home.jsx",
            lineNumber: 68,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV5("svg", { viewBox: "0 0 877.7142857142857 1024", className: "home-icon06", children: /* @__PURE__ */ jsxDEV5("path", { d: "M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z" }, void 0, !1, {
            fileName: "app/routes/home.jsx",
            lineNumber: 72,
            columnNumber: 17
          }, this) }, void 0, !1, {
            fileName: "app/routes/home.jsx",
            lineNumber: 71,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV5("svg", { viewBox: "0 0 602.2582857142856 1024", className: "home-icon08", children: /* @__PURE__ */ jsxDEV5("path", { d: "M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z" }, void 0, !1, {
            fileName: "app/routes/home.jsx",
            lineNumber: 75,
            columnNumber: 17
          }, this) }, void 0, !1, {
            fileName: "app/routes/home.jsx",
            lineNumber: 74,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/home.jsx",
          lineNumber: 67,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/home.jsx",
        lineNumber: 45,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/home.jsx",
      lineNumber: 25,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/home.jsx",
      lineNumber: 24,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV5("div", { className: "home-hero", children: /* @__PURE__ */ jsxDEV5("div", { className: "home-hero1", children: /* @__PURE__ */ jsxDEV5("div", { className: "home-container01", children: [
      /* @__PURE__ */ jsxDEV5("h1", { className: "home-hero-heading heading1", children: "Discover the Best Parks and Stores" }, void 0, !1, {
        fileName: "app/routes/home.jsx",
        lineNumber: 84,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV5("span", { className: "home-hero-sub-heading", children: "Explore your city with our interactive map" }, void 0, !1, {
        fileName: "app/routes/home.jsx",
        lineNumber: 87,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV5("div", { className: "home-btn-group", children: [
        /* @__PURE__ */ jsxDEV5("button", { className: "home-hero-button1 button", children: "Get Started" }, void 0, !1, {
          fileName: "app/routes/home.jsx",
          lineNumber: 91,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV5("button", { className: "home-hero-button2 button", children: "Learn More\xA0\u2192" }, void 0, !1, {
          fileName: "app/routes/home.jsx",
          lineNumber: 92,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/home.jsx",
        lineNumber: 90,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/home.jsx",
      lineNumber: 83,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/home.jsx",
      lineNumber: 82,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/home.jsx",
      lineNumber: 81,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV5("div", { className: "home-details", children: /* @__PURE__ */ jsxDEV5("div", { className: "home-details1", children: [
      /* @__PURE__ */ jsxDEV5("div", { className: "home-container02", children: [
        /* @__PURE__ */ jsxDEV5("span", { className: "home-text sectionTitle", children: [
          /* @__PURE__ */ jsxDEV5("span", { children: "Details" }, void 0, !1, {
            fileName: "app/routes/home.jsx",
            lineNumber: 101,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV5("br", {}, void 0, !1, {
            fileName: "app/routes/home.jsx",
            lineNumber: 102,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/home.jsx",
          lineNumber: 100,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV5("h2", { className: "home-details-heading heading2", children: "Welcome to our Professional Website" }, void 0, !1, {
          fileName: "app/routes/home.jsx",
          lineNumber: 104,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV5("span", { className: "home-details-sub-heading", children: "Our website provides detailed information about parks, stores, and more. Register now to enjoy exclusive discounts and other perks. With our party system, you can easily organize parties at parks and other locations. Join us today!" }, void 0, !1, {
          fileName: "app/routes/home.jsx",
          lineNumber: 107,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/home.jsx",
        lineNumber: 99,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV5(
        "img",
        {
          alt: "image",
          src: "https://images.unsplash.com/photo-1603623898160-a611b90151ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY5OTQ2MzA2NXw&ixlib=rb-4.0.3&q=80&w=400",
          className: "home-details-image"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/home.jsx",
          lineNumber: 114,
          columnNumber: 11
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/routes/home.jsx",
      lineNumber: 98,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/home.jsx",
      lineNumber: 97,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV5("div", { className: "home-features", children: /* @__PURE__ */ jsxDEV5("div", { className: "home-features-container", children: /* @__PURE__ */ jsxDEV5("div", { className: "home-features1", children: [
      /* @__PURE__ */ jsxDEV5("div", { className: "home-container03", children: [
        /* @__PURE__ */ jsxDEV5("span", { className: "home-text03 sectionTitle", children: [
          /* @__PURE__ */ jsxDEV5("span", { children: "features" }, void 0, !1, {
            fileName: "app/routes/home.jsx",
            lineNumber: 126,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV5("br", {}, void 0, !1, {
            fileName: "app/routes/home.jsx",
            lineNumber: 127,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/home.jsx",
          lineNumber: 125,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV5("h2", { className: "home-features-heading heading2", children: "Explore the Exciting Features" }, void 0, !1, {
          fileName: "app/routes/home.jsx",
          lineNumber: 129,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV5("span", { className: "home-features-sub-heading", children: "Discover how our professional website can enhance your park experiences and make party planning a breeze." }, void 0, !1, {
          fileName: "app/routes/home.jsx",
          lineNumber: 132,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/home.jsx",
        lineNumber: 124,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV5("div", { className: "home-container04", children: [
        /* @__PURE__ */ jsxDEV5(
          FeatureCard,
          {
            Heading: "Interactive Map",
            SubHeading: "Easily locate parks, stores, and other points of interest with our interactive map feature."
          },
          void 0,
          !1,
          {
            fileName: "app/routes/home.jsx",
            lineNumber: 138,
            columnNumber: 15
          },
          this
        ),
        /* @__PURE__ */ jsxDEV5(
          FeatureCard,
          {
            Heading: "Member Discounts",
            SubHeading: "Enjoy exclusive discounts and special offers from our partner establishments when you register as a member."
          },
          void 0,
          !1,
          {
            fileName: "app/routes/home.jsx",
            lineNumber: 142,
            columnNumber: 15
          },
          this
        ),
        /* @__PURE__ */ jsxDEV5(
          FeatureCard,
          {
            Heading: "Party Organization",
            SubHeading: "Effortlessly plan and organize parties at parks and other venues with our convenient party system."
          },
          void 0,
          !1,
          {
            fileName: "app/routes/home.jsx",
            lineNumber: 146,
            columnNumber: 15
          },
          this
        ),
        /* @__PURE__ */ jsxDEV5(
          FeatureCard,
          {
            Heading: "Lorem ipsum",
            SubHeading: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lorem lorem, malesuada in metus vitae, scelerisque accumsan ipsum."
          },
          void 0,
          !1,
          {
            fileName: "app/routes/home.jsx",
            lineNumber: 150,
            columnNumber: 15
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/home.jsx",
        lineNumber: 137,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/home.jsx",
      lineNumber: 123,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/home.jsx",
      lineNumber: 122,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/home.jsx",
      lineNumber: 121,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV5("div", { className: "home-pricing", children: /* @__PURE__ */ jsxDEV5("div", { className: "home-pricing1", children: [
      /* @__PURE__ */ jsxDEV5("div", { className: "home-container05", children: [
        /* @__PURE__ */ jsxDEV5("span", { className: "home-text06 sectionTitle", children: [
          /* @__PURE__ */ jsxDEV5("span", { children: "Pricing" }, void 0, !1, {
            fileName: "app/routes/home.jsx",
            lineNumber: 162,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV5("br", {}, void 0, !1, {
            fileName: "app/routes/home.jsx",
            lineNumber: 163,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/home.jsx",
          lineNumber: 161,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV5("h2", { className: "home-pricing-heading heading2", children: "Choose Your Plan" }, void 0, !1, {
          fileName: "app/routes/home.jsx",
          lineNumber: 165,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV5("span", { className: "home-pricing-sub-heading", children: "Select the perfect plan for your needs" }, void 0, !1, {
          fileName: "app/routes/home.jsx",
          lineNumber: 166,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/home.jsx",
        lineNumber: 160,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV5("div", { className: "home-container06", children: [
        /* @__PURE__ */ jsxDEV5("div", { className: "home-pricing-card", children: [
          /* @__PURE__ */ jsxDEV5("div", { className: "home-container07", children: [
            /* @__PURE__ */ jsxDEV5("span", { className: "home-text09 heading3", children: "Free" }, void 0, !1, {
              fileName: "app/routes/home.jsx",
              lineNumber: 173,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV5("span", { className: "home-free-plan-description", children: "Access basic features of the website for free" }, void 0, !1, {
              fileName: "app/routes/home.jsx",
              lineNumber: 174,
              columnNumber: 17
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/home.jsx",
            lineNumber: 172,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV5("div", { className: "home-container08", children: [
            /* @__PURE__ */ jsxDEV5("span", { className: "home-text10", children: [
              /* @__PURE__ */ jsxDEV5("span", { children: "$" }, void 0, !1, {
                fileName: "app/routes/home.jsx",
                lineNumber: 180,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV5("span", {}, void 0, !1, {
                fileName: "app/routes/home.jsx",
                lineNumber: 181,
                columnNumber: 19
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/home.jsx",
              lineNumber: 179,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV5("span", { className: "home-free-plan-price", children: "0" }, void 0, !1, {
              fileName: "app/routes/home.jsx",
              lineNumber: 183,
              columnNumber: 17
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/home.jsx",
            lineNumber: 178,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV5("div", { className: "home-container09", children: [
            /* @__PURE__ */ jsxDEV5("div", { className: "home-container10", children: [
              /* @__PURE__ */ jsxDEV5("span", { className: "home-text13", children: "\u2714" }, void 0, !1, {
                fileName: "app/routes/home.jsx",
                lineNumber: 187,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV5("span", { className: "home-free-plan-features", children: "View information about parks, stores, and other locations" }, void 0, !1, {
                fileName: "app/routes/home.jsx",
                lineNumber: 188,
                columnNumber: 19
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/home.jsx",
              lineNumber: 186,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV5("div", { className: "home-container11", children: [
              /* @__PURE__ */ jsxDEV5("span", { className: "home-text14", children: "\u2714" }, void 0, !1, {
                fileName: "app/routes/home.jsx",
                lineNumber: 193,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV5("span", { className: "home-free-plan-features1", children: "Receive discounts and special offers when registered" }, void 0, !1, {
                fileName: "app/routes/home.jsx",
                lineNumber: 194,
                columnNumber: 19
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/home.jsx",
              lineNumber: 192,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV5("div", { className: "home-container12", children: [
              /* @__PURE__ */ jsxDEV5("span", { className: "home-text15", children: "\u2714" }, void 0, !1, {
                fileName: "app/routes/home.jsx",
                lineNumber: 199,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV5("span", { className: "home-free-plan-features2", children: "Organize parties at parks and other venues" }, void 0, !1, {
                fileName: "app/routes/home.jsx",
                lineNumber: 200,
                columnNumber: 19
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/home.jsx",
              lineNumber: 198,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV5("div", { className: "home-container13", children: [
              /* @__PURE__ */ jsxDEV5("span", { className: "home-text16", children: "\u2714" }, void 0, !1, {
                fileName: "app/routes/home.jsx",
                lineNumber: 205,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV5("span", { className: "home-free-plan-features3", children: "Limited access to party system" }, void 0, !1, {
                fileName: "app/routes/home.jsx",
                lineNumber: 206,
                columnNumber: 19
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/home.jsx",
              lineNumber: 204,
              columnNumber: 17
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/home.jsx",
            lineNumber: 185,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV5("button", { className: "home-button button", children: "Continue with Free" }, void 0, !1, {
            fileName: "app/routes/home.jsx",
            lineNumber: 211,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/home.jsx",
          lineNumber: 171,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV5("div", { className: "home-pricing-card1", children: [
          /* @__PURE__ */ jsxDEV5("div", { className: "home-container14", children: [
            /* @__PURE__ */ jsxDEV5("span", { className: "home-text17 heading3", children: "BASIC" }, void 0, !1, {
              fileName: "app/routes/home.jsx",
              lineNumber: 215,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV5("span", { className: "home-basic-plan-description", children: "Unlock additional features and benefits with the basic plan" }, void 0, !1, {
              fileName: "app/routes/home.jsx",
              lineNumber: 216,
              columnNumber: 17
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/home.jsx",
            lineNumber: 214,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV5("div", { className: "home-container15", children: [
            /* @__PURE__ */ jsxDEV5("span", { className: "home-text18", children: [
              /* @__PURE__ */ jsxDEV5("span", { children: "$" }, void 0, !1, {
                fileName: "app/routes/home.jsx",
                lineNumber: 222,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV5("span", {}, void 0, !1, {
                fileName: "app/routes/home.jsx",
                lineNumber: 223,
                columnNumber: 19
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/home.jsx",
              lineNumber: 221,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV5("span", { className: "home-basic-plan-pricing", children: "7" }, void 0, !1, {
              fileName: "app/routes/home.jsx",
              lineNumber: 225,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV5("span", { className: "home-text21", children: "/ month" }, void 0, !1, {
              fileName: "app/routes/home.jsx",
              lineNumber: 226,
              columnNumber: 17
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/home.jsx",
            lineNumber: 220,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV5("div", { className: "home-container16", children: [
            /* @__PURE__ */ jsxDEV5("div", { className: "home-container17", children: [
              /* @__PURE__ */ jsxDEV5("span", { className: "home-text22", children: "\u2714" }, void 0, !1, {
                fileName: "app/routes/home.jsx",
                lineNumber: 230,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV5("span", { className: "home-text23", children: "All features of FREE plan" }, void 0, !1, {
                fileName: "app/routes/home.jsx",
                lineNumber: 231,
                columnNumber: 19
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/home.jsx",
              lineNumber: 229,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV5("div", { className: "home-container18", children: [
              /* @__PURE__ */ jsxDEV5("span", { className: "home-text24", children: "\u2714" }, void 0, !1, {
                fileName: "app/routes/home.jsx",
                lineNumber: 234,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV5("span", { className: "home-basic-plan-features", children: "All features of the Free Plan" }, void 0, !1, {
                fileName: "app/routes/home.jsx",
                lineNumber: 235,
                columnNumber: 19
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/home.jsx",
              lineNumber: 233,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV5("div", { className: "home-container19", children: [
              /* @__PURE__ */ jsxDEV5("span", { className: "home-text25", children: "\u2714" }, void 0, !1, {
                fileName: "app/routes/home.jsx",
                lineNumber: 240,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV5("span", { className: "home-basic-plan-features1", children: "Access to premium information about parks, stores, and other locations" }, void 0, !1, {
                fileName: "app/routes/home.jsx",
                lineNumber: 241,
                columnNumber: 19
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/home.jsx",
              lineNumber: 239,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV5("div", { className: "home-container20", children: [
              /* @__PURE__ */ jsxDEV5("span", { className: "home-text26", children: "\u2714" }, void 0, !1, {
                fileName: "app/routes/home.jsx",
                lineNumber: 247,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV5("span", { className: "home-basic-plan-features2", children: "Enhanced discounts and exclusive offers for registered members" }, void 0, !1, {
                fileName: "app/routes/home.jsx",
                lineNumber: 248,
                columnNumber: 19
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/home.jsx",
              lineNumber: 246,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV5("div", { className: "home-container21", children: [
              /* @__PURE__ */ jsxDEV5("span", { className: "home-text27", children: "\u2714" }, void 0, !1, {
                fileName: "app/routes/home.jsx",
                lineNumber: 254,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV5("span", { className: "home-basic-plan-features3", children: "Full access to party system with advanced party organization tools" }, void 0, !1, {
                fileName: "app/routes/home.jsx",
                lineNumber: 255,
                columnNumber: 19
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/home.jsx",
              lineNumber: 253,
              columnNumber: 17
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/home.jsx",
            lineNumber: 228,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV5("button", { className: "home-button1 button", children: "Try the Basic plan" }, void 0, !1, {
            fileName: "app/routes/home.jsx",
            lineNumber: 261,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/home.jsx",
          lineNumber: 213,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV5("div", { className: "home-pricing-card2", children: [
          /* @__PURE__ */ jsxDEV5("div", { className: "home-container22", children: [
            /* @__PURE__ */ jsxDEV5("span", { className: "home-text28 heading3", children: [
              /* @__PURE__ */ jsxDEV5("span", { children: "PRO" }, void 0, !1, {
                fileName: "app/routes/home.jsx",
                lineNumber: 268,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV5("br", {}, void 0, !1, {
                fileName: "app/routes/home.jsx",
                lineNumber: 269,
                columnNumber: 19
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/home.jsx",
              lineNumber: 267,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV5("span", { className: "home-pro-plan-description", children: "Get the ultimate experience with the pro plan" }, void 0, !1, {
              fileName: "app/routes/home.jsx",
              lineNumber: 271,
              columnNumber: 17
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/home.jsx",
            lineNumber: 266,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV5("div", { className: "home-container23", children: [
            /* @__PURE__ */ jsxDEV5("span", { className: "home-text31", children: [
              /* @__PURE__ */ jsxDEV5("span", { children: "$" }, void 0, !1, {
                fileName: "app/routes/home.jsx",
                lineNumber: 277,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV5("span", {}, void 0, !1, {
                fileName: "app/routes/home.jsx",
                lineNumber: 278,
                columnNumber: 19
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/home.jsx",
              lineNumber: 276,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV5("span", { className: "home-pro-plan-pricing", children: "20" }, void 0, !1, {
              fileName: "app/routes/home.jsx",
              lineNumber: 280,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV5("span", { className: "home-text34", children: "/ month" }, void 0, !1, {
              fileName: "app/routes/home.jsx",
              lineNumber: 281,
              columnNumber: 17
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/home.jsx",
            lineNumber: 275,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV5("div", { className: "home-container24", children: [
            /* @__PURE__ */ jsxDEV5("div", { className: "home-container25", children: [
              /* @__PURE__ */ jsxDEV5("span", { className: "home-text35", children: "\u2714" }, void 0, !1, {
                fileName: "app/routes/home.jsx",
                lineNumber: 285,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV5("span", { className: "home-text36", children: "All features of BASIC plan" }, void 0, !1, {
                fileName: "app/routes/home.jsx",
                lineNumber: 286,
                columnNumber: 19
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/home.jsx",
              lineNumber: 284,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV5("div", { className: "home-container26", children: [
              /* @__PURE__ */ jsxDEV5("span", { className: "home-text37", children: "\u2714" }, void 0, !1, {
                fileName: "app/routes/home.jsx",
                lineNumber: 291,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV5("span", { className: "home-pro-plan-features", children: "All features of the Basic Plan" }, void 0, !1, {
                fileName: "app/routes/home.jsx",
                lineNumber: 292,
                columnNumber: 19
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/home.jsx",
              lineNumber: 290,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV5("div", { className: "home-container27", children: [
              /* @__PURE__ */ jsxDEV5("span", { className: "home-text38", children: "\u2714" }, void 0, !1, {
                fileName: "app/routes/home.jsx",
                lineNumber: 297,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV5("span", { className: "home-pro-plan-features1", children: "Priority access to new park and store information" }, void 0, !1, {
                fileName: "app/routes/home.jsx",
                lineNumber: 298,
                columnNumber: 19
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/home.jsx",
              lineNumber: 296,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV5("div", { className: "home-container28", children: [
              /* @__PURE__ */ jsxDEV5("span", { className: "home-text39", children: "\u2714" }, void 0, !1, {
                fileName: "app/routes/home.jsx",
                lineNumber: 303,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV5("span", { className: "home-pro-plan-features2", children: "VIP discounts and exclusive perks for registered members" }, void 0, !1, {
                fileName: "app/routes/home.jsx",
                lineNumber: 304,
                columnNumber: 19
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/home.jsx",
              lineNumber: 302,
              columnNumber: 17
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/home.jsx",
            lineNumber: 283,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV5("button", { className: "home-button2 button", children: "Try the PRO plan" }, void 0, !1, {
            fileName: "app/routes/home.jsx",
            lineNumber: 309,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/home.jsx",
          lineNumber: 265,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/home.jsx",
        lineNumber: 170,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/home.jsx",
      lineNumber: 159,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/home.jsx",
      lineNumber: 158,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV5("div", { className: "home-gallery" }, void 0, !1, {
      fileName: "app/routes/home.jsx",
      lineNumber: 314,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV5("div", { className: "home-banner", children: /* @__PURE__ */ jsxDEV5("div", { className: "home-banner1", children: [
      /* @__PURE__ */ jsxDEV5("h1", { className: "home-banner-heading heading2", children: "Unlock Discounts and Party Opportunities" }, void 0, !1, {
        fileName: "app/routes/home.jsx",
        lineNumber: 317,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV5("span", { className: "home-banner-sub-heading", children: "Get access to special offers and easily organize parties at parks" }, void 0, !1, {
        fileName: "app/routes/home.jsx",
        lineNumber: 320,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV5("button", { className: "home-banner-button button", children: "Learn more" }, void 0, !1, {
        fileName: "app/routes/home.jsx",
        lineNumber: 323,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/home.jsx",
      lineNumber: 316,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/home.jsx",
      lineNumber: 315,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV5("div", { className: "home-faq", children: /* @__PURE__ */ jsxDEV5("div", { className: "home-faq-container", children: /* @__PURE__ */ jsxDEV5("div", { className: "home-faq1", children: [
      /* @__PURE__ */ jsxDEV5("div", { className: "home-container29", children: [
        /* @__PURE__ */ jsxDEV5("span", { className: "home-text40 sectionTitle", children: [
          /* @__PURE__ */ jsxDEV5("span", { children: "FAQ" }, void 0, !1, {
            fileName: "app/routes/home.jsx",
            lineNumber: 331,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV5("br", {}, void 0, !1, {
            fileName: "app/routes/home.jsx",
            lineNumber: 332,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/home.jsx",
          lineNumber: 330,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV5("h2", { className: "home-text43 heading2", children: "Common questions" }, void 0, !1, {
          fileName: "app/routes/home.jsx",
          lineNumber: 334,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV5("span", { className: "home-text44", children: [
          /* @__PURE__ */ jsxDEV5("span", { children: "Here are some of the most common questions that we get." }, void 0, !1, {
            fileName: "app/routes/home.jsx",
            lineNumber: 336,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV5("br", {}, void 0, !1, {
            fileName: "app/routes/home.jsx",
            lineNumber: 339,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV5("span", { children: [
            /* @__PURE__ */ jsxDEV5("span", { children: [
              /* @__PURE__ */ jsxDEV5("span", { children: /* @__PURE__ */ jsxDEV5(
                "span",
                {
                  dangerouslySetInnerHTML: {
                    __html: " "
                  }
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/home.jsx",
                  lineNumber: 343,
                  columnNumber: 23
                },
                this
              ) }, void 0, !1, {
                fileName: "app/routes/home.jsx",
                lineNumber: 342,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV5("span", { children: /* @__PURE__ */ jsxDEV5(
                "span",
                {
                  dangerouslySetInnerHTML: {
                    __html: " "
                  }
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/home.jsx",
                  lineNumber: 350,
                  columnNumber: 23
                },
                this
              ) }, void 0, !1, {
                fileName: "app/routes/home.jsx",
                lineNumber: 349,
                columnNumber: 21
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/home.jsx",
              lineNumber: 341,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV5("span", { children: [
              /* @__PURE__ */ jsxDEV5("span", { children: /* @__PURE__ */ jsxDEV5(
                "span",
                {
                  dangerouslySetInnerHTML: {
                    __html: " "
                  }
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/home.jsx",
                  lineNumber: 359,
                  columnNumber: 23
                },
                this
              ) }, void 0, !1, {
                fileName: "app/routes/home.jsx",
                lineNumber: 358,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV5("span", { children: /* @__PURE__ */ jsxDEV5(
                "span",
                {
                  dangerouslySetInnerHTML: {
                    __html: " "
                  }
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/home.jsx",
                  lineNumber: 366,
                  columnNumber: 23
                },
                this
              ) }, void 0, !1, {
                fileName: "app/routes/home.jsx",
                lineNumber: 365,
                columnNumber: 21
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/home.jsx",
              lineNumber: 357,
              columnNumber: 19
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/home.jsx",
            lineNumber: 340,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV5("span", { children: [
            /* @__PURE__ */ jsxDEV5("span", { children: [
              /* @__PURE__ */ jsxDEV5("span", { children: /* @__PURE__ */ jsxDEV5(
                "span",
                {
                  dangerouslySetInnerHTML: {
                    __html: " "
                  }
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/home.jsx",
                  lineNumber: 377,
                  columnNumber: 23
                },
                this
              ) }, void 0, !1, {
                fileName: "app/routes/home.jsx",
                lineNumber: 376,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV5("span", { children: /* @__PURE__ */ jsxDEV5(
                "span",
                {
                  dangerouslySetInnerHTML: {
                    __html: " "
                  }
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/home.jsx",
                  lineNumber: 384,
                  columnNumber: 23
                },
                this
              ) }, void 0, !1, {
                fileName: "app/routes/home.jsx",
                lineNumber: 383,
                columnNumber: 21
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/home.jsx",
              lineNumber: 375,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV5("span", { children: [
              /* @__PURE__ */ jsxDEV5("span", { children: /* @__PURE__ */ jsxDEV5(
                "span",
                {
                  dangerouslySetInnerHTML: {
                    __html: " "
                  }
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/home.jsx",
                  lineNumber: 393,
                  columnNumber: 23
                },
                this
              ) }, void 0, !1, {
                fileName: "app/routes/home.jsx",
                lineNumber: 392,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV5("span", { children: /* @__PURE__ */ jsxDEV5(
                "span",
                {
                  dangerouslySetInnerHTML: {
                    __html: " "
                  }
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/home.jsx",
                  lineNumber: 400,
                  columnNumber: 23
                },
                this
              ) }, void 0, !1, {
                fileName: "app/routes/home.jsx",
                lineNumber: 399,
                columnNumber: 21
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/home.jsx",
              lineNumber: 391,
              columnNumber: 19
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/home.jsx",
            lineNumber: 374,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/home.jsx",
          lineNumber: 335,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/home.jsx",
        lineNumber: 329,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV5("div", { className: "home-container30", children: [
        /* @__PURE__ */ jsxDEV5(
          Question,
          {
            Answer: "The purpose of this website is to provide information about parks, stores, and other locations, as well as offer discounts and benefits to registered members.",
            Question: "What is the purpose of this website?"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/home.jsx",
            lineNumber: 411,
            columnNumber: 15
          },
          this
        ),
        /* @__PURE__ */ jsxDEV5(
          Question,
          {
            Answer: "The map will display information about parks, stores, and other points of interest. Users can easily find details such as location, opening hours, and user reviews.",
            Question: "What kind of information will be available on the map?"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/home.jsx",
            lineNumber: 415,
            columnNumber: 15
          },
          this
        ),
        /* @__PURE__ */ jsxDEV5(
          Question,
          {
            Answer: "To register as a member, simply click on the 'Register' button on the website and fill out the required information. Once registered, you will be able to access discounts and other benefits.",
            Question: "How can I register as a member?"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/home.jsx",
            lineNumber: 419,
            columnNumber: 15
          },
          this
        ),
        /* @__PURE__ */ jsxDEV5(
          Question,
          {
            Answer: "Members will have access to exclusive discounts at participating stores and venues. Additionally, they can enjoy special offers for organizing parties at parks and other locations.",
            Question: "What discounts and benefits are available for members?"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/home.jsx",
            lineNumber: 423,
            columnNumber: 15
          },
          this
        ),
        /* @__PURE__ */ jsxDEV5(
          Question,
          {
            Answer: "Our website provides a party system that allows you to easily organize parties at parks and other locations. Simply select the desired location, choose a date and time, and invite your friends. You can also customize party details such as themes and activities.",
            Question: "How can I organize a party at a park or other location?"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/home.jsx",
            lineNumber: 427,
            columnNumber: 15
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/home.jsx",
        lineNumber: 410,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/home.jsx",
      lineNumber: 328,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/home.jsx",
      lineNumber: 327,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/home.jsx",
      lineNumber: 326,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV5("div", { className: "home-footer", children: /* @__PURE__ */ jsxDEV5("footer", { className: "home-footer1", children: [
      /* @__PURE__ */ jsxDEV5("div", { className: "home-container31", children: [
        /* @__PURE__ */ jsxDEV5("span", { className: "home-logo2", children: "MY PG" }, void 0, !1, {
          fileName: "app/routes/home.jsx",
          lineNumber: 438,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV5("nav", { className: "home-nav1 home-nav1", children: [
          /* @__PURE__ */ jsxDEV5("span", { className: "home-nav12", children: "Home" }, void 0, !1, {
            fileName: "app/routes/home.jsx",
            lineNumber: 440,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV5("span", { className: "home-nav22", children: "About" }, void 0, !1, {
            fileName: "app/routes/home.jsx",
            lineNumber: 441,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV5("span", { className: "home-nav32", children: "Features" }, void 0, !1, {
            fileName: "app/routes/home.jsx",
            lineNumber: 442,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV5("span", { className: "home-nav42", children: "Parties" }, void 0, !1, {
            fileName: "app/routes/home.jsx",
            lineNumber: 443,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV5("span", { className: "home-nav52", children: "Discounts" }, void 0, !1, {
            fileName: "app/routes/home.jsx",
            lineNumber: 444,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/home.jsx",
          lineNumber: 439,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/home.jsx",
        lineNumber: 437,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV5("div", { className: "home-separator" }, void 0, !1, {
        fileName: "app/routes/home.jsx",
        lineNumber: 447,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV5("div", { className: "home-container32", children: [
        /* @__PURE__ */ jsxDEV5("span", { className: "home-text61", children: "\xA9 2023 MYPG, All Rights Reserved." }, void 0, !1, {
          fileName: "app/routes/home.jsx",
          lineNumber: 449,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV5("div", { className: "home-icon-group1", children: [
          /* @__PURE__ */ jsxDEV5("svg", { viewBox: "0 0 950.8571428571428 1024", className: "home-icon10", children: /* @__PURE__ */ jsxDEV5("path", { d: "M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z" }, void 0, !1, {
            fileName: "app/routes/home.jsx",
            lineNumber: 454,
            columnNumber: 17
          }, this) }, void 0, !1, {
            fileName: "app/routes/home.jsx",
            lineNumber: 453,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV5("svg", { viewBox: "0 0 877.7142857142857 1024", className: "home-icon12", children: /* @__PURE__ */ jsxDEV5("path", { d: "M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z" }, void 0, !1, {
            fileName: "app/routes/home.jsx",
            lineNumber: 457,
            columnNumber: 17
          }, this) }, void 0, !1, {
            fileName: "app/routes/home.jsx",
            lineNumber: 456,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV5("svg", { viewBox: "0 0 602.2582857142856 1024", className: "home-icon14", children: /* @__PURE__ */ jsxDEV5("path", { d: "M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z" }, void 0, !1, {
            fileName: "app/routes/home.jsx",
            lineNumber: 460,
            columnNumber: 17
          }, this) }, void 0, !1, {
            fileName: "app/routes/home.jsx",
            lineNumber: 459,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/home.jsx",
          lineNumber: 452,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/home.jsx",
        lineNumber: 448,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/home.jsx",
      lineNumber: 436,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/home.jsx",
      lineNumber: 435,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/home.jsx",
    lineNumber: 19,
    columnNumber: 5
  }, this) }, void 0, !1, {
    fileName: "app/routes/home.jsx",
    lineNumber: 18,
    columnNumber: 5
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-WEC4XGTU.js", imports: ["/build/_shared/chunk-ZWGWGGVF.js", "/build/_shared/chunk-X5WXAYZN.js", "/build/_shared/chunk-XU7DNSPJ.js", "/build/_shared/chunk-QYWR6FI2.js", "/build/_shared/chunk-UWV35TSL.js", "/build/_shared/chunk-GIAAE3CH.js", "/build/_shared/chunk-BOXFZXVX.js", "/build/_shared/chunk-PNG5AS42.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-F5F2HLN2.js", imports: ["/build/_shared/chunk-G7CHZRZX.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/home": { id: "routes/home", parentId: "root", path: "home", index: void 0, caseSensitive: void 0, module: "/build/routes/home-PHVUC24A.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 } }, version: "59587666", hmr: { runtime: "/build/_shared\\chunk-QYWR6FI2.js", timestamp: 1703416122622 }, url: "/build/manifest-59587666.js" };

// server-entry-module:@remix-run/dev/server-build
var mode = "development", assetsBuildDirectory = "public\\build", future = { v3_fetcherPersist: !1, v3_relativeSplatPath: !1 }, publicPath = "/build/", entry = { module: entry_server_node_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/home": {
    id: "routes/home",
    parentId: "root",
    path: "home",
    index: void 0,
    caseSensitive: void 0,
    module: home_exports
  }
};
export {
  assets_manifest_default as assets,
  assetsBuildDirectory,
  entry,
  future,
  mode,
  publicPath,
  routes
};
//# sourceMappingURL=index.js.map
