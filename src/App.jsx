import { useState, useEffect } from "react";
import { TVShowAPI } from "./api/tv-show";
import s from "./style.module.css";
import { BACKDROP_BASE_URL } from "./config";
import { TVShowDetail } from "./components/TvShowDetail/TvShowDetail";
import logoImg from "./assets/logo.png";
import { Logo } from "./components/Logo/Logo";
import { TvShowList } from "./TvShowList/TvShowList";
import { SearchBar } from "./components/SearchBar/SearchBar";
export function App() {
  const [currentTVShow, setCurrentTVShow] = useState();
  const [recommendationList, setRecommendationList] = useState([]);

  function updateCurrentTvShow(tvShow) {
    setCurrentTVShow(tvShow);
  }
  async function fetchPopulars() {
    try {
      const popularTVShowList = await TVShowAPI.fetchPopulars();

      if (popularTVShowList.length > 0) {
        setCurrentTVShow(popularTVShowList[0]);
      }
    } catch (error) {
      console.log("something went wrong", error.message);
    }
  }
  async function fetchRecommendations(tvShowId) {
    try {
      const recommendationListResponse = await TVShowAPI.fetchRecommendation(
        tvShowId
      );

      if (recommendationListResponse.length > 0) {
        setRecommendationList(recommendationListResponse.slice(0, 10));
      }
    } catch (error) {
      console.log("something went wrong", error.message);
    }
  }

  async function fetchByTitle(title) {
    try {
      const searchResponse = await TVShowAPI.fetchByTitle(title);

      if (searchResponse.length > 0) {
        setCurrentTVShow(searchResponse[0]);
      }
    } catch (error) {
      console.log("something went wrong", error.message);
    }
  }

  useEffect(() => {
    fetchPopulars();
  }, []);
  useEffect(() => {
    if (currentTVShow) {
      fetchRecommendations(currentTVShow.id);
    }
  }, [currentTVShow]);
  return (
    <div
      className={s.main_container}
      style={{
        background: currentTVShow
          ? `linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)),
           url("${BACKDROP_BASE_URL}${currentTVShow.backdrop_path}") no-repeat center / cover`
          : "black",
      }}
    >
      <div className={s.header}>
        <div className="row">
          <div className="col-4">
            <Logo
              img={logoImg}
              title={"Browse Shows"}
              subTitle="Find a show you may like"
            />
          </div>
          <div className={`${s.search_container} col-md-12 col-lg-4`}>
            <SearchBar onSubmit={fetchByTitle} />
          </div>
        </div>
      </div>
      <div className={s.tv_show_detail}>
        {currentTVShow && <TVShowDetail tvShow={currentTVShow} />}
      </div>
      <div className={s.recommended_tv_shows}>
        {currentTVShow && (
          <TvShowList
            tvShowList={recommendationList}
            onClickItem={updateCurrentTvShow}
          />
        )}
      </div>
    </div>
  );
}
