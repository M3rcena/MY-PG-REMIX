import { createRequestHandler } from "@remix-run/express";
import { broadcastDevReady } from "@remix-run/node";
import express from "express";
import initi18n from "./app/structures/i18n.mjs";
initi18n();
// notice that the result of `remix build` is "just a module"
import * as build from "./build/index.js";

const app = express();
app.use(express.static("public"));

// and your app is "just a request handler"
app.all("*", createRequestHandler({ build }));

app.listen(3000, '0.0.0.0', () => {
  if (process.env.NODE_ENV === "development") {
    broadcastDevReady(build);
  }
});