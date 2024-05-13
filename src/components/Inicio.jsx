import React from "react";
import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";
import Avatar from "../assets/meuavatar.png";
import Instagram from "../assets/instagram-logo.png";
import GitHub from "../assets/github-logo.png";
import Linkedin from "../assets/linkedin-logo.png";
import Email from "../assets/gmail-logo.png";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const InicioContainer = styled.main`
  min-height: 100vh;
  display: flex;
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(255, 142, 203, 1) 100%,
    rgba(0, 212, 255, 1) 100%
  );
  color: white;

  h1,
  p {
    font-family: "Montserrat", sans-serif;
    margin-left: 2.4rem;
  }

  .avatar {
    img {
      margin-top: 12rem;
      width: 22rem;
      border-radius: 25%;
      animation: ${fadeIn} 3s ease-in-out;
    }
  }

  .primeiraSessao {
    display: flex;
    flex-direction: column;
    justify-content: center;

    h1 {
      font-size: 2.5rem;
      color: #1b1b3a;
      animation: ${fadeIn} 3s ease-in-out;
    }

    p {
      margin-right: 2rem;
      font-size: 1.5rem;
      animation: ${fadeIn} 3s ease-in-out;
    }

    figure {
      display: flex;
      align-items: center;
      animation: ${fadeIn} 3s ease-in-out;
      margin-top: 3rem;

      img {
        width: 2.3rem;
        margin-right: 1.5rem;
      }
    }
  }
`;

const gradientAnimation = keyframes`
  0% {
    background-position: 0%;
  }

  100% {
    background-position: 400%;
  }
`;

const Button = styled(Link)`
  text-decoration: none;
  position: relative;
  border: none;
  font-size: 15px;
  font-family: "Montserrat", sans-serif;
  color: #fff;
  width: 10em;
  height: 2.3em;
  line-height: 2em;
  text-align: center;
  background: linear-gradient(90deg, #03a9f4, #f441a5, #ffeb3b, #03a9f4);
  background-size: 300%;
  border-radius: 30px;
  z-index: 1;
  margin-left: 2.4rem;

  &:hover {
    animation: ${gradientAnimation} 8s linear infinite;
    border: none;
  }

  &::before {
    content: "";
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

const Inicio = () => {
  return (
    <InicioContainer>
      <figure class="avatar">
        <img src={Avatar} alt="meu avatar" />
      </figure>

      <section class="primeiraSessao" id="inicio">
        <h1>Bem-vindos ao Meu Portfólio!</h1>
        <p>
          Olá! Me chamo Pâmela, uma entusiasta do desenvolvimento
          dedicada a criar experiências excepcionais na web. Tenho paixão por
          jogos 🎮, amo uma boa música, principalmente Rock 🤟🏽, sou fã de
          diversos filmes e séries, e mantenho um amor contínuo pela leitura.
          Estou sempre em busca de aprendizado e novos desafios!
        </p>
        <Button to="/sobre">Mais sobre mim </Button>

        <figure>
          <a
            href="https://instagram.com/pamialvs?igshid=M2RkZGJiMzhjOQ%3D%3D"
            target="_blank"
          >
            <img src={Instagram} alt="Instagram" />
          </a>
          <a href="https://github.com/pamialvs" target="_blank">
            <img src={GitHub} alt="GitHub" />
          </a>
          <a
            href="https://www.linkedin.com/in/p%C3%A2mela-fernandes-59baaa272"
            target="_blank"
          >
            <img src={Linkedin} alt="Linkedin" />
          </a>
          <a href="mailto: pamelawallescaf@gmail.com" target="_blank">
            <img src={Email} alt="Email" />
          </a>
        </figure>
      </section>
    </InicioContainer>
  );
};

export default Inicio;
