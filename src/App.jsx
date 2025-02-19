import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import usecustom from './usecustom';
import Product from './Product';
import Model from './Model';

function App() {
  const [product, setProduct] = useState([]);
  const [open, setOpen] = useState(false);
  const [infoproduct, setInfoproduct] = useState([]);


  

   async function getcustomhook(url){
    const productss =  await usecustom(url);
    // let filterp = productss.products.filter((pro)=>{
    //   return  pro.images.length>1
    // })
    setProduct(productss.products);

  }
 
  useEffect(()=>{
    getcustomhook('https://dummyjson.com/products');

  },[]);

  return (
    <div className=''>
      <Product   productstae={product} open= {open} setopen = {setOpen} setInfoproduct = {setInfoproduct}/>
      <Model open = {open} setopen = {setOpen} infoproduct = {infoproduct}/>
    </div>
  )
}

export default App
