/* eslint-disable react/no-unescaped-entities */
import { useEffect, useRef } from "react";
import styled from "styled-components";
import { srConfig } from "../../data/config";
import { skills } from "../../data/portfolio";
import sr from "../../utils/sr";
import { usePrefersReducedMotion } from "../../hooks";
import img from "/me.jpg";

const StyledAboutSection = styled.section`
  .inner {
    display: grid;
    align-items: center;
    justify-items: end;
    grid-template-columns: 3fr 2fr;
    grid-gap: 0 80px;

    @media (max-width: 768px) {
      display: block;
    }
  }
`;
const StyledText = styled.div`
  div {
    margin: 0;
    padding: 0;
  }
  ul {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    grid-gap: 10px 40px;
    padding: 0;
    margin-top: 20px;
    overflow: hidden;
    list-style: none;

    li {
      position: relative;
      padding-left: 15px;
      font-family: var(--font-mono);
      font-size: var(--fz-xs);

      &:before {
        content: "⁕";
        position: absolute;
        left: 0;
        color: var(--accent);
        font-size: var(--fz-sm);
        line-height: 12px;
        padding-top: 2px;
      }
    }
  }
`;
const StyledPic = styled.div`
  position: relative;
  max-width: 300px;

  @media (max-width: 768px) {
    margin: 50px auto 0;
    width: 70%;
  }

  .wrapper {
    ${({ theme }) => theme.mixins.boxShadow};
    display: block;
    position: relative;
    width: 100%;
    border-radius: var(--border-radius);

    &:hover,
    &:focus {
      outline: 0;
      transform: translate(4px, -4px);

      &:after {
        transform: translate(8px, 8px);
      }
    }

    .img {
      position: relative;
      border-radius: var(--border-radius);
    }
  }
`;

const About = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <StyledAboutSection id="about" ref={revealContainer}>
      <h2 className="numbered-heading">About Me</h2>

      <div className="inner">
        <StyledText>
          <div>
            <p>
              Hey there! I'm Imran Issa, a <strong>Junior Developer</strong>{" "}
              with three years of coding experience and a fresh{" "}
              <strong>Bachelor's degree in IT</strong>.
            </p>

            <p>
              My journey as <strong>self taught programmer</strong> started in
              <strong>2020</strong>. I started learning how to code by myself in{" "}
              <strong>Java</strong>
              first, then moved on to <strong>Python</strong> then{" "}
              <strong>JavaScript</strong> and recently <strong>Flutter</strong>.
              Along the way, I learned about lots of other languages, such PHP
              and C# and tools like Linux trying out different ways of doing
              things. Its been an exciting journey of exploring and
              experimenting as I go. I've discovered that with development,
              there's always something new to learn and discover, and it has
              become my passion and I'm always excited to tackle new challenges
              and discover what else I can create.
            </p>

            <p>
              To expand my skillset, lately I’ve been learning the following
              technologies :
            </p>
          </div>
          <ul>
            {skills.learning &&
              skills.learning.map((skill, i) => <li key={i}>{skill}</li>)}
          </ul>
        </StyledText>

        <StyledPic>
          <div className="wrapper">
            <img
              src={img}
              alt="<NAME>"
              className="img"
              loading="lazy"
              // width={500}
            />
          </div>
        </StyledPic>
      </div>
    </StyledAboutSection>
  );
};

export default About;
