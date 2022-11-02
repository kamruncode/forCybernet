import React from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import { Provider } from "react-redux";
import { store } from "./services";
import "./index.css";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BroweserRouter>
        <App />
      </BroweserRouter>
    </Provider>
  </React.StrictMode>
);
