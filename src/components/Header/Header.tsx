import { Link } from "react-router-dom";
import {
  DiscorContainer,
  HeaderContainer,
  LinksContainer,
  MenuContent,
  MenuList,
  MenuRoot,
  MenuTrigger,
  RocketContainer,
} from "./styles";

import * as NavigationMenu from "@radix-ui/react-navigation-menu";

export function Header() {
  return (
    <HeaderContainer>
      <h1>#boraCodar</h1>
      <LinksContainer>
        <Link to="/">
          <li>Home</li>
        </Link>
        <MenuRoot>
          <MenuList>
            <NavigationMenu.Item>
              <MenuTrigger>
                <li>Desafios</li>
              </MenuTrigger>
              <MenuContent>
                <ul className="Feature">
                  <Link to="/challenges/week01">
                    <li>Semana 01</li>
                  </Link>
                </ul>
                <NavigationMenu.Link />
              </MenuContent>
            </NavigationMenu.Item>
          </MenuList>
        </MenuRoot>

        <li></li>
      </LinksContainer>

      <RocketContainer>
        <a href="https://app.rocketseat.com.br/" target="_blank">
          <img src="/rocket-logo.svg" />
        </a>
        <DiscorContainer
          target="_blank"
          href="https://discord.com/oauth2/authorize?client_id=949331074079662180&redirect_uri=https%3A%2F%2Fdiscord-service.rocketseat.dev%2Fsignin%2Fdynamic-callback&response_type=code&scope=identify+email+guilds.join&state=bora-codar"
        >
          <img src="/logo-discord.svg" />
          <p>Comunidade</p>
        </DiscorContainer>
      </RocketContainer>
    </HeaderContainer>
  );
}
