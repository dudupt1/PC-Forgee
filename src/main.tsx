import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";

import "./styles/index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
); 

import { BuildProvider } from "./contexts/BuildContext";

<React.StrictMode>
  <BrowserRouter>
    <BuildProvider>
      <App />
    </BuildProvider>
  </BrowserRouter>
</React.StrictMode>