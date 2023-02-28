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
  const [filterLocale, setFilterLocale] = useState("Selecione uma cidade")
  const [isHidden, setIsHidden] = useState(true)
  const [locale, setLocale] = useState('')

  function handleSearch() {
    setFilter(text);
    if(locale) {
      setFilterLocale(locale);
    } else {
      setFilterLocale("Selecione uma cidade");
    }
  }



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
            <FilterByCity isHidden={isHidden} onClick={()=>setIsHidden(!isHidden)}>
              {locale ? <p>{locale}</p> : <p>Selecione uma cidade</p>}
              <OptionGroudContainer isHidden={isHidden}>
              <option onClick={()=>setLocale('Selecione uma cidade')}>Selecione uma cidade</option>
                <option onClick={()=>setLocale('São Paulo - SP')}>São Paulo - SP</option>
                <option onClick={()=>setLocale('Curitiba - PR')}>Curitiba - PR</option>
                <option onClick={()=>setLocale('Salvador - BA')}>Salvador - BA</option>
                <option onClick={()=>setLocale('Rio de Janeiro - RJ')}>Rio de Janeiro - RJ</option>
                <option onClick={()=>setLocale('Porto Alegre - RS')}>Porto Alegre - RS</option>
              </OptionGroudContainer>
            </FilterByCity>

            <FilterButton onClick={handleSearch}>BUSCAR AGORA</FilterButton>
          </SearchHeaderContent>
        </HeaderContent>
      </HeaderCarnival>
      <BlocksComponent filter={filter} locale={filterLocale} />
    </Container>
  );
}
