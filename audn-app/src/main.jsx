import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home1 } from "./pages/Home1/home1";

const router = createBrowserRouter([
  // contiene la landing page, registro e inicio de sesión
  {
    path: "/",
    element: <App />,
  },

  {
    path: "/home",
    element: <Home1/>
  }
// {
//    path: "/cupidoMusical",
//    element: <CupidoMusical/>,
//   }, 
//   {
//    path: "/musicaContextual",
//    element: <MusicaContextual/>,
//   },
//   {
//    path: "/:nickname",
//    element: <Profile/>,
//   }, 
//   {
//    path: "/search",
//    element: <Search/>,
//  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
