import * as React from "react";

import { useStaticQuery, graphql } from "gatsby";

import { GlobalStyle } from "src/styles/GlobalStyles";

import * as S from "./Layout.styles";

import { ISite } from "./Layout.types";

const Layout: React.FC = ({ children }) => {
  const data: ISite = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <GlobalStyle />
      <S.Main>{children}</S.Main>
    </>
  );
};

export { Layout };
