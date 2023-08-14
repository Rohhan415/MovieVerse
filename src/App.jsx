import { useEffect, useState } from "react";
import axios from "axios";
import SearchSection from "./components/SearchSection";
import SearchBar from "./components/SearchBar";
import SearchTitle from "./components/SearchTitle";
import MovieCard from "./components/MovieCard";
import MainSection from "./components/MainSection";
import MovieFeatured from "./components/MovieFeatured";

export default function App() {
  const [movies, setMovies] = useState([]);
  const [searchKey, setSearchKey] = useState("");
  const [selectedMovie, setSelectedMovie] = useState({});

  const type = searchKey ? "search" : "discover";
  const API_URL = "https://api.themoviedb.org/3";
  const IMAGE_PATH = "https://image.tmdb.org/t/p/w1280";

  const fetchMovies = async () => {
    const {
      data: { results },
    } = await axios.get(`${API_URL}/${type}/movie`, {
      params: {
        api_key: import.meta.env.VITE_API_KEY,
        query: searchKey,
      },
    });

    setSelectedMovie(results[0]);
    setMovies(results);
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  const RenderMovies = () =>
    movies.map((movie) => (
      <MovieCard key={movie.id} movie={movie} IMAGE_PATH={IMAGE_PATH} />
    ));

  return (
    <div className="container">
      <SearchSection>
        <SearchTitle />
        <SearchBar
          searchKey={searchKey}
          setSearchKey={setSearchKey}
          fetchMovies={fetchMovies}
        />
      </SearchSection>
      <MovieFeatured selectedMovie={selectedMovie} IMAGE_PATH={IMAGE_PATH} />
      <MainSection>{RenderMovies()}</MainSection>
    </div>
  );
}
