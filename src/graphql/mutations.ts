import { gql } from "@apollo/client";

export const CREATE_STOCK = gql`
    mutation CreateStock($name: String!, $warehouse: Int!){
        createStock(name: $name, warehouse:$warehouse){
            id
            name
        }
    }
`