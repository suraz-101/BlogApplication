import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import { BlogContextProvider } from "./context /BlogContext"; // Corrected import path

import { Provider } from "react-redux";
import { store, newStore } from "./store";
import { PersistGate } from "redux-persist/integration/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={newStore}>
        {/* Corrected prop name */}
        <BlogContextProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </BlogContextProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
