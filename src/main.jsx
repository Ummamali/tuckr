import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./magmatw.css";
import App from "./App.jsx";
import AppContextProvides from "./components/Context/AppContextProvides.jsx";
import ModalProvider from "./components/Modals/ModalProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AppContextProvides>
      <ModalProvider>
        <App />
      </ModalProvider>
    </AppContextProvides>
  </StrictMode>
);
