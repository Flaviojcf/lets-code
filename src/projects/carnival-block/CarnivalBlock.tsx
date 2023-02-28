import { BlocksComponent } from "./components/BlocksComponent/BlocksComponent";
import { useState, useEffect } from "react";
import {
  Container,
  FilterButton,
  FilterByCity,
  FilterByName,
  HeaderCarnival,
  HeaderContent,
  OptionGroudContainer,
  SearchHeaderContent,
  TextHeaderContent,
} from "./styles";

import dbCarnival from "./db/carnival.json";

export function CarnivalBlockProject() {
  const [text, setText] = useState("");
  const [filter, setFilter] = useState("");

  function handleSearch() {
    setFilter(text);
  }

  function teste() {}

  return (
    <Container>
      <HeaderCarnival>
        <img src="/assets/carnival-block/images/ilustra-01.png" alt="" />
        <img src="/assets/carnival-block/images/ilustra-02.png" alt="" />

        <HeaderContent>
          <TextHeaderContent>
            <p>FIND YOUR BLOCK</p>
            <h1>
              Encontre os <strong>melhores blocos</strong> de carnaval de 2023
            </h1>
          </TextHeaderContent>
          <SearchHeaderContent>
            <FilterByName>
              <input
                type="text"
                placeholder="Pesquise por nome"
                onChange={(e) => setText(e.target.value)}
                value={text}
              />
            </FilterByName>
            <FilterByCity onClick={teste}>
              <p>Selecione uma cidade</p>
              <OptionGroudContainer>
                {dbCarnival.map((carnivalLocale) => {
                  return (
                    <OptionGroudContainer>
                      {carnivalLocale.locale}
                    </OptionGroudContainer>
                  );
                })}
              </OptionGroudContainer>
            </FilterByCity>

            <FilterButton onClick={handleSearch}>BUSCAR AGORA</FilterButton>
          </SearchHeaderContent>
        </HeaderContent>
      </HeaderCarnival>
      <BlocksComponent filter={filter} />
    </Container>
  );
}
