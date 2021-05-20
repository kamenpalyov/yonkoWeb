import React from "react";
import "./App.css";
import { ApolloError, useQuery } from "@apollo/client";
import {STOCKS} from "./graphql/queries"
import { StocksProps } from "./types";
import { NavBar } from "./components/NavBar";
import { StocksComponent } from "./components/StocksComponent";
import { AddNewStock } from "./components/AddNewStock";

function App() {
  const { loading, error, data } = useQuery(STOCKS) as StocksProps;
  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error : {error}</div>;
  }
  console.log(data.stocks)
  return (
    <div className="App">
      <NavBar/>
      <AddNewStock/>
      {data.stocks.map(stock=>{
        return <StocksComponent stock={stock} />
      })}
    </div>
  );
}

export default App;
