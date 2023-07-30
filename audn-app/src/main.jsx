import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home1 } from "./pages/Home1/home1";
import { Profile } from "./pages/Profile/profile";
import { Search } from "./pages/Search/search";
import { MusicaContextual } from "./pages/MusicaCont1/musicaCont1";
import { CupidoMusical } from "./pages/CupidoMusical/cupidomusical";
import { AppProviders } from "./context";

const router = createBrowserRouter([
  // contiene la landing page, registro e inicio de sesión
  {
    path: "/",
    element: <App />,
  },

  {
    path: "/home",
    element: <Home1/>
  },

  {
    path: "/perfil",
    element: <Profile/>,
  }, 

  {
    path: "/buscar",
    element: <Search/>,
  },
  {
    path: "/musicaContextual",
    element: <MusicaContextual/>,
   },

  {
   path: "/cupidoMusical",
   element: <CupidoMusical/>,
  }, 

]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppProviders>
      <RouterProvider router={router} />
    </AppProviders>
  </React.StrictMode>
);
