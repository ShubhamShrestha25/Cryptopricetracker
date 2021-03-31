import Head from "next/head";
import CoinList from "../components/coins/CoinList";
import SearchBar from "../components/SearchBar/SearchBar";

export default function Home({ data }) {
  console.log(data);
  return (
    <div>
      <Head>
        <title>Crypto Tracker</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SearchBar type="text" placeholder="Search" />
      <CoinList filteredCoins={data} />
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
