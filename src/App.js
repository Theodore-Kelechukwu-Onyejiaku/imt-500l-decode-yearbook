import React, {useEffect} from 'react';
import {Router} from "react-router-dom"
import Main  from "./components/Main";
import "./App.css"
import M from 'materialize-css/dist/js/materialize.min.js'


export default function App(){
  useEffect(()=>{
    window.addEventListener('load', function() {
      var elems = document.querySelectorAll('.sidenav'); 
      var car = document.querySelectorAll('.carousel');
        
      M.Sidenav.init(elems, {});
      M.Carousel.init(car, {});
    });

// eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
    return (
        <Router>
          <div>
            <Main />
          </div>
        </Router>
      
    )
}