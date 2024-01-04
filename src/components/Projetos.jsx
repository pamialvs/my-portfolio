import React from "react";
import styled, { keyframes } from "styled-components";

const ProjetosContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 8rem;
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(255, 142, 203, 1) 100%,
    rgba(0, 212, 255, 1) 100%
  );
  color: white;
  font-family: 'Montserrat', sans-serif;
`;

const Titulo = styled.h1`
  color: black;
  font-size: 5rem;
  margin-bottom: 20px;
  
`;

const ProjetosGrid = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const ProjetoCard = styled.div`
  width: 300px;
  height: 30rem;
  padding: 20px;
  margin: 30px;
  background-color: #1B1B3A;
  border-radius: 10px;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.05);
  }
`;

const ProjetoTitulo = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 20px;
`;

const ProjetoDescricao = styled.p`
  font-size: 1rem;
`;

const gradientAnimation = keyframes`
  0% {
    background-position: 0%;
  }

  100% {
    background-position: 400%;
  }
`;

const Button = styled.button`
  text-decoration: none;
  position: relative;
  border: none;
  font-size: 15px;
  font-family: 'Montserrat', sans-serif;
  color: #fff;
  width: 10em;
  height: 2.3em;
  line-height: 2em;
  text-align: center;
  background: linear-gradient(90deg, #03a9f4, #f441a5, #ffeb3b, #03a9f4);
  background-size: 300%;
  border-radius: 30px;
  z-index: 1;
  margin-top: 2rem;
  cursor: pointer;

  &:hover {
    animation: ${gradientAnimation} 8s linear infinite;
    border: none;
  }

  &::before {
    content: '';
    position: absolute;
    top: -5px;
    left: -5px;
    right: -5px;
    bottom: -5px;
    z-index: -1;
    background: linear-gradient(90deg, #03a9f4, #f441a5, #ffeb3b, #03a9f4);
    background-size: 400%;
    border-radius: 35px;
    transition: 1s;
  }

  &:hover::before {
    filter: blur(20px);
  }

  &:active {
    background: linear-gradient(32deg, #03a9f4, #f441a5, #ffeb3b, #03a9f4);
  }
`;



const Projetos = () => {
  return (
    <>
    <ProjetosContainer>
    <Titulo>Meus Projetos</Titulo>
    <ProjetosGrid>
      <ProjetoCard>
        <ProjetoTitulo>LaPizza</ProjetoTitulo>
        <ProjetoDescricao>Projeto praticando useState em React, desenvolvido por mim durante o curso do Vai na Web. Feito com carinho, aprendizado e alguns bytes de código. Clica aí e bora pedir uma pizza com a gente! 🚀🍕</ProjetoDescricao>
        <iframe title="LaPizza" src="https://3d5373e5-4645-4bbd-8d76-e2c311a97b40-00-2px2ryiz3urx9.spock.replit.dev//"  
        style={{
          width: "100%",
          height: "20vh",
          border: "none",
          borderRadius: "15px",
          backgroundColor: "white", 
          marginTop: "2rem",
        }}> 
        </iframe>
        <a href="https://3d5373e5-4645-4bbd-8d76-e2c311a97b40-00-2px2ryiz3urx9.spock.replit.dev/" target="_blank"><Button> Ver Projeto
        </Button></a>
      </ProjetoCard>

      <ProjetoCard>
        <ProjetoTitulo>Calculadora Online Estilo iPhone 📱</ProjetoTitulo>
        <ProjetoDescricao> A iCalculator, é tipo uma cópia da calculadora do iPhone. Sabe aquela que você já tá acostumado(a)? Então, é bem parecida! Desenvolvida por mim durante o curso do Vai na Web!</ProjetoDescricao>
        <iframe title="Calculadora" src="https://calculadora-ios-online.netlify.app/"  
        style={{
          width: "100%",
          height: "20vh",
          border: "none",
          borderRadius: "15px",
          marginTop: "1rem",
        }}> 
        </iframe>
        <a href="https://calculadora-ios-online.netlify.app/" target="_blank"><Button> Ver Projeto
        </Button></a>
      </ProjetoCard>

      <ProjetoCard>
        <ProjetoTitulo>Inverno</ProjetoTitulo>
        <ProjetoDescricao>Dê uma espiada nesse meu projeto web que captura a vibe do inverno. É como um mergulho virtual nessa estação incrível ❄️. Vem dar uma olhada:</ProjetoDescricao>
        <iframe title="Inverno" src="https://kpk7zw.csb.app/"  
        style={{
          width: "100%",
          height: "20vh",
          border: "none",
          borderRadius: "15px",
          marginTop: "3.8rem",
        }}> 
        </iframe>
        <a href="https://kpk7zw.csb.app/" target="_blank"><Button> Ver Projeto
        </Button></a>
      </ProjetoCard>

      <ProjetoCard>
        <ProjetoTitulo>Disney</ProjetoTitulo>
        <ProjetoDescricao>Um projeto de página web inspirado na Disney. Explore filmes e séries com pôsteres encantadores. Navegue pelo menu e mergulhe na magia!✨🎬</ProjetoDescricao>
        <iframe title="Disney" src="https://3qk2gv-5000.csb.app/"  
        style={{
          width: "100%",
          height: "20vh",
          border: "none",
          borderRadius: "15px",
          marginTop: "3.8rem",
        }}> 
        </iframe>
        <a href="https://3qk2gv-5000.csb.app/" target="_blank"><Button> Ver Projeto
        </Button></a>
      </ProjetoCard>

      <ProjetoCard>
        <ProjetoTitulo>Fantastika</ProjetoTitulo>
        <ProjetoDescricao>Landing page de uma clínica pet 🐾 desenvolvida por mim durante o curso do Vai na Web! 🚀</ProjetoDescricao>
        <iframe title="Fantastika" src="https://v4xt32.csb.app/"  
        style={{
          width: "100%",
          height: "20vh",
          border: "none",
          borderRadius: "15px",
          marginTop: "3.8rem",
        }}> 
        </iframe>
        <a href="https://v4xt32.csb.app/" target="_blank"><Button> Ver Projeto
        </Button></a>
      </ProjetoCard>
      </ProjetosGrid>
    </ProjetosContainer>
    </>
  );
};
export default Projetos;