import React from "react";
import ReactDOM from "react-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { UsersPage } from "./pages/UsersPage";
import "./index.css";

const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <UsersPage />
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
