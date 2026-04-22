import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { DailyLife } from "./pages/DailyLife";
import { Memories } from "./pages/Memories";
import { Gallery } from "./pages/Gallery";
import { ProsAndCons } from "./pages/ProsAndCons";
import { Changes1989 } from "./pages/Changes1989";
import { MyOpinion } from "./pages/MyOpinion";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "daily-life", Component: DailyLife },
      { path: "memories", Component: Memories },
      { path: "gallery", Component: Gallery },
      { path: "pros-cons", Component: ProsAndCons },
      { path: "1989-changes", Component: Changes1989 },
      { path: "my-opinion", Component: MyOpinion },
    ],
  },
]);
