/* eslint-disable no-unused-vars */
import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import Register from "../components/Register/Register";
import Login from "../components/Login/Login";
import Blog from "../components/Blog/Blog";
import PrivateRoute from "./PrivateRoute";
import FoodCategory from "../pages/Home/FoodCategory/FoodCategory";
import ChefDetail from "../pages/Home/ChefDetail/ChefDetail";
import FoodLayout from "../layout/FoodLayout";
import ChefLayout from "../layout/ChefLayout";
import HomeMiddle from "../pages/Home/HomeMiddle/HomeMiddle";
import ErrorPage from "../components/ErrorPage/ErrorPage";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement:<ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,

            },
            {
              path:'register',
              element:<Register></Register>  
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path:'/blog',
                element:<PrivateRoute><Blog></Blog></PrivateRoute>
            },
            {
                path: '/foodCategory/:id',
                element : <FoodCategory></FoodCategory>,
                loader: ({params}) => fetch(`http://localhost:5000/foodCategories/${params.id}`)
            },
            {
                path:'food/:id',
                element: <FoodLayout></FoodLayout>
            },
            {
                path: '/chefDetail/:id',
                element: <PrivateRoute><ChefDetail></ChefDetail></PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:5000/chef/${params.id}`)
            },
        
            {
                path:'chef/:id',
                element:<ChefLayout></ChefLayout>
            },
        

        ]
    }
])

export default router;