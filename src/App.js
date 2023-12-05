import React from "react";
import Header from "./components/Header";
import Inicio from "./components/Inicio";
import Sobre from "./components/Sobre";
import Projetos from "./components/Projetos";
import Footer from "./components/Footer";
import GlobalStyle from './styles/GlobalStyle';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/projetos" element={<Projetos />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;