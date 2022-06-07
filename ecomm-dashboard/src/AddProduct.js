import React, { useState }  from 'react';
import Header from './Header';

function AddProduct()
{

    const [name, SetName] = useState("");
    const [file, SetFile] = useState("");
    const [price, SetPrice] = useState("");
    const [description, SetDescription] = useState("");
    
    async function AddProduct()
    {
        const formData = new FormData();
        formData.append('name',name);
        formData.append('file',file);
        formData.append('price',price);
        formData.append('description',description);

        let result = await fetch("http://localhost:8000/api/addproduct",{
            method:"POST",
            body: formData
        });

        alert('Data saved');
    }

    return(
        <div>
            <Header />
            <div className='col-sm-6 offset-sm-3'>
             <br />   
            <input type="text" className="form-control" onChange={(e)=>SetName(e.target.value)} placeholder='Name' /> <br />
            <input type="file" className="form-control" onChange={(e)=>SetFile(e.target.files[0])} placeholder='file' /> <br />
            <input type="text" className="form-control" onChange={(e)=>SetPrice(e.target.value)} placeholder='price' /> <br />
            <input type="text" className="form-control" onChange={(e)=>SetDescription(e.target.value)} placeholder='description' /> <br />
            <button className='btn btn-primary' onClick={AddProduct} >Add Product</button>
            </div>
        </div>
    )
}

export default AddProduct