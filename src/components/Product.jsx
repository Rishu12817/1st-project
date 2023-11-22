import React from 'react'
import { useParams } from 'react-router-dom'

export default function Product({value}) {

    // const params= useParams();




  return (
    <div>Product<br/>
        {/* <h1>#ProductID</h1>
        <h2>id: {params.id}</h2> */}

        {value}

    </div>
  )
}
