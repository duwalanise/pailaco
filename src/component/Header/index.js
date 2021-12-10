import React, { useEffect, useState } from "react";
import { Link } from "gatsby";
import styled from "@emotion/styled";
import { gsap } from "gsap";
import Logo from "../../images/icon.png";
import { breakpoints } from "../../layouts/theme/theme";
import NavMenu from "../NavMenu";

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

const Caption = styled(Link)`
  display: flex;
  text-decoration: none;
`;

const Header = () => {
  const [isMobile, setIsMobile] = useState(true);

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
  }, []);

  useEffect(() => {
    const handleResize = () => {
      const mbp = Number(breakpoints.m.replace(/[^0-9]/g, ""));
      if (window.innerWidth <= mbp) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };

    handleResize();

    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize, { passive: true });
    }
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Wrapper>
      <Caption to='/'>
        <Image id='logo' src={Logo} />
        <Title id='caption'>Paila</Title>
      </Caption>
      <NavMenu isMobile={isMobile} />
    </Wrapper>
  );
};

export default Header;
