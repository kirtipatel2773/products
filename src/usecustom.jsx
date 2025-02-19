import React from 'react'

 async function usecustom(url) {
    let res =  await fetch(url);
    return await res.json();
 }

export default usecustom
