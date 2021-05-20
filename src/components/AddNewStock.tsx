import { useMutation } from '@apollo/client';
import { create } from 'istanbul-reports';
import React, { useState } from 'react'
import Button from 'react-bootstrap/esm/Button';
import { CREATE_STOCK } from '../graphql/mutations';

interface AddNewStockProps {

}
export const AddNewStock: React.FC<AddNewStockProps> = ({})=> {
    const [createStock] = useMutation(CREATE_STOCK);
    const [name , setName] = useState<string>("");
    const onCreate =() =>{
        createStock({ variables: { name: name, warehouse: 1 }})
    }
        return(
            <div>
                <input value={name} type="text" onChange={(e)=>setName(e.target.value)} />
                <Button onClick={onCreate}>Create</Button>
            </div>
        );
}