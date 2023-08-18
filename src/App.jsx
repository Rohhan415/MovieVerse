import { useEffect, useState } from "react";
import axios from "axios";

import SearchSection from "./components/SearchSection";
import SearchBar from "./components/SearchBar";
import SearchTitle from "./components/SearchTitle";
import MainSection from "./components/MainSection";
import MovieFeatured from "./components/MovieFeatured";
import MovieList from "./components/MovieList";
import PopularMoviesList from "./components/MovieCategories/PopularSeries/PopularSeriesList";
import NavigationBar from "./components/NavBar/NavBar";

const API_URL = "https://api.themoviedb.org/3";
const IMAGE_PATH = "https://image.tmdb.org/t/p/w1280";
const POSTER_PATH = "https://image.tmdb.org/t/p/w185";

export default function App() {
  const [movies, setMovies] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  const [searchKey, setSearchKey] = useState("");
  const [selectedMovie, setSelectedMovie] = useState({});
  const [playTrailer, setPlayTrailer] = useState(false);

  const type = searchKey ? "search" : "discover";

  const fetchMovies = async () => {
    const {
      data: { results },
    } = await axios.get(`${API_URL}/${type}/movie`, {
      params: {
        api_key: import.meta.env.VITE_API_KEY,
        query: searchKey,
      },
    });
    console.log("sss", results);
    await selectMovie(results[0]);
    setMovies(results);
  };

  const fetchMovie = async (id) => {
    const { data } = await axios.get(`${API_URL}/movie/${id}`, {
      params: {
        api_key: import.meta.env.VITE_API_KEY,
        append_to_response: "videos",
      },
    });

    return data;
  };

  const fetchPopularMovies = async () => {
    const {
      data: { results },
    } = await axios.get(`${API_URL}/discover/tv`, {
      params: { api_key: import.meta.env.VITE_API_KEY },
    });

    console.log("data", results);
    setPopularMovies(results);
  };

  const selectMovie = async (movie) => {
    setPlayTrailer(false);
    const data = await fetchMovie(movie.id);

    setSelectedMovie(data);
  };

  useEffect(() => {
    fetchPopularMovies();
    fetchMovies();
  }, []);

  return (
    <div>
      <NavigationBar />
      <SearchSection>
        <SearchTitle />
        <SearchBar
          searchKey={searchKey}
          setSearchKey={setSearchKey}
          fetchMovies={fetchMovies}
        />
      </SearchSection>
      <MovieFeatured
        selectedMovie={selectedMovie}
        IMAGE_PATH={IMAGE_PATH}
        setPlayTrailer={setPlayTrailer}
        playTrailer={playTrailer}
      />
      <MainSection>
        <PopularMoviesList
          popularMovies={popularMovies}
          POSTER_PATH={POSTER_PATH}
        />
        <MovieList
          movies={movies}
          IMAGE_PATH={IMAGE_PATH}
          selectMovie={selectMovie}
        />
      </MainSection>
    </div>
  );
}
