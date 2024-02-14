import { useEffect, useRef } from "react";
import styled from "styled-components";
import { srConfig } from "../../data/config";
import { contact } from "../../data/portfolio";
import sr from "../../utils/sr";
import { usePrefersReducedMotion } from "../../hooks";

const StyledContactSection = styled.section`
  max-width: 600px;
  margin: 0 auto 100px;
  text-align: center;

  @media (max-width: 768px) {
    margin: 0 auto 50px;
  }

  .overline {
    display: block;
    margin-bottom: 20px;
    color: var(--accent);
    font-family: var(--font-mono);
    font-size: var(--fz-md);
    font-weight: 400;

    &:before {
      bottom: 0;
      font-size: var(--fz-sm);
    }

    &:after {
      display: none;
    }
  }

  .title {
    font-size: clamp(40px, 5vw, 60px);
  }

  p {
    color: var(--light-accent);

    &:last-of-type {
      color: var(--accent);
    }
  }

  .email-link {
    ${({ theme }) => theme.mixins.bigButton};
    margin-top: 50px;
  }
`;

const Contact = () => {
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
    <StyledContactSection id="contact" ref={revealContainer}>
      <h2 className="title">Contact Me</h2>

      <p>
        Are you in need of a dedicated developer to bring your project to life?
        Skilled in ReactJs for Frontend development, Flutter for mobile
        development, Laravel and NodeJS for backend and API and Python for web
        scraping and automation, I am ready to tackle your project
      </p>

      <p>Let's talk</p>

      <a className="email-link" href={`mailto:${contact.email}`}>
        Email
      </a>
    </StyledContactSection>
  );
};

export default Contact;
