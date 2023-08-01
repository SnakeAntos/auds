import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home1 } from "./pages/Home1/home1";
import { Profile } from "./pages/Profile/profile";
import { Search } from "./pages/Search/search";

import { MusicaContextual } from "./pages/MusicaContextual/musicaContextual";
import { CupidoMusical } from "./pages/CupidoMusical/cupidomusical";
import { AppProviders } from "./context";
import { Playlist } from "./pages/Playlist/playlist";

const router = createBrowserRouter([
  // contiene la landing page, registro e inicio de sesión
  {
    path: "/",
    element: <App />,
  },

  {
    path: "/home",
    element: <Home1 />,
  },

  {
    path: "/perfil",
    element: <Profile />,
  },

  {
    path: "/buscar",
    element: <Search />,
  },
  {
    path: "/musicaContextual",
    element: <MusicaContextual />,
  },

  {
    path: "/cupidoMusical",
    element: <CupidoMusical />,
  },

  {
    path: "/playlist",
    element: <Playlist />,
  },

  //{
  //  path: "/cupidoMusical",
  //  element:
  //},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppProviders>
      <RouterProvider router={router} />
    </AppProviders>
  </React.StrictMode>
);
