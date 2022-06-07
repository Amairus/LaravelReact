<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    //
    function addProduct(Request $req)
    {
        $product = new Product();
        $product->name = $req->input('name');
        $product->price = $req->input('price');
        $product->description = $req->input('description');
        
        if($req->hasFile('file'))
            $product->file_path = $req->file('file')->store('products');
        
        $product->save();
        return $product;
    }

    function list(Request $req)
    {
        return Product::all();
    }

}
