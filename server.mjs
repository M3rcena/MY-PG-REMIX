import { createRequestHandler } from "@remix-run/express";
import { broadcastDevReady } from "@remix-run/node";
import express from "express";

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
  console.log("App listening on http://0.0.0.0:3000");

  console.table({
    'Node Version: ': `${process.version}`,
    '': '',
    'Platform: ': `${process.platform} ${process.arch}`,
    'RAM: ': `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB / ${(process.memoryUsage().rss / 1024 / 1024).toFixed(2)} MB`
  })
});
