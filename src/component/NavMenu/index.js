import React, { useState } from "react";
import styled from "@emotion/styled";
import { Link } from "gatsby";
import { gsap } from "gsap";
import Hamburger from "../../images/hamburger.svg";
import Drawer from "../Drawer";
import { useEffect } from "react";

const SectionWrapper = styled.div`
  display: flex;
  opacity: 0;
`;

const MenuWrapper = styled.div`
  flex: 1;
  align-items: center;
`;

const MenuListItem = styled.li`
  list-style: none;
  margin: 0;
  font-size: 14px;
  letter-spacing: 3px;
  text-align: right;
  padding-left: 64px;
  cursor: pointer;
  color: #5f9ea0;
  font-weight: 600;
  transition: transform 0.3s ease;
  transform-origin: center;
  &:hover {
    transform: scale(1.05);
  }
  @media (max-width: 600px) {
    padding: 32px 0 0 32px;
  }
`;

const Flex = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const HamburgerMenu = styled.img`
  cursor: pointer;
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.05);
  }
`;

const MenuHeader = ({ isMobile }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  useEffect(() => {
    gsap.to("#nav-menu", {
      opacity: 1,
      ease: "power2.inOut",
      delay: 2,
    });
  }, []);

  return (
    <SectionWrapper id='nav-menu'>
      <MenuWrapper>
        {isMobile ? (
          <Flex>
            <HamburgerMenu src={Hamburger} onClick={toggleDrawer} />
          </Flex>
        ) : (
          <Flex>
            <MenuListItem>
              <Link>ABOUT US</Link>
            </MenuListItem>
            <MenuListItem>
              <Link>SERVICES</Link>
            </MenuListItem>
            <MenuListItem>
              <Link>CONTACT</Link>
            </MenuListItem>
          </Flex>
        )}
      </MenuWrapper>
      {isMobile && (
        <Drawer isOpen={isDrawerOpen} onClose={toggleDrawer}>
          <Flex>
            <MenuListItem>
              <Link>ABOUT US</Link>
            </MenuListItem>
            <MenuListItem>
              <Link>SERVICES</Link>
            </MenuListItem>
            <MenuListItem>
              <Link>CONTACT</Link>
            </MenuListItem>
          </Flex>
        </Drawer>
      )}
    </SectionWrapper>
  );
};

export default MenuHeader;
