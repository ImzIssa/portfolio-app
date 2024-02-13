import { useState, useEffect } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import styled from "styled-components";
import { navDelay, loaderDelay } from "../../utils";
import { usePrefersReducedMotion } from "../../hooks";
import { about } from "../../data/portfolio";
import Social from "../Social";
import img from "/me.jpg";

const StyledHeroSection = styled.section`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;
  height: 100vh;
  padding: 0;

  @media (max-height: 700px) and (min-width: 700px), (max-width: 360px) {
    height: auto;
    padding-top: var(--nav-height);
  }

  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;

    @media (max-width: 768px) {
      display: block;
    }


  h1 {
    margin: 0 0 30px 4px;
    color: var(--dark-accent);
    font-family: var(--font-mono);
    font-size: clamp(var(--fz-sm), 5vw, var(--fz-md));
    font-weight: 400;

    @media (max-width: 480px) {
      margin: 0 0 20px 2px;
    }
  }

  h3 {
    margin-top: 5px;
    color: var(--light-accent);
    line-height: 0.9;
  }

  p {
    margin: 20px 0 0;
    max-width: 540px;
  }

  .email-link {
    ${({ theme }) => theme.mixins.bigButton};
    margin-top: 40px;
  }
`;

const StyledPic = styled.div`
  position: relative;
  max-width: 300px;

  @media (max-width: 768px) {
    display: none;
  }

  .wrapper {
    ${({ theme }) => theme.mixins.boxShadow};
    display: block;
    position: relative;
    width: 100%;
    border-radius: var(--border-radius);
    background-color: var(--accent);

    &:hover,
    &:focus {
      outline: 0;
      transform: translate(-4px, -4px);

      &:after {
        transform: translate(8px, 8px);
      }

      .img {
        filter: none;
        mix-blend-mode: normal;
      }
    }

    .img {
      position: relative;
      border-radius: var(--border-radius);
      mix-blend-mode: multiply;
      filter: grayscale(100%) contrast(1);
      transition: var(--transition);
    }

    &:before,
    &:after {
      content: "";
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: var(--border-radius);
      transition: var(--transition);
    }

    &:before {
      top: 0;
      left: 0;
      background-color: var(--primary);
      mix-blend-mode: screen;
    }

    &:after {
      border: 2px solid var(--accent);
      top: 14px;
      left: 14px;
      z-index: -1;
    }
  }
`;

const Hero = () => {
  const [isMounted, setIsMounted] = useState(false);
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
      className="email-link"
      href="https://www.newline.co/courses/build-a-spotify-connected-app"
      target="_blank"
      rel="noreferrer"
    >
      Check out my course!
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
          )}
        </TransitionGroup>
      )}
    </StyledHeroSection>
  );
};

export default Hero;
