import SearchSection from "../components/SearchSection";
import SearchBar from "../components/SearchBar";
import SearchTitle from "../components/SearchTitle";
import MainSection from "../components/MainSection";
import MovieList from "../components/MoviesQuery/MovieList";
import NavigationBar from "../components/NavBar/NavBar";
import Loader from "../components/Loader/Loader";
import MoviesInfo from "../components/MoviesQuery/MoviesInfo";
import { useState, useEffect, useCallback } from "react";
import axios from "axios";

function Movies({
  isLoading,
  movies,
  setSearchKey,
  searchKey,
  fetchMovies,
  IMAGE_PATH,
  API_URL,
  POSTER_PATH,
}) {
  const [selectedMovies, setSelectedMovies] = useState({});
  const [activeInfoTab, setActiveInfoTab] = useState(false);

  const handleClickOpen = () => {
    // 👇️ toggle isActive state on click
    setActiveInfoTab(true);
  };

  const handleClickClose = () => {
    setActiveInfoTab(false);
  };

  useEffect(() => {
    handleClickClose();
  }, []);

  const fetchMovie = useCallback(
    async (id) => {
      const { data } = await axios.get(`${API_URL}/movie/${id}`, {
        params: {
          api_key: import.meta.env.VITE_API_KEY,
        },
      });

      return data;
    },
    [API_URL]
  );

  const selectOneMovie = useCallback(
    async (series) => {
      const data = await fetchMovie(series.id);

      setSelectedMovies(data);
      console.log("ss", data);
    },
    [fetchMovie]
  );
  return (
    <>
      <NavigationBar />
      <SearchSection>
        <SearchTitle />
        <SearchBar
          searchKey={searchKey}
          setSearchKey={setSearchKey}
          fetchMovies={fetchMovies}
        />
      </SearchSection>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <MainSection>
            <MovieList
              movies={movies}
              POSTER_PATH={POSTER_PATH}
              selectOneMovie={selectOneMovie}
              handleClickOpen={handleClickOpen}
            />
          </MainSection>{" "}
        </>
      )}
      <MoviesInfo
        selectedMovies={selectedMovies}
        selectOneMovie={selectOneMovie}
        activeInfoTab={activeInfoTab}
        handleClickClose={handleClickClose}
        IMAGE_PATH={IMAGE_PATH}
      />
    </>
  );
}

export default Movies;
