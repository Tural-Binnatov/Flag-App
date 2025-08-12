import "./HomePage.css";
import Search from "./Search.jsx";
import CountryCard from "./CountryCard.jsx";
import Dropdown from "./Dropdown.jsx";
import SkeletonCard from "./SkeletonCard.jsx";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true);
  const [filter, setFilter] = useState("");
  const [region, setRegion] = useState("all");
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://restcountries.com/v3.1/${region}`);
      const jsonData = await response.json();
      const sortedData = jsonData.sort((a, b) =>
        a.name.common.localeCompare(b.name.common)
      );
      const filteredData = sortedData.filter((country) =>
        country.name.common.toLowerCase().startsWith(filter.toLocaleLowerCase())
      );
      setData(filteredData);
      setIsLoading(false);
    };
    fetchData();
  }, [filter, region]);

  return (
    <div className="home-wrapper-page">
      <div className="home-top-page">
        <Search filter={filter} setFilter={setFilter} />
        <Dropdown setRegion={setRegion} region={region} />
      </div>
      <div className="home-body-page">
        {isLoading ? (
          <SkeletonCard count={12} />
        ) : (
          data.map((country, i) => (
            <Link key={i} to={`/country/${country.cca2}`}>
              <CountryCard key={i} {...country} />
            </Link>
          ))
        )}
      </div>
    </div>
  );
}

