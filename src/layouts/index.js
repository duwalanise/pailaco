import * as React from "react";
import { ThemeProvider } from "@emotion/react";
import styled from "@emotion/styled";

import { spacing, font } from "./theme/theme";
import MouseFollow from "../component/MouseFollow";
import "../main.css";

const Wrapper = styled.main`
  width: 100vw;
  display: flex;
  overflow-x: hidden;
  background: #f5f5dc;
`;

const Layout = ({ children, ...props }) => {
  return (
    <ThemeProvider theme={{ spacing, font }}>
      <Wrapper>
        <MouseFollow />
        {children}
      </Wrapper>
    </ThemeProvider>
  );
};

export default Layout;
