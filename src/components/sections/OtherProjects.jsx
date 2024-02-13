import styled, { css } from "styled-components";
import { projects } from "../../data/portfolio";
import { Icon } from "../icons";

const StyledProjectsContent = styled.div`
  font-weight: 300;
  font-size: 1rem;
  width: 100%;
  max-width: 650px;
  padding-left: 50px;
`;
const StyledProject = styled.div`
  max-width: 600px;
  background-color: var(--dark-accent);
  border-radius: var(--border-radius);
  padding: 1rem;
  margin-bottom: 50px;

  .project-header {
    ${({ theme }) => theme.mixins.flexBetween};
    margin-bottom: 10px;

    .name {
      font-size: var(--fz-xl);
      font-weight: 400px;
    }

    .project-links {
      display: flex;
      align-items: center;
      color: var(--light-accent);

      a {
        ${({ theme }) => theme.mixins.flexCenter};
        padding: 10px;

        &.external {
          svg {
            width: 22px;
            height: 22px;
            margin-top: -4px;
          }
        }

        svg {
          width: 20px;
          height: 20px;
        }
      }
    }
  }

  p {
    font-size: 0.9rem;
    margin-bottom: 20px;
    font-size: var(--fz-lg);
    color: var(--light-accent);
  }

  .used {
    .item {
      display: inline-block;
      margin: 3px 3px 3px 0;
      font-size: 0.75rem;
      font-weight: 700;
      padding: 2px 7px;
      border-radius: 3px;
      color: var(--accent);
      border: 1px solid var(--light-accent);
      background: transparent;

      &:first-of-type {
        margin-left: 0;
      }
    }
  }
`;

const OtherProjects = () => {
  return (
    <section>
      <h2 className="numbered-heading">Other Projects</h2>
      <StyledProjectsContent>
        {projects.others.map((project, idx) => (
          <StyledProject key={idx}>
            <div className="project-header">
              <div className="name">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                  className="arrow-link"
                >
                  {project.name}
                </a>
              </div>
              <div className="project-links">
                {project.code && (
                  <a href={project.code} aria-label="GitHub Link">
                    <Icon name="GitHub" />
                  </a>
                )}
                {/* {external && !cta && (
                        <a href={external} aria-label="External Link" className="external">
                          <Icon name="External" />
                        </a>
                      )} */}
              </div>
            </div>
            <p>{project.description}</p>
            <div className="used">
              {project.used.map((el, id) => (
                <span key={id} className="item">
                  {el}
                </span>
              ))}
            </div>
          </StyledProject>
        ))}
      </StyledProjectsContent>
    </section>
  );
};

export default OtherProjects;
