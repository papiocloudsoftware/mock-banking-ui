import "./style/index.css";

import { createServer, Response } from "miragejs";
import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { SignInRequest } from "./components/SignInComponent";

if (process.env.NODE_ENV === "development") {
  const server = createServer({});
  server.post("/auth/signin", (schema, request) => {
    const body = JSON.parse(request.requestBody) as SignInRequest;
    if (!body?.email || !body.password) {
      return new Response(400);
    }
    if (body.password !== "supersecure") {
      return new Response(401);
    }
    return new Response(200);
  });
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
