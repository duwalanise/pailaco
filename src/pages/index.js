import * as React from "react";
import styled from "@emotion/styled";

import Layout from "../layouts";
import Seo from "../layouts/common/seo";
import Header from "../component/Header";
import HomePage from "../container/HomePage";

// markup
const IndexPage = () => {
  return (
    <Layout>
      <Seo title='Construction Design | Development' />
      <Header />
      <HomePage />
    </Layout>
  );
};

export default IndexPage;
