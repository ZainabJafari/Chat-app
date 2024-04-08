import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext.js";
import {  SocketContextProvider } from "./context/SocketContext.js";

const rootElement = document.getElementById("root");

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <BrowserRouter>
        <AuthContextProvider>
          <SocketContextProvider>
          <App />
          </SocketContextProvider>
        </AuthContextProvider>
      </BrowserRouter>
    </React.StrictMode>
  );
} else {
  console.log("Root element not found in the DOM.");
}
