import { useEffect, useState } from "react";
import styled, { ThemeProvider } from "styled-components";
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

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

function App() {
  const isHome = location.pathname === "/";
  const [isLoading, _] = useState(isHome);

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
            <>
              <main className="fillHeight">
                <Hero />
                <About />
                <Jobs />
                <Projects />
                <OtherProjects />
                <Skills />
                <Contact />
                <Footer />
              </main>
            </>
          </StyledContent>
        </ThemeProvider>
      </div>
    </>
  );
}

export default App;
