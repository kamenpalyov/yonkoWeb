import { gql } from "@apollo/client";

export const STOCKS = gql`
query Stocks {
  stocks{
    id
    name
  }
}
`;