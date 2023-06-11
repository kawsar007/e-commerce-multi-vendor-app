import React, { useEffect } from 'react';
import "./App.css";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoginPage, SignupPage, ActivationPage, HomePage, ProductsPage, BestSellingPage, EventsPage, FaqPage, ProductDetailPage } from './Routes';
import axios from 'axios';
import { server } from './server';
import Store from "./redux/store";
import { loadUser } from './redux/actions/user';
import { useSelector } from 'react-redux';

const App = () => {
  const { loading } = useSelector((state) => state.user);
  
  useEffect(() => {
    Store.dispatch(loadUser())
    // axios.get(`${server}/user/getuser`,{withCredentials:true}).then((res) => {
    //   toast.success(res.data.message)
    //   console.log(res.data?.message, "Load User");
    // }).catch((err) => {
    //   toast.error(err.response?.data.message);
    // })
  }, []);

  return (
  <>
    {
      loading ? (
        null
      ): (
          <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/sign-up" element={<SignupPage />} />
        <Route path="/activation/:activation_token" element={<ActivationPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/product/:name" element={<ProductDetailPage />} /> 
        <Route path="/best-selling" element={<BestSellingPage />} />
        <Route path="/events" element={<EventsPage />} /> 
        <Route path="/faq" element={<FaqPage />} />
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
       </BrowserRouter>
      )
      }
    </>
  )
}

export default App;
