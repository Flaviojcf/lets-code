import {
  Blocks,
  BlocksContainer,
  ButtonsTitleBLock,
  TitleBlockContainer,
} from "./styles";
import { useState, useEffect } from "react";

import dbCarnival from "../../db/carnival.json";
import { BlockComponent } from "../BlockComponent/BlockComponent";

interface dbCarnivalType {
  image: string;
  description: string;
  locale: string;
  title: string;
}

interface BlocksComponentInterface {
  filter: string;
  locale: string;
}

export function BlocksComponent({ filter, locale }: BlocksComponentInterface) {
  const [carnivalBlocks, setCarnivalBlokcs] = useState<dbCarnivalType[]>([]);
  const [isPurple, setIsPurple] = useState("Lista");


  useEffect(() => {
    setCarnivalBlokcs(dbCarnival);
    handleSearch();
  }, [filter, locale]);

  function handleSearch() {
    if (locale !== "Selecione uma cidade") {
      const db = dbCarnival.filter((db) => db.locale === locale);
      const dbTeste = db.filter((db) =>
        db.title.toUpperCase().includes(filter.toUpperCase())
      );
      setCarnivalBlokcs(dbTeste);
    } else {
      const dbFilter = dbCarnival.filter((db) =>
        db.title.toUpperCase().includes(filter.toUpperCase())
      );
      setCarnivalBlokcs(dbFilter)
    }
  }

  return (
    <BlocksContainer>
      <TitleBlockContainer>
        <h1>Blocos recomendados</h1>

        <ButtonsTitleBLock isPurple={isPurple}>
          <p onClick={() => setIsPurple("Lista")}>Lista</p>
          <p onClick={() => setIsPurple("Mapa")}>Mapa</p>
        </ButtonsTitleBLock>
      </TitleBlockContainer>
      <Blocks>
        {carnivalBlocks.map((carnival: dbCarnivalType) => {
          return (
            <BlockComponent
              key={carnival.title}
              description={carnival.description}
              image={carnival.image}
              locale={carnival.locale}
              title={carnival.title}
            />
          );
        })}
      </Blocks>
    </BlocksContainer>
  );
}
