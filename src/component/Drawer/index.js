import React from "react";
import styled from "@emotion/styled";

const DrawerWrapper = styled.div`
  position: fixed;
  z-index: 10;
  overflow: hidden;
  top: 0;
  bottom: 0;
  left: ${(props) => (props.isOpen ? 0 : "-100%")};
  right: ${(props) => (props.isOpen ? 0 : "100%")};
  transition: all 0.3s ease;
  display: flex;
`;

const DrawerContent = styled.div`
  flex: 1;
  padding: 20px;
  height: inherit;
  background: white;
  box-shadow: 2px 2px 10px 10px rgba(0, 0, 0, 0.15);
`;

const DrawerClose = styled.div`
  width: 20%;
  height: inherit;
`;

const Drawer = ({ children, onClose, isOpen }) => (
  <DrawerWrapper isOpen={isOpen}>
    <DrawerContent>{children}</DrawerContent>
    <DrawerClose onClick={onClose} />
  </DrawerWrapper>
);

export default Drawer;
