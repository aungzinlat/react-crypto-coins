import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { ThemeContextProvider } from "./contexts/ThemeContext";

ReactDOM.createRoot(document.querySelector("#root")).render(
  <ThemeContextProvider>
    <App />
  </ThemeContextProvider>
);
