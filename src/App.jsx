import { useCallback, useEffect, useState } from "react";
import axios from "axios";

import SearchSection from "./components/SearchSection";
import SearchBar from "./components/SearchBar";
import SearchTitle from "./components/SearchTitle";
import MainSection from "./components/MainSection";
import MovieFeatured from "./components/MovieFeatured";
import MovieList from "./components/MovieList";
import PopularSeriesList from "./components/MovieCategories/Series/PopularSeriesList";
import NavigationBar from "./components/NavBar/NavBar";
import MultiSelectorButton from "./components/Buttons/MultiSelectorButton";
import WatchListHeading from "./components/Headings/WatchListHeading";
import WatchlistHeader from "./components/Headings/WatchlistHeader";
import ButtonSeries from "./components/Buttons/ButtonSeries";
import ButtonMovies from "./components/Buttons/ButtonMovies";
import MoviesList from "./components/MovieCategories/Movies/MoviesList";

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
    console.log("here", seriesType);
    const data = await fetchSeries(seriesType);
    setSeriesType(data);
  };

  const fetchMoviesType = useCallback(async (series) => {
    if (series === undefined) series = "popular";

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
  };

  useEffect(() => {
    fetchSeries();
    fetchMovies();
    fetchMoviesType();
  }, [fetchSeries, fetchMovies, fetchMoviesType]);

  return (
    <div>
      <NavigationBar />

      <MovieFeatured
        selectedMovie={selectedMovie}
        IMAGE_PATH={IMAGE_PATH}
        setPlayTrailer={setPlayTrailer}
        playTrailer={playTrailer}
      />
      <MainSection>
        <WatchlistHeader>
          <WatchListHeading>
            <h2>Series you can watch</h2>
          </WatchListHeading>
          <MultiSelectorButton>
            <ButtonSeries
              seriesType={"top_rated"}
              selectSeries={selectSeries}
              name="Top Rated"
              id={"1"}
              handleButton={handleButton}
              activeButton={activeButton}
            />
            <ButtonSeries
              seriesType={"popular"}
              selectSeries={selectSeries}
              name="Popular"
              id={"3"}
              handleButton={handleButton}
              activeButton={activeButton}
            />

            <ButtonSeries
              seriesType={"airing_today"}
              selectSeries={selectSeries}
              name="Airing Today"
              id={"4"}
              handleButton={handleButton}
              activeButton={activeButton}
            />
          </MultiSelectorButton>
        </WatchlistHeader>
        <PopularSeriesList
          popularSeries={seriesType}
          POSTER_PATH={POSTER_PATH}
        />

        <WatchlistHeader>
          <WatchListHeading>
            <h2>Movies for you</h2>
          </WatchListHeading>
          <MultiSelectorButton>
            <ButtonMovies
              moviesType={"top_rated"}
              selectMovies={selectMoviesType}
              name="Top Rated"
              id={"5"}
              handleButton={handleButtonMovies}
              activeButtonMovies={activeButtonMovies}
            />

            <ButtonMovies
              moviesType={"popular"}
              selectMovies={selectMoviesType}
              name="Popular"
              id={"6"}
              handleButton={handleButtonMovies}
              activeButtonMovies={activeButtonMovies}
            />
            <ButtonMovies
              moviesType={"upcoming"}
              selectMovies={selectMoviesType}
              name="Upcoming"
              id={"7"}
              handleButton={handleButtonMovies}
              activeButtonMovies={activeButtonMovies}
            />
          </MultiSelectorButton>
        </WatchlistHeader>
        <MoviesList popularMovies={movieType} POSTER_PATH={POSTER_PATH} />
        <MovieList
          movies={movies}
          IMAGE_PATH={IMAGE_PATH}
          selectMovie={selectMovie}
        />
      </MainSection>
      <SearchSection>
        <SearchTitle />
        <SearchBar
          searchKey={searchKey}
          setSearchKey={setSearchKey}
          fetchMovies={fetchMovies}
        />
      </SearchSection>
    </div>
  );
}
