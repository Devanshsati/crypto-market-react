import React, {useState, useEffect} from "react";
import './App.css';
import Header from "./components/Header";
import Main from './components/Main';
import axios from 'axios';
import Footer from './components/Footer';

// https://github.com/Megh2507/React-Crypto-App/blob/main/src/App.js

function App() {
  const [coins, setCoins] = useState([]);
  const [filteredCoins, setFilteredCoins] = useState([]);

  useEffect(() => {
    axios
      .get(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR&order=market_cap_desc&per_page=100&page=1&sparkline=false'
      )
      .then((response) => {
        setCoins(response.data);
        setFilteredCoins(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleSearch = (searchTerm) => {
    const filteredCoins = coins.filter((coin) =>
      coin.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredCoins(filteredCoins);
  };


  return (
    <div>
      <Header handleSearch={handleSearch}/>
      <Main coins={filteredCoins}/>
      <Footer/>
    </div>
  );
}

export default App;
