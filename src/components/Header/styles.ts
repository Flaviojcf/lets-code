import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;

  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 5.1875rem;

  padding: 2rem;

  border-top: 0.1px solid #323238;
  border-bottom: 0.1px solid #323238;
  background: ${(props) => props.theme.colors["black-700"]};

  > h1 {
    color: ${(props) => props.theme.colors["purple-100"]};
  }

  @media screen and (max-width: 768px) {
    gap: 1.5rem;
  }
`;

export const RocketContainer = styled.div`
  display: flex;

  gap: 1.75rem;
  align-items: center;

  > img {
    cursor: pointer;
  }

  justify-content: space-between;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const LinksContainer = styled.ul`
  display: flex;
  height: 100%;

  gap: 2.5rem;

  > li {
    color: white;
    cursor: pointer;
    height: 100%;
    transition: all ease 0.2s;

    &:hover {
      color: ${(props) => props.theme.colors["purple-600"]};
    }

    > a {
      transition: all ease 0.2s;
      &:hover {
        color: ${(props) => props.theme.colors["purple-600"]};
      }
    }
  }
`;

export const DiscorContainer = styled.a`
  display: flex;
  border-radius: 5px;

  align-items: center;
  justify-content: center;
  gap: 0.75rem;

  width: 8.775rem;
  height: 2.625rem;

  color: white;
  background: ${(props) => props.theme.colors["black-200"]};

  cursor: pointer;

  transition: all ease 0.2s;

  &:hover {
    background: ${(props) => props.theme.colors["purple-600"]};
  }
`;
