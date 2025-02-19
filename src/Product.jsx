import React from 'react'

function Product(props) {
    function handleclick(id){
      let fiterpro =   props.productstae.filter((myproduct)=>{
            return  myproduct.id == id;
        })
        props.setInfoproduct(fiterpro)
        props.setopen(true);

    }
  return (
    <div className='grid md:grid-cols-4 grid-cols-1 gap-3'>
        { 
        props.productstae.map( products => (
            <div className='w-full border border-2 border-gray-400 rounded-2xl p-3 hover:bg-rose-100'>
            <img src= {products.images[0]} className='h-[250px] m-auto ' onClick={() =>handleclick(products.id)}/>
            <p className='opacity-60 text-xl mt-1'>{products.title}</p>
            <p className='font-bold text-3xl'>${products.price}</p>
            <p className='opacity-60 mb-4 mt-3'>{products.category}</p>
            <button className='rounded-3xl w-[100px] h-[40px] bg-green-400 text-white font-bold text-2xl '>4.{}{products.rating.rate}*</button> <span>{products.rating.count} Reviews </span>
          </div>
        ))
        }      
      
    </div>
  )
}

export default Product
