import styled from "styled-components";
import { theme } from "../styles/theme";

export const PostList = styled.section`
  padding: 3em 1em;
  margin: 10px 20px;
  max-height: 100vh;
  overflow-y: scroll;
`;

export const PostPreview = styled.article`
  font-family: "Roboto", sans-serif;
  font-size: ${theme.text.fontSize.tiny};
  font-family: sans-serif;
  color: ${theme.colors.lime};

  p {
    max-width: 80%;
    line-height: 1.3;

    ::selection {
      color: ${theme.colors.white};
      background: ${theme.colors.purple};
    }
  }
`;

export const PostTitle = styled.h1`
  color: ${theme.colors.offwhite};
  font-size: ${theme.text.fontSize.small};

  ::selection {
      color: ${theme.colors.pink};
      background: ${theme.colors.lime};
    }
`;
