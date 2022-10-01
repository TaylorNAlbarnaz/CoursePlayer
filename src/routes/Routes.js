import React from "react";
import { Route, RouterProvider, createBrowserRouter } from "react-router-dom";

import { CoursePage, ModulePage} from "../components";

const router = createBrowserRouter([
    {
        path: "/",
        element: <ModulePage/>
    },
    {
        path: "/course",
        element: <CoursePage/>
    },
]);

const Routes = () => {
   return(
       <RouterProvider router={router}/>
   )
}

export default Routes;