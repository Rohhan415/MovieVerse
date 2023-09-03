import PopularSeriesList from "../components/MovieCategories/Series/SeriesList";
import MultiSelectorButton from "../components/Buttons/MultiSelectorButton";
import WatchListHeading from "../components/Headings/WatchListHeading";
import WatchlistHeader from "../components/Headings/WatchlistHeader";
import ButtonSeries from "../components/Buttons/ButtonSeries";
import ButtonMovies from "../components/Buttons/ButtonMovies";
import MoviesList from "../components/MovieCategories/Movies/MoviesList";
import MovieFeatured from "../components/FeaturedSection/MovieFeaturedList";
import MainSection from "../components/MainSection";
import NavigationBar from "../components/NavBar/NavBar";

function Homepage({
  activeButton,
  activeButtonMovies,
  handleButton,
  handleButtonMovies,
  selectMoviesType,
  selectSeries,
  selectedMovie,
  movieTabName,
  POSTER_PATH,
  IMAGE_PATH,
  seriesType,
  movieType,
  seriesTabName,
  playTrailer,
  setPlayTrailer,
  fetchSeries,
}) {
  return (
    <>
      <NavigationBar />
      <MovieFeatured
        selectedMovie={selectedMovie}
        IMAGE_PATH={IMAGE_PATH}
        setPlayTrailer={setPlayTrailer}
        playTrailer={playTrailer}
        seriesType={seriesType}
        fetchSeries={fetchSeries}
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
          TAB_NAME={seriesTabName}
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
        <MoviesList
          popularMovies={movieType}
          POSTER_PATH={POSTER_PATH}
          TAB_NAME={movieTabName}
        />
      </MainSection>
    </>
  );
}

export default Homepage;
