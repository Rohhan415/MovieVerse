import {  useEffect, useState } from "react";
import axios from "axios";

import SearchSection from "./components/SearchSection";
import SearchBar from "./components/SearchBar";
import SearchTitle from "./components/SearchTitle";
import MainSection from "./components/MainSection";
import MovieFeatured from "./components/MovieFeatured";
import MovieList from "./components/MovieList";
import PopularSeriesList from "./components/MovieCategories/PopularSeries/PopularSeriesList";
import NavigationBar from "./components/NavBar/NavBar";
import MultiSelectorButton from "./components/Buttons/MultiSelectorButton";
import WatchListHeading from "./components/Headings/WatchListHeading";
import WatchlistHeader from "./components/Headings/WatchlistHeader";
import ButtonList from "./components/Buttons/ButtonList"

const API_URL = "https://api.themoviedb.org/3";
const IMAGE_PATH = "https://image.tmdb.org/t/p/w1280";
const POSTER_PATH = "https://image.tmdb.org/t/p/w185";

export default function App() {
  const [movies, setMovies] = useState([]);
  const [seriesType, setSeriesType] = useState([]);
  const [searchKey, setSearchKey] = useState("");
  const [selectedMovie, setSelectedMovie] = useState({});
  const [playTrailer, setPlayTrailer] = useState(false);
  const [activeButton, setActiveButton]= useState("1");

const handleButton = (button) => {
  if(button !== activeButton) setActiveButton(button);
  
}
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

  const fetchSeries = async (seriesType) => {
    if(seriesType === undefined) seriesType = "airing_today";
    
    const {
      data: { results },
    } = await axios.get(`${API_URL}/tv/${seriesType}`, {
      params: { api_key: import.meta.env.VITE_API_KEY },
    });

   
    setSeriesType(results);
  };

  const selectSeries =  async (seriesType) => {
    
    console.log("here", seriesType);
    const data = await fetchSeries(seriesType);
    setSeriesType(data)
  }

  const selectMovie = async (movie) => {
    setPlayTrailer(false);
    const data = await fetchMovie(movie.id);

    setSelectedMovie(data);
  };

  useEffect(() => {
    fetchSeries();
    fetchMovies();
  }, []);

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
          <ButtonList seriesType={"airing_today"} selectSeries={selectSeries} name="Airing Today" id={"1"} handleButton={handleButton} activeButton={activeButton} />
          <ButtonList seriesType={"on_the_air"} selectSeries={selectSeries} name="On The Air" id={'2'} handleButton={handleButton}  activeButton={activeButton}/>
          <ButtonList seriesType={"popular"} selectSeries={selectSeries} name="Popular" id={'3'} handleButton={handleButton}  activeButton={activeButton} />
          <ButtonList seriesType={"top_rated"} selectSeries={selectSeries} name="Top Rated" id={'4'} handleButton={handleButton}  activeButton={activeButton}/>
         </MultiSelectorButton>
        </WatchlistHeader>
        <PopularSeriesList
          popularMovies={seriesType}
          POSTER_PATH={POSTER_PATH}
        />
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
