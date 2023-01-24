import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { ButtonsAndCursors } from "./pages/ButtonsAndCursors/ButtonsAndCursors";
import { CardProductPage } from "./pages/CardProductPage";

import { Home } from "./pages/Home/Home";
import { MusicPlayer } from "./pages/MusicPlayer";

export function Router() {
  return (
    <Routes>
      <Route element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/challenges/week01" element={<MusicPlayer />} />
        <Route path="/challenges/week02" element={<CardProductPage />} />
        <Route path="/challenges/week03" element={<ButtonsAndCursors />} />
      </Route>
    </Routes>
  );
}
