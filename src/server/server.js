import "babel-polyfill";
import express from "express";
import React from "react";
import bodyParser from "body-parser";
import ReactDomServer from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import App from "../client/app";
const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use(express.static("build/public"));

app.get("*", (req, res) => {
  const context = {};
  const content = ReactDomServer.renderToString(
    <StaticRouter location={req.url} context={context}>
      <App />
    </StaticRouter>
  );
  const html = `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
  </head>
  <body>
      <div id="root">${content}</div>
      <script src="client_bundle.js"></script>
  </body>
  </html>
  `;
  res.send(html);
});

app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});
