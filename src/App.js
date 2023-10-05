import {useState, useEffect} from "react";
import './app.scss';
import './index.css';
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import Main, {mainLoader} from "./layouts/Main";
import Error from "./pages/Error";
import Dashboard, {dashboardAction, dashboardLoader} from "./pages/Dashboard";
import Logout from "./pages/Logout";
import {logoutAction} from "./actions/logoutAction";
//library imports
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<Main/>} errorElement={<Error/>} loader={mainLoader}>
            <Route index element={<Dashboard/>} loader={dashboardLoader} action={dashboardAction} />
            <Route path='logout' element={<Logout/>} action={logoutAction}/>
        </Route>
    )
)


const App = () => {
    return (
        <div className='App'>
            <RouterProvider router={router}/>
            <ToastContainer />
        </div>
    )
}

export default App;