import React, { useEffect, useState } from 'react';
import Header from './Header';
import { Table } from 'react-bootstrap';

function ProductList()
{

    const [data,SetData] = useState([]);

    useEffect(() => {
        async function fetchProducts(){
            let result = await fetch("http://localhost:8000/api/list");
            result = await result.json();
            SetData(result);   
        }
        fetchProducts()
    },[]);
    
    console.warn("result", data);
    return (
        <div>
            <Header />
            <h1>Show products</h1>
            <div className='col-sm-8 offset-sm-2'>
                <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Description</th>
                    <th>Image</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((item) => 
                            <tr>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.price}</td>
                            <td>{item.description}</td>
                            <td><img style={{width:100}} src={"http://localhost:8000/"+item.file_path} /></td>
                            </tr>
                        )
                    }
                </tbody>
                </Table>
            </div>
        </div>
    )
}


export default ProductList;