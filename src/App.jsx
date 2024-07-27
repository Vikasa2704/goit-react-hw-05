import {lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';


const HomePage = lazy (()=> import("./pages/HomePage/HomePage"));
const MoviesPage = lazy (()=> import("./pages/MoviesPage/MoviesPage"));
const MovieDetailsPage = lazy (()=> import("./pages/MovieDetailsPage/MovieDetailsPage"));
const MovieReviews = lazy (() => import("./components/MovieReviews/MovieReviews"));
const MovieCast = lazy (() => import("./components/MovieCast/MovieCast"));

const App = () => {
  return (
    <div>
      <Navigation />
      <Suspense  fallback={<div>Loading page...</div>}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
          <Route path="cast" element={<MovieCast />} />
          <Route path="reviews" element={<MovieReviews />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      </Suspense>
    </div>
  );
};

export default App;
