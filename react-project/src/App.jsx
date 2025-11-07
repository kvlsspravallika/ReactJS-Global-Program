import "./App.css";
import React from "react";
import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from "react-router-dom";
import RootLayout from "./layout/RootLayout.jsx";
import Header from "./header/Header.jsx";
import MovieTile from "./movieDetails/MovieTile.jsx";
import { movieLoader } from "./Loaders/movieLoader.js";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Header />} />
        <Route path=":movieId" element={<MovieTile />} loader={movieLoader} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
