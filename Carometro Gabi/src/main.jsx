import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import React from "react";
import Home from "./pages/home/Home";
import "./style/Global.css";

import MainRoutes from "./routes";

ReactDOM.createRoot(document.getElementById("root")).render(<Home />);
