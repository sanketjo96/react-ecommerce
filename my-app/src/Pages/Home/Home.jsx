import React from 'react'
import { useContext } from 'react'
import SingleProduct from '../../Components/SingleProduct'
import { Filters } from '../../Components/Filters'
import { StoreContext } from '../../Context/Context'
import './Home.css'

export default function Home() {
  const { products } = useContext(StoreContext)
  return (
    <div className='home'>
      <Filters></Filters>
      <div className='productContainer'>
        {products?.data?.length ? products.data.map(product => {
          return <SingleProduct key={product.id} product={product}></SingleProduct>
        }) : <></>}
      </div>

    </div>
  )
}
