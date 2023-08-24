import SearchSection from "../components/SearchSection";
import SearchBar from "../components/SearchBar";
import SearchTitle from "../components/SearchTitle";
import MainSection from "../components/MainSection";
import MovieList from "../components/MovieList";
import NavigationBar from "../components/NavBar/NavBar";

function Movies({
  movies,
  setSearchKey,
  searchKey,
  fetchMovies,
  selectMovie,
  IMAGE_PATH,
}) {
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
      <MainSection>
        <MovieList
          movies={movies}
          IMAGE_PATH={IMAGE_PATH}
          selectMovie={selectMovie}
        />
      </MainSection>
    </>
  );
}

export default Movies;
