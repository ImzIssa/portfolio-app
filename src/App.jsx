import { useEffect, useState } from "react";
import styled, { ThemeProvider } from "styled-components";
// import reactLogo from "./assets/react.svg";
import { GlobalStyle, theme } from "./styles";
import {
  Nav,
  Footer,
  Hero,
  About,
  Jobs,
  Projects,
  OtherProjects,
  Skills,
  Contact,
} from "./components";
// import viteLogo from "/vite.svg";

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const StyledMainContainer = styled.main`
  counter-reset: section;
`;

function App() {
  const isHome = location.pathname === "/";
  const [isLoading, setIsLoading] = useState(isHome);

  // Sets target="_blank" rel="noopener noreferrer" on external links
  const handleExternalLinks = () => {
    const allLinks = Array.from(document.querySelectorAll("a"));
    if (allLinks.length > 0) {
      allLinks.forEach((link) => {
        if (link.host !== window.location.host) {
          link.setAttribute("rel", "noopener noreferrer");
          link.setAttribute("target", "_blank");
        }
      });
    }
  };

  useEffect(() => {
    if (isLoading) {
      return;
    }

    if (location.hash) {
      const id = location.hash.substring(1); // location.hash without the '#'
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView();
          el.focus();
        }
      }, 0);
    }

    handleExternalLinks();
  }, [isLoading]);
  return (
    <>
      <div id="app">
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <StyledContent>
            <Nav isHome={isHome} />
            {/* <Social isHome={isHome} /> */}
            {/* <Email isHome={isHome} /> */}

            <div id="content">
              <StyledMainContainer className="fillHeight">
                <div>
                  <Hero />
                  <About />
                  <Jobs />
                  <Projects />
                  <OtherProjects />
                  <Skills />
                  <Contact />
                  <Footer />
                </div>
              </StyledMainContainer>
              {/* {children} */}
            </div>
          </StyledContent>
        </ThemeProvider>
      </div>
    </>
  );
}

export default App;
