import styled from "styled-components";

const StyledLogo = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
  font-size: clamp(26px, 20vw, var(--fz-heading));

  span {
    color: var(--accent);

    &:last-child {
      margin-left: 1px;
      color: var(--dark-accent);
    }
  }

  .abr {
    display: none;
  }

  @media (max-width: 900px) {
    .full {
      display: none;
    }

    .abr {
      display: inline-block;
    }
  }
`;

const IconLogo = () => (
  <StyledLogo>
    <div className="abr">
      <span>I</span>
      <span>I</span>
    </div>
    <div className="full">
      <span>Imran</span>
      <span>Issa</span>
    </div>
  </StyledLogo>
);

export default IconLogo;
