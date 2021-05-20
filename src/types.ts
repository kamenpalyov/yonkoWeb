import { ApolloError } from "@apollo/client";

export type StockType = {
  id: number;
  name: string;
};
export type Stocks={
  stocks: StockType[]
}
export type StocksProps = {
  loading: boolean;
  error: ApolloError | undefined;
  data: Stocks;
};