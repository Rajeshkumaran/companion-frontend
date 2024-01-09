import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { ThemeProvider as FluentProvider } from "@fluentui/react";
import "@/utils/ReactToastify.css";
import appStore from "./store";
import theme from "./theme";
import App from "./containers/App/App";
import "index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={appStore}>
    <FluentProvider theme={theme} style={{ height: "100%" }}>
        <App />
    </FluentProvider>
  </Provider>
);
