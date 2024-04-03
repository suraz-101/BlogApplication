import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import { BlogContextProvider } from "./context /BlogContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BlogContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </BlogContextProvider>
  </React.StrictMode>
);
