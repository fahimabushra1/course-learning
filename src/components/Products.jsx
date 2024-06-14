import { useEffect, useState } from "react";
import Product from "./Product";


const Products = () => {
  const [products, setProducts]=useState();
  
  useEffect(()=>{
    fetch("https://course-learning-server-riha.vercel.app/courses")
    .then((res)=>res.json())
    .then((data)=>setProducts(data))
  },[])

  const handleDeleteProduct = (id) =>{
    setProducts(products.filter((product) => product._id!==id))}

    return (
        <div>
          <h1 className="text-center text-5xl font-bold py-4"> Our Products</h1>
          <div className='flex justify-evenly items-center gap-4 flex-wrap'>
            {
              products?.map((product)=>(
                <Product 
                key ={product._id}
                product={product}
                onDelete={handleDeleteProduct}
                />
              ))
            }
          </div>  
        </div>
    );
};

export default Products;