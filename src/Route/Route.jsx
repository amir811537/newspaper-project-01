import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/register/Register";
import Detailnews from "../pages/DetailsNews/Detailnews";
import Privateroute from "./Privateroute";

const routes = createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        children:[
            {path:'/',
            element:<Home></Home>,
            loader:()=>fetch('/news.json')
                
            },
            {path:'/news/:id',
            element:<Privateroute><Detailnews></Detailnews></Privateroute>

            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            }
        ]
    }
]);
export default routes;