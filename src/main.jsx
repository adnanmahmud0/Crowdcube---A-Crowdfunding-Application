import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Root from './components/root.jsx';
import SignUp from './components/auth/SignUp.jsx';
import Login from './components/auth/Login.jsx';
import ForgetPass from './components/auth/ForgetPass.jsx';
import AuthProvider from './providers/AuthProvider.jsx';
import AllCampaign from './components/allCampaign/AllCampaign.jsx';
import MyCampaign from './components/myCampaign/MyCampaign.jsx';
import PrivateRoute from './components/routes/PrivateRoute.jsx';
import MyDonation from './components/myDonation/MyDonation.jsx';
import AddNewCampaign from './components/addNewCampaign/addNewCampaign.jsx';
import Error404 from './components/error/error404.jsx';
import Home from './components/home/Home.jsx';
import CampaignDetails from './components/campaignDetails/CampaignDetails.jsx';
import UpdateCampaign from './components/myCampaign/UpdateCampaign.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: '/signUp',
        element: <SignUp></SignUp>,
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/forgetPassword',
        element: <ForgetPass></ForgetPass>,
      },
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('https://crowd-cube-adnanmahmud.vercel.app/allCampaign'),
      },
      {
        path: '/allCampaign',
        element: <AllCampaign></AllCampaign>,
        loader: () => fetch('https://crowd-cube-adnanmahmud.vercel.app/allCampaign'),
      },
      {
        path:'/addNewCampaign',
        element: <PrivateRoute><AddNewCampaign></AddNewCampaign></PrivateRoute>,
      },
      {
        path: '/myCampaign',
        element: <PrivateRoute><MyCampaign></MyCampaign></PrivateRoute>,
        loader: () => fetch('https://crowd-cube-adnanmahmud.vercel.app/allCampaign'),
      },
      {
        path: '/myDonation',
        element: <PrivateRoute><MyDonation></MyDonation></PrivateRoute>,
        loader: () => fetch('https://crowd-cube-adnanmahmud.vercel.app/allCampaign'),
      },
      {
        path: '/campaignDetails/:id',
        element: <PrivateRoute><CampaignDetails></CampaignDetails></PrivateRoute>,
        loader: () => fetch('https://crowd-cube-adnanmahmud.vercel.app/allCampaign'),
      },
      {
        path: '/updateCampaign/:id',
        element: <PrivateRoute><UpdateCampaign></UpdateCampaign></PrivateRoute>,
        loader: ({params}) => fetch(`https://crowd-cube-adnanmahmud.vercel.app/Campaign/${params.id}`),
      },
      {
        path: '*',
        element:<Error404></Error404>,
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
