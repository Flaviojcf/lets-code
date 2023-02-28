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
}

export function BlocksComponent({ filter }: BlocksComponentInterface) {
  const [carnivalBlocks, setCarnivalBlokcs] = useState<dbCarnivalType[]>([]);

  useEffect(() => {
    setCarnivalBlokcs(dbCarnival);
    handleSearch();
  }, [filter]);

  function handleSearch() {
    const db = dbCarnival.filter((db) => db.title.toUpperCase().includes(filter.toUpperCase()));
    setCarnivalBlokcs(db);
  }

  return (
    <BlocksContainer>
      <TitleBlockContainer>
        <h1>Blocos recomendados</h1>

        <ButtonsTitleBLock>
          <p>Lista</p>
          <p>Mapa</p>
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
