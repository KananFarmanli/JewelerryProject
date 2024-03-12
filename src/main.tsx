
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { apiSlice } from "./api/apiSlice.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ApiProvider api={apiSlice}>
    <App />
  </ApiProvider>
);
