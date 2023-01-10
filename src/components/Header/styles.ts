import styled from "styled-components";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";

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

  > a {
    transition: all ease 0.2s;
    &:hover {
      color: ${(props) => props.theme.colors["purple-600"]};
    }
  }
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

//Radix

export const MenuRoot = styled(NavigationMenu.Root)`
  display: flex;
  padding: 0 2rem;
  position: relative;
`;

export const MenuList = styled(NavigationMenu.List)`
  display: flex;
  gap: 1rem;
  width: 12rem;
  text-decoration: none;
  list-style: none;
`;

export const MenuTrigger = styled(NavigationMenu.Trigger)`
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 1rem;

  font-family: "Epilogue", sans-serif;
  font-size: 16px;

  color: white;
  cursor: pointer;
  background: ${(props) => props.theme.colors["black-700"]};

  > li {
    color: white;
    transition: all ease 0.2s;

    &:hover {
      color: ${(props) => props.theme.colors["purple-600"]};
    }
  }
`;

export const MenuContent = styled(NavigationMenu.Content)`
  position: absolute;

  > ul {
    border: 1px solid white;
    box-shadow: 10px 23px 39px -17px rgba(0, 0, 0, 0.75);

    list-style: none;

    background: ${(props) => props.theme.colors["Almost-White"]};
    border-radius: 12px;

    display: flex;
    flex-direction: column;
    padding: 1rem 1rem;
    justify-content: center;

    gap: 1rem;

    margin-top: 1rem;

    > a > li {
      display: flex;
      gap: 1rem;
      cursor: pointer;
      color: ${(props)=>props.theme.colors["black-700"]};

      &:hover {
        color: ${(props) => props.theme.colors["purple-100"]};
      }
    }
  }
`;
