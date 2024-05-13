import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import Avatar2 from "../assets/avatar2.png";
import HTML from "../assets/html-5_5968267.png";
import CSS from "../assets/css-3_5968242.png";
import JS from "../assets/js_5968292.png";
import ReactImg from "../assets/react-1-logo-png-transparent-removebg-preview.png";
import Styled from "../assets/styled-components.png";
import Sass from "../assets/sass_5968358.png";
import Bootstrap from "../assets/bootstrap-logo.png";
import Git from "../assets/git.png";
import VSCODE from "../assets/vscode.png";
import Java from "../assets/java_226777.png";
import SQL from "../assets/mysql_5968313.png";
import PHP from "../assets/php_5968332.png";
import Python from "../assets/python-logo-removebg-preview.png";

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

const SobreContainer = styled.main`
margin-top: 3rem;
min-height: 100vh;
background: linear-gradient(90deg, rgba(2, 0, 36, 1) 0%, rgba(255, 142, 203, 1) 100%, rgba(0, 212, 255, 1) 100%);
color: white;
font-family: 'Montserrat', sans-serif;


.primeiraSessaoSobre{
	height: 100vh;
	display:flex;
	flex-direction: row;

	h1{
		font-size: 24px;
		margin: 25px;
		color: #1B1B3A;

	  }

	  p{
		font-size: 18px;
		line-height: 1.5;
		margin: 25px;
	  }
	  img{
		width: 27rem;
		margin-top: 9rem;

}

`;
const Card = styled.div`
  animation: ${fadeIn} 3s ease-in-out; 
  width: 30vw;
  height: 60vh;
  padding: 20px 10px;
  border-radius: 10px;
  background-color: rgba(65, 65, 65, 0.308);
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
  margin-left: 9rem;
  margin-top: 5rem;
  transition: all 0.5s;
	


  &:hover {
    transform: scale(1.05);
`;

const TituloHabilidades = styled.h2`
  font-size: 38px;
  text-align: center;
  color: #1b1b3a;
  margin: 2rem;
`;

const ImagensContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  height: 100vh;
`;

const CardImage = styled.figure`
width: 10vw;
height: 12vh;
padding: 20px 10px;
border-radius: 10px;
background-color: rgba(65, 65, 65, 0.308);
box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
transition: all 0.5s;
padding: 2rem;

&:hover {
  transform: scale(1.05);
  background-color: white;
  color: black;

`;

const Imagem = styled.img`
  width: 75px;
  height: auto;
  margin-left: 35px;
`;

function Sobre() {
  const [imagens] = useState([
    {
      imagem: HTML,
      descricao: "HTML5",
    },
    {
      imagem: CSS,
      descricao: "CSS",
    },
    {
      imagem: JS,
      descricao: "JavaScript",
    },
    {
      imagem: ReactImg,
      descricao: "React",
    },
    {
      imagem: Styled,
      descricao: "Styled Components",
    },
    {
      imagem: Sass,
      descricao: "Sass",
    },

    {
      imagem: Bootstrap,
      descricao: "Bootstrap",
    },
    {
      imagem: Git,
      descricao: "Git",
    },
    {
      imagem: VSCODE,
      descricao: "Visual Studio Code",
    },

    {
      imagem: Java,
      descricao: "Java",
    },
    {
      imagem: SQL,
      descricao: "My SQL",
    },
    {
      imagem: PHP,
      descricao: "PHP",
    },

    {
      imagem: Python,
      descricao: "Python",
    },
  ]);

  return (
    <SobreContainer>
      <section className="primeiraSessaoSobre">
        <figure>
          <img src={Avatar2} alt="Meu avatar" />
        </figure>
        <Card>
          <h1>Sobre mim - Estudos e Experiências</h1>
          <p>
            Olá! 🌟 Me chamo Pâmela, tenho 17 anos e meu fascínio pela
            programação começou aos 15 anos. Sou técnica em informática e
            atualmente estou cursando Ciência da Computação. Além disso, fiz um
            curso de Desenvolvimento Front-end pelo VaiNaWeb. A busca constante
            pelo aprendizado é minha maior motivação, e estou sempre aberta para
            absorver conhecimento e enfrentar novos desafios. 💻✨
          </p>
        </Card>
      </section>

      <TituloHabilidades>Minhas Habilidades</TituloHabilidades>

      <ImagensContainer>
        {imagens.map((item) => (
          <CardImage>
            <Imagem src={item.imagem} alt="" />
            <figcaption>{item.descricao}</figcaption>
          </CardImage>
        ))}
      </ImagensContainer>
    </SobreContainer>
  );
}

export default Sobre;
