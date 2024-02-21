/** @type {import('@remix-run/dev').AppConfig} */
export default {
  appDirectory: "app",
  ignoredRouteFiles: ["**/.*"],
  browserNodeBuiltinsPolyfill: { modules: { path: true, url: true, fs: true } },
  serverDependenciesToBundle: [
    "remix-i18next"
  ]
};
