import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React , { useState } from 'react';

import Home from './Pages/Home';
import Terms from './Pages/Terms';
import HowToPlay from './Pages/HowToPlay';
import NotFound from './Pages/NotFound';

import NavBar from './Components/NavBar/NavBar';
import Footer from './Components/Footer/Footer';
import './App.module.scss';
import './stylesheet.css';
import { BallTriangle } from  'react-loader-spinner';

import { AiOutlineAndroid, AiOutlineFileDone, AiFillHome } from "react-icons/ai";

export default function App() {
  const maxWidth = 1200;
  const [showLoader, setShowLoader] = useState(false);

  const menuLinks = [
    {
      name: "Home",
      slug: "",
      element: <Home />,
      icon: <AiFillHome />
    },
    {
      name: "Terms and Conditions",
      slug: "terms",
      element: <Terms />,
      icon: <AiOutlineFileDone />
    },
    {
      name: "How to Play",
      slug: "how-to-play",
      element: <HowToPlay />,
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
    <BrowserRouter>
      <BallTriangle
        height={100}
        width={100}
        radius={5}
        color="#108982"
        ariaLabel="ball-triangle-loading"
        wrapperStyle={ styleLoader }
        visible = { showLoader }
      />

      <NavBar max_Width={ maxWidth } arrayLinks={ menuLinks } setShowLoader={ setShowLoader }/>

      <Routes>
        {menuLinks.map(({slug, element}, index) =>{
          return(
            <Route key={index} path={`/fleamans-page/${slug}`} element={element}/>
          )
        })}
        <Route path='/fleamans-page/*' element={<NotFound />}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}