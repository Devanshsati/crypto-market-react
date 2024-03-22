import React from "react";

function Card(symbol,name,image,currentPrice,rank,lastUpdate,marketCap) {
    return(
        <>
            <div className="container">
                <div className="card-deck mb-3 text-center">
                    <div className="card mb-4 box-shadow">
                        <div className="card-header">
                            <h4 className="my-0 font-weight-normal">{name}</h4>
                        </div>
                        <div className="card-body">
                            <h1 className="card-title pricing-card-title"><img src={image} /><small className="text-muted">{symbol}</small></h1>
                            <ul className="list-unstyled mt-3 mb-4">
                                <li>Rank : {rank}</li>
                                <li>Current Price : {currentPrice}</li>
                                <li>Market Cap : {marketCap}</li>
                                <li>Last Update : {lastUpdate}</li>
                            </ul>
                            <button type="button" classNameName="btn btn-lg btn-block btn-outline-primary">Sign up to Buy</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Card;