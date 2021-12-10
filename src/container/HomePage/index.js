import React, { useEffect } from "react";
import styled from "@emotion/styled";
import { gsap } from "gsap";
import Card from "../../component/Card";
import products from "../../constants/products";

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  flex-direction: column;
  overflow: auto;
  opacity: 0;
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

const HomePage = () => {
  useEffect(() => {
    gsap.to(`#product-wrapper`, {
      opacity: 1,
      duration: 1,
      ease: "sine",
      delay: 2,
    });
  });
  return (
    <Wrapper id='product-wrapper'>
      <ProductWrapper>
        {products.map((product) => (
          <Card product={product} key={product.id} />
        ))}
      </ProductWrapper>
    </Wrapper>
  );
};

export default HomePage;
