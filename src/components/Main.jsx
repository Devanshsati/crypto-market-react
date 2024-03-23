import React, {useState, useEffect} from "react";
import axios from 'axios';
import Card from "./Card";


function Main() {

    const [coins, setCoins] = useState([]);
    // const [search, setSearch] = useState([]);

    useEffect(() =>{
        axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR&order=market_cap_desc&per_page=100&page=1&sparkline=false')
        .then(response =>{
            setCoins(response.data);
        })
        .catch(error => {
            console.log(error);
        });
    },[]);

    // const handleChange = e =>{
    //     setSearch(e.target.value)
    // }

    // const filteredCoin = coins.filter(coin=>
    //     coin.name.toLowerCase().includes(search.toLowerCase())
    // )

    return(
        <div class="container py-3">
            <div class="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
                <h1 class="display-4">Pricing</h1>
                <p class="lead">Quickly build an effective pricing table for your potential customers with this Bootstrap example. It's built with default Bootstrap components and utilities with little customization.</p>
            </div>

            <div class="row row-cols-1 row-cols-md-4 mb-3 text-center">
                {coins.map(coin=>{
                    return(
                        <Card 
                            key={coin.id}
                            symbol={coin.symbol}
                            name={coin.name}
                            image={coin.image}
                            currentPrice={coin.current_price}
                            priceChange={coin.price_change_percentage_24h}
                            rank={coin.market_cap_rank}
                            lastUpdate={coin.last_updated}
                            marketCap={coin.market_cap}
                        />
                    ); 
                })}
            </div>
        </div>
    );
}

export default Main;