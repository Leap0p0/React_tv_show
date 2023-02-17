
import { useEffect, useState } from "react";
import { TVShowAPI } from "./api/tv-show";
import { BACKDROP_BASE_URL } from "./config";
import { TVShowDetails } from "./components/TVShowDetails/TVShowDetails";
import s from "./index.css";
import { TVShowListItem } from "./components/TVShowListItem/TVShowListItem";
import { TVShowList } from "./components/TVShowList/TVShowList";
import { SearchBar } from "./components/SearchBar/SearchBar";


export function App() {
  const [currentTVShow, setCurrentTVShow] = useState();
  const [recommendation, setRecommendation] = useState([]);

  async function fetchPopulars () {
    const populars = await TVShowAPI.fetchPopulars();
    if(populars.length > 0) {
      (setCurrentTVShow)(populars[0]);
    }
  }
  async function fetchRecommendations (tvShowId) {
    const reco = await TVShowAPI.fetchRecommendations(tvShowId);
    if(reco.length > 0) {
      setRecommendation(reco.slice(0, 10));
    }
  }
  useEffect( () => {
    fetchPopulars();
  }, []);
  useEffect( () => {
    if (currentTVShow) {
      fetchRecommendations(currentTVShow.id)
    }
  }, [currentTVShow]);


  function setTVShowReco(tvShow) {
    alert(JSON.stringify(tvShow))
  }
  async function searchTvShow(tvShowname) {
    const searchResponse = await TVShowAPI.fetchByTitle(tvShowname);
    if (searchResponse.length > 0) {
      setCurrentTVShow(searchResponse[0]);
    }
  }

  console.log("***", currentTVShow);
  return (
    <div className="bg-black flex flex-col h-[100vh] p-[25px]" style={{background: currentTVShow
      ? `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url("${BACKDROP_BASE_URL}${currentTVShow.backdrop_path}") no-repeat center / cover`
      : "black",}}>
        <div className=" flex-1 relative">
          <div className="flex items-center justify-between">
            <div className="shrink-0">
              <img className="w-10" src="https://www.mpadeco.com/resize/500x500/zc/2/f/0/src/sites/mpadeco/files/products/1fe419299f4c5f18cedd7abb53d55bd9.png" alt="logo" />
            </div>
            <div className="items-center mx-auto">
              <SearchBar onSubmit={(tvShow) => searchTvShow(tvShow)} />
            </div>
          </div>
        </div>
      <div className=" flex-2">
        {currentTVShow && <TVShowDetails tvShow={currentTVShow} />}
      </div>
      <div className="flex-1">
      {recommendation && recommendation.length > 0 && (
      <TVShowList onClickItem={(tvShow) => setCurrentTVShow(tvShow)} tvShowList={recommendation} />
      )}
      </div>
    </div>
  );
}

export default App
