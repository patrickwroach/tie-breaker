import React from "react";
import ReactDOM from "react-dom";
import "./styles/main.scss";
import Header from "./packages/Header";
import Content from "./packages/Content";
import Footer from "./packages/Footer"

function App() {
  return (
    <div className="app">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
