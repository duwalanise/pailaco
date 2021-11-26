import * as React from "react";
import styled from "@emotion/styled";

import Layout from "../layouts";
import Seo from "../layouts/common/seo";
import underConstruction from "../images/underConstruction.png";

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  flex-direction: column;
`;

const Title = styled.span`
  font-size: 48px;
  font-weight: bold;
  color: #5f9ea0;
`;

const Image = styled.img`
  margin: -42px;
  max-width: 90%;
`;

const UnderMaintenence = styled.div`
  font-size: 24px;
  font-weight: 400;
  color: #888;
  text-transform: uppercase;
`;

// markup
const IndexPage = () => {
  return (
    <Layout>
      <Seo title='Construction Design | Development' />
      <Wrapper>
        <p>
          <Title>Paila</Title> a step towards quality.
        </p>
        <Image src={underConstruction} />
        <UnderMaintenence>Website Under Construction</UnderMaintenence>
      </Wrapper>
    </Layout>
  );
};

export default IndexPage;
