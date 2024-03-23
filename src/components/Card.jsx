import React from "react";

function Card(props) {
    return(
            <div className="col">
                <div className="card mb-4 rounded-3 shadow-sm">
                    <div className="card-header py-3">
                        <h4 className="my-0 fw-normal">{props.name}</h4>
                    </div>
                    <div className="card-body">
                        <h1 className="card-title pricing-card-title"><img className="coinImage" src={props.image} alt="coin" /><small classNameName="text-muted">{props.symbol}</small></h1>
                        <ul className="list-unstyled mt-3 mb-4">
                            <li>Rank : <strong>{props.rank}</strong></li>
                            <li>Current Price : {props.currentPrice}</li>
                            <li>Market Cap : {props.marketCap}</li>
                            <li>Last Update : {props.lastUpdate}</li>
                        </ul>
                        <button type="button" className="w-100 btn btn-lg btn-outline-primary">Sign up for free</button>
                    </div>
                </div>
            </div>
    );
}

export default Card;