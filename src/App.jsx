import { Route, Routes } from "react-router-dom"
import Navigation from "./components/Navigation/Navigation"
import HomePage from "./pages/HomePage/HomePage"
import MoviesPage from "./pages/MoviesPage/MoviesPage"
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage"
import MovieDetailsPage from "./pages/MovieDetailsPage/MovieDetailsPage"



const App = () => {
  return (
    <div>
      

     <Navigation/>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/movies" element={<MoviesPage />} />
      <Route path="/movies/:movieId" element={<MovieDetailsPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
    </div>
  );
}

export default App