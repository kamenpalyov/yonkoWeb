import React from 'react'
import { StockType } from '../types';

export const StocksComponent = ({stock}:{stock:StockType})=> {
        return(
            <div className="container bg-warning">
                <div>
                    <h3>{stock.name}</h3>
                </div>
            </div>
        );
}