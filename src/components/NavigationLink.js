import styled from "styled-components";
import { theme } from "../styles/theme";

import Link from "next/link";

export const NavigationLink = styled(Link)`
  font-family: "Roboto", sans-serif;
  font-size: 2.5rem;
  font-weight: bold;
  margin: 5px 0;
  text-align: left;
  width: 100%;
  text-transform: lowercase;
  background: -webkit-linear-gradient(
    0deg,
    ${(props) => (props.active ? theme.colors.pink : theme.colors.void)},
    ${(props) => (props.active ? theme.colors.lime : theme.colors.pink)} 25%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-transition: 500ms;
  background-size: 100%;
  background-position: left;

  &:first-child {
    margin: 0 0 50px;
  }

  &:hover {
    cursor: pointer;
    background-size: 220%;
    background-position: right;
  }
`;
