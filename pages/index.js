import Head from "next/head";
import SearchBar from "../components/SearchBar/SearchBar";
import Coins from "../components/coins/Coins";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Crypto Tracker</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SearchBar type="text" placeholder="Search" />
      <Coins />
    </div>
  );
}
