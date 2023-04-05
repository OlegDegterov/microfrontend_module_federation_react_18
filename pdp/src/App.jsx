import React, { Suspense, lazy } from 'react';
import ReactDOM from "react-dom";

import "./index.scss";

const Header = React.lazy( () => import('home/Header'));
console.log("Header",Header)
////const Header = React.lazy(()=>import("home/Header"));
const Footer = React.lazy( () => import('home/Footer'));
// import { Header } from 'home/Header'
// import { Footer } from 'home/Footer'

const App = () => (
  <Suspense fallback={<div>Loading...</div>}>
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    
      <Header/>
    
    <div className="my-10">PDP PageContent </div>
    <Footer/>
  </div>
   </Suspense>
);
ReactDOM.render(<App />, document.getElementById("app"));
