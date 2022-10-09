import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

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

function Routes() {
   return(
       <RouterProvider router={router}/>
   )
}

export default Routes;