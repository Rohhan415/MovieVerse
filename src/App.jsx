import { useCallback, useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";

import Homepage from "./pages/Homepage";
import Movies from "./pages/Movies";
import Series from "./pages/Series";
import Actors from "./pages/Actors";
import PageNotFound from "./pages/PageNotFound";
import Footer from "./components/Footer/Footer";
// import FeaturedMovie from "./components/FeaturedMovie/FeaturedMovie";

const API_URL = "https://api.themoviedb.org/3";
const IMAGE_PATH = "https://image.tmdb.org/t/p/w1280";
const POSTER_PATH = "https://image.tmdb.org/t/p/w185";

export default function App() {
  const [movies, setMovies] = useState([]);
  const [seriesType, setSeriesType] = useState([]);
  const [searchKey, setSearchKey] = useState("");
  const [selectedMovie, setSelectedMovie] = useState({});
  const [playTrailer, setPlayTrailer] = useState(false);
  const [activeButton, setActiveButton] = useState("1");
  const [activeButtonMovies, setActiveButtonMovies] = useState("5");
  const [movieType, setMovieType] = useState([]);
  const [movieTabName, setMovieTabName] = useState("");
  const [seriesTabName, setSeriesTabName] = useState("");

  const handleButton = (button) => {
    if (button !== activeButton) setActiveButton(button);
  };

  const handleButtonMovies = (button) => {
    if (button !== activeButtonMovies) setActiveButtonMovies(button);
  };
  const type = searchKey ? "search" : "discover";

  const selectMovie = useCallback(async (movie) => {
    setPlayTrailer(false);
    const data = await fetchMovie(movie.id);

    setSelectedMovie(data);
  }, []);

  const fetchMovies = useCallback(async () => {
    const {
      data: { results },
    } = await axios.get(`${API_URL}/${type}/movie`, {
      params: {
        api_key: import.meta.env.VITE_API_KEY,
        query: searchKey,
      },
    });

    await selectMovie(results[0]);
    setMovies(results);
  }, [selectMovie, searchKey, type]);

  const fetchMovie = async (id) => {
    const { data } = await axios.get(`${API_URL}/movie/${id}`, {
      params: {
        api_key: import.meta.env.VITE_API_KEY,
        append_to_response: "videos",
      },
    });

    return data;
  };

  const fetchSeries = useCallback(async (series) => {
    if (series === undefined) series = "top_rated";

    const {
      data: { results },
    } = await axios.get(`${API_URL}/tv/${series}`, {
      params: { api_key: import.meta.env.VITE_API_KEY },
    });
    console.log("films", results);

    setSeriesType(results);

    return results;
  }, []);

  const selectSeries = async (seriesType) => {
    const data = await fetchSeries(seriesType);

    setSeriesType(data);
    setSeriesTabName(seriesType);
  };

  const fetchMoviesType = useCallback(async (series) => {
    if (series === undefined) series = "top_rated";

    const {
      data: { results },
    } = await axios.get(`${API_URL}/movie/${series}`, {
      params: { api_key: import.meta.env.VITE_API_KEY },
    });
    console.log("films", results);

    setMovieType(results);

    return results;
  }, []);

  const selectMoviesType = async (seriesType) => {
    const data = await fetchMoviesType(seriesType);
    setMovieType(data);
    setMovieTabName(seriesType);
  };

  useEffect(() => {
    fetchSeries();
    fetchMovies();
    fetchMoviesType();
  }, [fetchSeries, fetchMovies, fetchMoviesType]);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Homepage
                activeButtonMovies={activeButtonMovies}
                activeButton={activeButton}
                handleButton={handleButton}
                handleButtonMovies={handleButtonMovies}
                selectMoviesType={selectMoviesType}
                selectSeries={selectSeries}
                POSTER_PATH={POSTER_PATH}
                IMAGE_PATH={IMAGE_PATH}
                seriesType={seriesType}
                movieType={movieType}
                selectedMovie={selectedMovie}
                movieTabName={movieTabName}
                seriesTabName={seriesTabName}
                playTrailer={playTrailer}
                setPlayTrailer={setPlayTrailer}
              />
            }
          />

          <Route
            path="movies"
            element={
              <Movies
                movies={movies}
                setSearchKey={setSearchKey}
                searchKey={searchKey}
                fetchMovies={fetchMovies}
                selectMovie={selectMovie}
                IMAGE_PATH={IMAGE_PATH}
              />
            }
          />
          <Route path="series" element={<Series />} />
          <Route path="actors" element={<Actors />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
