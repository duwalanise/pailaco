import React, { useEffect } from "react";
import styled from "@emotion/styled";
import { gsap } from "gsap";
import Logo from "../../images/icon.png";

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  max-width: 1220px;
  padding: 8px 24px;
  margin: auto;
  z-index: 10;
`;

const Image = styled.img`
  height: 60px;
`;

const Title = styled.span`
  font-size: 32px;
  font-weight: bold;
  color: #5f9ea0;
`;

const Caption = styled.div`
  display: flex;
  align-items: baseline;
  margin-left: -16px;
  margin-top: 16px;
  width: 100%;
`;

const Header = () => {
  useEffect(() => {
    gsap.fromTo(
      `#logo`,
      {
        transform: "translate(40vw, 45vh) scale(3)",
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
        transform: "translateX(140%) scale(1.5)",
      },
      {
        transform: "translateX(0) scale(1)",
        duration: 1.3,
        ease: "bounce",
        delay: 1,
      },
    );
  });
  return (
    <Wrapper>
      <Image id='logo' src={Logo} />
      <Caption id='caption'>
        <Title>Paila</Title> a step towards quality.
      </Caption>
    </Wrapper>
  );
};

export default Header;
