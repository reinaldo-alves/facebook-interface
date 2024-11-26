import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import App from "./App";
import Login from "./Login";

export default function Routes() {
    const router = createBrowserRouter([{path: '/feed', element: <App />}, {path: '/', element: <Login />}])
    return (<RouterProvider router={router} />)
}