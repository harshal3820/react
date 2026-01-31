import RestaurentCard from "./RestaurentCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRestaurents, setListOfRestaurent] = useState([]);
  const [listOfFilteredRestaurent, setListOfFilteredResaturent] = useState([]);
  const [inputText, setInputText] = useState("");
  console.log("render");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5769458&lng=73.8930871&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
    );

    const json = await data.json();

    setListOfRestaurent(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants,
    );
    setListOfFilteredResaturent(
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants,
    )
  };

  return listOfRestaurents.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <input
          type="text"
          className="search-bar"
          value={inputText}
          onChange={(e) => {
            setInputText(e.target.value);
          }}
        />
        <button
          className="search-btn"
          onClick={() => {
            console.log(inputText);
            const filteredRestaurent = listOfRestaurents.filter((res) =>
              res.info.name.toLowerCase().includes(inputText.toLowerCase()),
            );
            console.log(filteredRestaurent);
            setListOfFilteredResaturent(filteredRestaurent);
          }}>
          Search
        </button>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredResults = listOfRestaurents.filter(
              (res) => res.info.avgRating > 4.5,
            );
            setListOfFilteredResaturent(filteredResults);
          }}>
          Top Rated Restaurents
        </button>
      </div>
      <div className="res-container">
        {listOfFilteredRestaurent.map((restaurent) => (
          <RestaurentCard key={restaurent.info.id} resData={restaurent} />
        ))}
      </div>
    </div>
  );
};

export default Body;
