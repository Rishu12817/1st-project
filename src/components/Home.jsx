import React from 'react'
import Product from './Product';

export default function Home() {
    const arr = [0,1,2,3,4,5];
  return (
    <div>Home
        {/* either we can use this below */}
        {/* <Product value ={1}/> */}
        {/* or we can use  map */}

        {
            arr.map((i) => ( 
                <Product value ={i} key = {i}/>
            ))
        }
    </div>
  )
}
