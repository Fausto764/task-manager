import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import { TaskContextProvider } from "./TaskContext/TaskContexProvider.jsx"
import "./index.css"

ReactDOM.createRoot(document.getElementById("root")).render(
  <TaskContextProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </TaskContextProvider>
)
