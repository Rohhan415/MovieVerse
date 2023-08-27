import axios from "axios";
import { useState, useCallback, useEffect } from "react";
import NavigationBar from "../components/NavBar/NavBar";
import SearchSection from "../components/SearchSection";
import SearchBar from "../components/SearchBar";
import SearchTitle from "../components/SearchTitle";
import Loader from "../components/Loader/Loader";
import MainSection from "../components/MainSection";
import SeriesQuery from "../components/SeriesQuery/SeriesQuery";
import SeriesInfo from "../components/SeriesQuery/SeriesInfo";

function Series({
  API_URL,
  setIsLoading,
  isLoading,
  searchKey,
  setSearchKey,
  POSTER_PATH,
  IMAGE_PATH,
}) {
  const [series, setSeries] = useState([]);
  const [selectedSeries, setSelectedSeries] = useState({});
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

  const fetchSeries = useCallback(async () => {
    setIsLoading(true);
    const {
      data: { results },
    } = await axios.get(`${API_URL}/search/tv`, {
      params: {
        api_key: import.meta.env.VITE_API_KEY,
        query: searchKey,
      },
    });

    setSeries(results);
    setIsLoading(false);
  }, [setIsLoading, API_URL, searchKey]);

  useEffect(() => {
    fetchSeries();
  }, [fetchSeries]);

  const fetchOneSeries = useCallback(
    async (id) => {
      const { data } = await axios.get(`${API_URL}/tv/${id}`, {
        params: {
          api_key: import.meta.env.VITE_API_KEY,
        },
      });

      return data;
    },
    [API_URL]
  );

  const selectSeries = useCallback(
    async (series) => {
      const data = await fetchOneSeries(series.id);

      setSelectedSeries(data);
      console.log("ss", data);
    },
    [fetchOneSeries]
  );

  return (
    <div>
      <NavigationBar />
      <SearchSection>
        <SearchTitle />
        <SearchBar
          searchKey={searchKey}
          setSearchKey={setSearchKey}
          fetchSeries={fetchSeries}
        />
      </SearchSection>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <MainSection>
            <SeriesQuery
              series={series}
              POSTER_PATH={POSTER_PATH}
              selectSeries={selectSeries}
              handleClickOpen={handleClickOpen}
            />
          </MainSection>
        </>
      )}
      <SeriesInfo
        selectedSeries={selectedSeries}
        selectSeries={selectSeries}
        activeInfoTab={activeInfoTab}
        handleClickClose={handleClickClose}
        IMAGE_PATH={IMAGE_PATH}
      />
    </div>
  );
}

export default Series;
