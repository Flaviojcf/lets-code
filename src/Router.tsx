import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { BoardingPass } from "./pages/BoardingPass/BoardingPass";
import { ButtonsAndCursors } from "./pages/ButtonsAndCursors/ButtonsAndCursors";
import { Calculator } from "./pages/Calculator/Calculator";
import { CardProductPage } from "./pages/CardProductPage";
import { CarnivalBlock } from "./pages/CarnivalBlock/CarnivalBlock";

import { Home } from "./pages/Home/Home";
import { MusicPlayer } from "./pages/MusicPlayer";
import { ChatComponent } from "./projects/chat/ChatComponent";

export function Router() {
  return (
    <Routes>
      <Route element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/challenges/week01" element={<MusicPlayer />} />
        <Route path="/challenges/week02" element={<CardProductPage />} />
        <Route path="/challenges/week03" element={<ButtonsAndCursors />} />
        <Route path="/challenges/week04" element={<ChatComponent />} />
        <Route path="/challenges/week05" element={<Calculator />} />
        <Route path="/challenges/week06" element={<BoardingPass />} />
        <Route path="/challenges/week07" element={<CarnivalBlock />} />
      </Route>
    </Routes>
  );
}
