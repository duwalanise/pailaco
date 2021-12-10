import React, { useEffect } from "react";
import styled from "@emotion/styled";
import { gsap } from "gsap";
import Logo from "../../images/icon.png";

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 8px 12%;
  margin: auto;
  z-index: 10;
  position: fixed;
  top: 0;
  @media (max-width: 600px) {
    padding: 8px 24px;
  },
`;

const Image = styled.img`
  height: 60px;
  opacity: 0;
`;

const Title = styled.span`
  font-size: 32px;
  font-weight: bold;
  color: #5f9ea0;
  margin-top: 16px;
  margin-left: -16px;
  opacity: 0;
`;

const Caption = styled.div`
  display: flex;
`;

const Header = () => {
  useEffect(() => {
    gsap.fromTo(
      `#logo`,
      {
        transform: "translate(40vw, 45vh) scale(3)",
        opacity: 1,
      },
      {
        transform: "translate(0, 0) scale(1)",
        rotate: 360,
        duration: 1.3,
        ease: "power3.inOut",
        delay: 1,
      },
    );
    gsap.fromTo(
      `#caption`,
      {
        transform: "translateX(100vw) scale(1.5)",
      },
      {
        transform: "translateX(0) scale(1)",
        opacity: 1,
        duration: 1.3,
        ease: "bounce",
        delay: 1,
      },
    );
  });
  return (
    <Wrapper>
      <Caption>
        <Image id='logo' src={Logo} />
        <Title id='caption'>Paila</Title>
      </Caption>
      <nav></nav>
    </Wrapper>
  );
};

export default Header;
