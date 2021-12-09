import * as React from "react";
import styled from "@emotion/styled";

import Layout from "../layouts";
import Seo from "../layouts/common/seo";
import Card from "../component/Card";
import products from "../constants/products";

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  flex-direction: column;
  overflow: auto;
  min-height: 100vh;
`;

const Title = styled.span`
  font-size: 48px;
  font-weight: bold;
  color: #5f9ea0;
`;

const ProductWrapper = styled.div`
  display: flex;
  width: 100%;
  max-width: 960px;
  align-items: center;
  margin-top: 120px;
  margin-bottom: 120px;
  @media (max-width: 600px) {
    flex-direction: column;
  },
`;

const UnderMaintenence = styled.div`
  font-size: 24px;
  font-weight: 400;
  color: #8fbc8f;
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
        <ProductWrapper>
          {products.map((product) => (
            <Card product={product} key={product.id} />
          ))}
        </ProductWrapper>
        <UnderMaintenence>Website Under Maintenance</UnderMaintenence>
      </Wrapper>
    </Layout>
  );
};

export default IndexPage;
