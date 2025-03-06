import axios from 'axios';
import React, { useEffect, useState } from 'react'
import ProductCard from '../../Components/ProductCard/ProductCard';

export default function Products() {
   const [products ,setProducts] = useState([]);
    async function getProducts(){
     
        const options={
            url:'http://localhost:3000/listings',
            method:'GET',
        }

    let {data} = await axios.request(options);
    setProducts(data);
    console.log(data);
    
    }

    useEffect(()=>{
        getProducts();
    },[])

  return (

    <>
    <div className='grid grid-cols-12 gap-2 w-[1336px] mx-auto py-18'>
        {products ? 
        products.map((product)=>(
            <ProductCard key={product.id} productInfo={product} />
        )
        ) 
        : <h2>Loading .... </h2>}
    </div>
    </>
  )
}
