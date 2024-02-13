import styled from "styled-components";
import { about } from "../data/portfolio";
// import {  socialMedia } from "../data/config";
import { Icon } from "./icons";

const StyledSocialList = styled.ul`
  display: flex;
  align-items: center;
  margin: 0;
  margin-top: 10px;
  padding: 0;
  list-style: none;

  li {
    a {
      padding: 10px;

      &:hover,
      &:focus {
        transform: translateY(-3px);
      }

      svg {
        width: 20px;
        height: 20px;
      }
    }
  }
`;

const Social = () => (
  <StyledSocialList>
    {about.social &&
      about.social.map(({ url, name }, i) => (
        <li key={i}>
          <a href={url} aria-label={name} target="_blank" rel="noreferrer">
            <Icon name={name} />
          </a>
        </li>
      ))}
  </StyledSocialList>
);
export default Social;
