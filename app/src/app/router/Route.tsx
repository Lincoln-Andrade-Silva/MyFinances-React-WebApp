import { createBrowserRouter, Navigate, RouteObject } from "react-router-dom";
import App from "../layout/App";

export const routes: RouteObject[] = [
    {
        path: '/',
        element: <App />,
        children: [
            { path: '*', element: <Navigate replace to='/not-found' /> }
        ]
    }
]

export const router = createBrowserRouter(routes);