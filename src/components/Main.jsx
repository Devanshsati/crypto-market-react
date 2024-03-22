import React, {useState, useEffect} from "react";
import axios from 'axios';
import Card from "./components/Card";


function Main() {

    const[coins, setCoins] = useState([]);

    useEffect(() =>{
        axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR&order=market_cap_desc&per_page=100&page=1&sparkline=false').then(response =>{
            setCoins(response.data);
        })
        .catch(error => {
            console.log(error);
        });
    },[]);


    return(
        <>
            <div class="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
                <h1 class="display-4">Pricing</h1>
                <p class="lead">Quickly build an effective pricing table for your potential customers with this Bootstrap example. It's built with default Bootstrap components and utilities with little customization.</p>
            </div>

            {coins.map(coin=>(
                <Card 
                    key={coin.id}
                    symbol={coin.symbol}
                    name={coin.name}
                    image={coin.image}
                    currentPrice={coin.current_price}
                    rank={coin.market_cap_rank}
                    lastUpdate={coin.last_updated}
                    marketCap={coin.market_cap}
                />
            ))}
        </>
    );
}

export default Main;