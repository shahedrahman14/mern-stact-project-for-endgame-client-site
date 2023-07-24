import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout";
import Home from "../Pages/Home/Home";
import Login from "../Shared/Login";
import SignUp from "../Shared/SignUp";
import UserDetails from "../Pages/UserDetails";
import CollegeRoute from "../Pages/CollegeRoute";
import SingleCollege from "../Pages/Home/SingleCollege";
import AdmissionRout from "../Pages/AdmissionRout";
import Error from "../Shared/Error";
import AdmissionForm from "../Pages/AdmissionForm";
import MyCollegeRoute from "../Pages/MyCollegeRoute";
import PrivateRoutes from "./PrivateRoutes";



    const router = createBrowserRouter([
        {
          path: "/",
          element: <Layout></Layout>,
          children:[
            {
              path:'/',
              element: <Home></Home>
            },
            {
              path:'/colleges',
              element:<CollegeRoute></CollegeRoute>
            },
            {
                path:'/College/:id',
                element:<SingleCollege></SingleCollege>,
                loader:({params})=>fetch(`https://mern-stact-project-for-endgame-server-site.vercel.app/college/${params.id}`)
            },
            {
              path:'/login',
              element:<Login></Login>
            },
            {
              path:'/signUp',
              element:<SignUp></SignUp>
            },
            {
              path:'/user',
              element:<UserDetails></UserDetails>
            },
            {
              path:'/admission',
              element:<PrivateRoutes><AdmissionRout></AdmissionRout></PrivateRoutes>
            },
            {
              path:'/admissionForm',
              element:<AdmissionForm></AdmissionForm>
            }
            ,
            {
              path:'/myCollege',
              element:<PrivateRoutes><MyCollegeRoute></MyCollegeRoute></PrivateRoutes>
            }
          ]
        },
        {
          path:'*',
          element:<Error></Error>
        }
      ]);


export default router;