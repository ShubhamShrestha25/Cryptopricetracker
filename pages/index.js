import { useState } from "react";
import CoinList from "../components/coins/CoinList";
import SearchBar from "../components/SearchBar/SearchBar";
import Layout from "../components/SearchBar/Layout";

export default function Home({ data }) {
  const [search, setSearch] = useState("");

  const allCoins = data.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );
  const handleChange = (e) => {
    e.preventDefault();

    setSearch(e.target.value.toLowerCase());
  };
  return (
    <div>
      <Layout />
      <div className="coin_app">
        <SearchBar type="text" placeholder="Search" onChange={handleChange} />
        <CoinList filteredCoins={allCoins} />
      </div>
    </div>
  );
}

export const getServerSideProps = async () => {
  const res = await fetch(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false"
  );

  const data = await res.json();
  return {
    props: {
      data,
    },
  };
};
