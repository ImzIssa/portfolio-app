import styled, { css } from "styled-components";
import { skills as _skills } from "../../data/portfolio";

const StyledSkillsSection = styled.section`
  .content {
    font-weight: 300;
    font-size: 1rem;
    width: 100%;

    p {
      margin-top: 0;
      margin-bottom: 25px;
    }

    .underline-link {
      position: relative;
      display: inline-block;

      &:after {
        position: absolute;
        top: 100%;
        left: 0;
        width: 100%;
        height: 1px;
        background: $black;
        content: "";
        opacity: 0;
        transition: height 0.3s, opacity 0.3s, transform 0.3s;
        transform: translateY(-5px);
      }

      &:hover,
      &:focus {
        &:after {
          height: 2px;
          border-radius: 3px;
          opacity: 1;
          transform: translateY(-2px);
        }
      }
    }
  }
`;

const StyledSkillsDiv = styled.div`
    display: flex;
    justify-content: space-between;
    padding-left: 50px;

    @media (max-width: 400px) {
      padding-left: 30px;
    }

    ul {
      ${({ theme }) => theme.mixins.fancyList};
      li {
        color: var(--light-accent);
      }
    }

    @media (max-width: 768px) {
      flex-wrap: wrap;
    }
    
    .category {
      @media (max-width: 768px) {
        width: 47%;
        margin-right: 5px;
        margin-bottom: 25px;
      }
      
      .label {
        font-weight: 700;
        text-transform: uppercase;
      }

      .item {
        margin: 3px 0;
        font-size: 0.9rem;
      }
    }
  }
`;

const Skills = () => {
  const { languages, frameworks, tools, design } = _skills;
  return (
    <StyledSkillsSection id="skills">
      <h2 className="numbered-heading">Skills</h2>
      <div className="content">
        <p>
          Here are a few of the technologies I've learnt over the last years and
          I have experience with:
        </p>
        <StyledSkillsDiv>
          <div className="category">
            <div className="label">Languages</div>
            <ul>
              {languages.map((language, idx) => (
                <li key={idx} className="item">
                  {language}
                </li>
              ))}
            </ul>
          </div>
          <div className="category">
            <div className="label">Frameworks</div>
            <ul>
              {frameworks.map((framework, idx) => (
                <li key={idx} className="item">
                  {framework}
                </li>
              ))}
            </ul>
          </div>
          <div className="category">
            <div className="label">Tools</div>
            <ul>
              {tools.map((tool, idx) => (
                <li key={idx} className="item">
                  {tool}
                </li>
              ))}
            </ul>
          </div>
        </StyledSkillsDiv>
      </div>
    </StyledSkillsSection>
  );
};

export default Skills;
