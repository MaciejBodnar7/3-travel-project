import React from "react"
import ReactDOM from "react-dom/client"
import Navbar from "./Navbar.jsx"
import AppData from "./AppData.jsx"
import "./index.css"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Navbar />
    <AppData />
  </React.StrictMode>
)
