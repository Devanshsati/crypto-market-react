import React from "react";

function Card(props) {
    return(
            <div className="col">
                <div className="card mb-4 rounded-3 shadow-sm">
                    <div className="card-header py-3">
                        <h4 className="my-0 fw-normal">{props.name}</h4>
                    </div>
                    <div className="card-body">
                        <h1 className="card-title pricing-card-title"><img className="coinImage" src={props.image} alt="coin" /><small className="text-muted">{props.symbol}</small></h1>
                        <ul className="list-unstyled mt-3 mb-4 restText">
                            <li>Rank <strong className="rankno">{props.rank}</strong></li>
                            <li>Current Price : <em className="currentprice"><i>₹</i>{props.currentPrice}</em></li>
                            {
                                props.priceChange<0 ?(
                                    <li>Price Change : <em className="percentred">{props.priceChange.toFixed(2)}%</em></li>
                                ):(
                                    <li>Price Change : <em className="percentgreen">{props.priceChange.toFixed(2)}%</em></li>
                                )
                            }
                            <li>MKT Cap : ₹ {props.marketCap.toLocaleString()}</li>
                            <li>Last Update : {props.lastUpdate}</li>
                        </ul>
                        <button type="button" className="w-100 btn btn-lg btn-outline-primary">Sign up for free</button>
                    </div>
                </div>
            </div>
    );
}

export default Card;