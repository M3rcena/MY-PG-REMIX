import React from "react";
import { createRoot} from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "App";

import { MyPGControllerProvider } from "context";

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);


root.render(<BrowserRouter>
  <MyPGControllerProvider>
    <App />
  </MyPGControllerProvider>
</BrowserRouter>)

