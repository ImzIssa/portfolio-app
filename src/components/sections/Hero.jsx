/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import styled from "styled-components";
import { navDelay, loaderDelay } from "../../utils";
import { usePrefersReducedMotion } from "../../hooks";
import { about } from "../../data/portfolio";
import Social from "../Social";
import img from "/illustration.svg";

// height: 100vh;
// align-items: flex-start;
// flex-direction: column;
const StyledHeroSection = styled.section`
  ${({ theme }) => theme.mixins.flexCenter};
  min-height: 100vh;
  padding: 0;
  margin: 0;
  justify-content: start;

  @media (max-height: 700px) and (min-width: 700px), (max-width: 360px) {
    height: auto;
    padding-top: var(--nav-height);
  }

  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 80px;
    // justify-items: end;

    @media (max-width: 768px) {
      display: block;
    }

    h1 {
      margin-left: 4px;
      color: var(--light-accent);
      font-family: var(--font-mono);
      font-size: clamp(var(--fz-lg), 5vw, var(--fz-xl));
      font-weight: 400;
    }

    p {
      margin: 10px 0 0;
      max-width: 540px;
      color: var(--light-accent);
    }

    .resume-link {
      ${({ theme }) => theme.mixins.bigButton};
      margin-top: 40px;
    }
  }
`;

const StyledPic = styled.div`
  position: relative;
  max-width: 480px;
  // color: red;

  @media (max-width: 768px) {
    display: none;
  }
`;

const Hero = () => {
  const [isMounted, setIsMounted] = useState(true);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    const timeout = setTimeout(() => setIsMounted(true), navDelay);
    return () => clearTimeout(timeout);
  }, []);

  const one = <h1>Hi, my name is</h1>;
  const two = <h2 className="big-heading">{about.name}</h2>;
  const three = (
    <>
      <p>{about.summary}</p>
    </>
  );
  const four = (
    <a
      className="resume-link"
      href="https://www.newline.co/courses/build-a-spotify-connected-app"
      target="_blank"
      rel="noreferrer"
    >
      Resume
    </a>
  );
  const five = <Social />;

  const items = [one, two, three, four, five];

  return (
    <StyledHeroSection>
      {prefersReducedMotion ? (
        <div className="inner">
          <div>
            {items.map((item, i) => (
              <div key={i}>{item}</div>
            ))}
          </div>
          <StyledPic>
            <div className="wrapper">
              <img
                src={img}
                alt="<NAME>"
                className="img"
                loading="lazy"
                width={500}
              />
            </div>
          </StyledPic>
        </div>
      ) : (
        <TransitionGroup component={null}>
          {isMounted && (
            <div className="inner">
              <div>
                {items.map((item, i) => (
                  <CSSTransition
                    key={i}
                    classNames="fadeup"
                    timeout={loaderDelay}
                    nodeRef={null}
                  >
                    <div style={{ transitionDelay: `${i + 1}00ms` }}>
                      {item}
                    </div>
                  </CSSTransition>
                ))}
              </div>
              <StyledPic>
                <img src={img} alt="illustration" loading="lazy" width={500} />
              </StyledPic>
            </div>
          )}
        </TransitionGroup>
      )}
    </StyledHeroSection>
  );
};

export default Hero;
