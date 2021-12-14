import React, { useEffect } from "react";
import styled from "@emotion/styled";
import { gsap } from "gsap";
import Card from "../../component/Card";
import products from "../../constants/products";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  opacity: 0;
  min-height: 100vh;
  justify-content: center;
  @media (max-width: 600px) {
    justify-content: flex-start;
  }
`;

const ProductWrapper = styled.div`
  display: flex;
  width: 100%;
  max-width: 960px;
  align-items: center;
  @media (max-width: 600px) {
    flex-direction: column;
    margin-top: 140px;
    margin-bottom: 120px;
  }
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
