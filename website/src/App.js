import React from "react";
import './App.css';  
import Header from "./components/Header";
import Menu from "./components/Menu";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Mobile from "./components/Mobile";
import Bot from "./components/Bot";

function App() {
  return (
    <div>
      <head><title>Java Cup</title></head>
      <Header />
      <Home/>
      <Mobile />
      <Menu />
      <Footer />
      <Bot />
    </div>
  );
}

export default App;
