import React from "react";
import styled from "styled-components";


const FooterContainer = styled.footer`
background-color: #040125;
color: white;
padding: 2rem;
text-align: center;
font-family: 'Montserrat', sans-serif;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <p>&copy; 2023 Pâmela Wallesca Fernandes Alves. Todos os direitos reservados.</p>
    </FooterContainer> 
  );
};

export default Footer;
