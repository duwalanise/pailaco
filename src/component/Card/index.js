import React, { useEffect } from "react";
import styled from "@emotion/styled";
import { gsap } from "gsap";
import underConstruction from "../../images/icon.png";

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  flex-direction: column;
  min-height: 300px;
  margin: 0 16px;
  padding: 16px;
  background: #ffffff;
  border-radius: 8px;
  transition: box-shadow 0.5s ease;
  box-shadow: 2px 2px 25px 5px rgb(0 0 0 / 15%);
  &:hover {
    box-shadow: 2px 2px 25px 5px rgb(0 0 0 / 30%);
  }
  @media (max-width: 600px) {
    width: 80%;
  }
  a {
    text-decoration: none;
    color: #6495ed;
  }
`;

const Image = styled.img`
  height: 200px;
`;

const Contact = styled.div`
  width: 100%;
`;

const Card = ({ product }) => {
  useEffect(() => {
    gsap.to(`#product${product.id}`, {
      transform: `translateY(${50 * Number(product.id)}px)`,
      delay: 2,
    });
  });
  return (
    <Wrapper id={`product${product.id}`}>
      <h2>{product.name}</h2>
      <Image src={underConstruction} />
      <Contact>
        <div>
          <span>Contact: </span>
          <a href={`tel:${product.contact}`}>{product.contact}</a>
        </div>
        <div>
          <span>Email: </span>
          <a href={`mailto:${product.email}`}>{product.email}</a>
        </div>
      </Contact>
    </Wrapper>
  );
};

export default Card;
