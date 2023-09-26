import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './componets/Root';
import Home from './componets/Home';
import ErrorHandler from './componets/ErrorHandler';
import Donatedetails from './componets/Donatedetails';
import DonationsAfterDonated from './componets/DonationsAfterDonated';
import GetDonatePercentage from './componets/GetDonatePercentage';




const router=createBrowserRouter([

{
  path:'/',
  element:<Root></Root>,
  errorElement:<ErrorHandler></ErrorHandler>,
  children:[

 {
  path:'/',
  element:<Home></Home>
 },
 {
  path:'/detail/:id',
  element:<Donatedetails></Donatedetails>,
  loader:()=> fetch('donation.json')
 },
 {
  path:'/donate',
  element:<DonationsAfterDonated></DonationsAfterDonated>,
 },
   
  {
    path:'/static',
    
    element:<GetDonatePercentage></GetDonatePercentage>,
    
   },


  







  ]
}











])













ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
 <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
