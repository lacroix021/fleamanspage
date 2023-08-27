import { Routes, Route, HashRouter } from 'react-router-dom';
import React , { useState } from 'react';
import GeneralContextProvider from './context/GeneralContext';

import Home from './Pages/Home/Home';
import Privacy from './Pages/Privacy/Privacy';
import HowToPlay from './Pages/HowToPlay/HowToPlay';
import NotFound from './Pages/404/NotFound';

import NavBar from './Components/NavBar/NavBar';
import Footer from './Components/Footer/Footer';
import './App.module.scss';
import './stylesheet.css';
import { BallTriangle } from  'react-loader-spinner';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { AiOutlineFileDone, AiFillHome, AiOutlineAndroid } from "react-icons/ai";

export default function App() {
  const [showLoader, setShowLoader] = useState(false);

  const menuLinks = [
    {
      name: "Home",
      slug: "/",
      icon: <AiFillHome />
    },
    {
      name: "Privacy Policy",
      slug: "/privacy",
      icon: <AiOutlineFileDone />
    },
    {
      name: "How to Play",
      slug: "/how-to-play",
      icon: <AiOutlineAndroid />
    },
  ];

  const styleLoader = {
    position: "absolute",
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    zIndex: "30",
    backgroundColor: "#38087B",
  };
  

  return (
    <HashRouter>
      <BallTriangle
        height={100}
        width={100}
        radius={5}
        color="#108982"
        ariaLabel="ball-triangle-loading"
        wrapperStyle={ styleLoader }
        visible = { showLoader }
      />

      <GeneralContextProvider>
        <NavBar arrayLinks={ menuLinks } setShowLoader={ setShowLoader }/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/privacy' element={<Privacy/>}/>
          <Route path='/how-to-play' element={<HowToPlay/>}/>
          <Route path='/*' element={<NotFound />}/>
        </Routes>
        <Footer />
      </GeneralContextProvider>
    </HashRouter>
  );
}