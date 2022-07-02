import React from 'react'
import { useContext } from 'react'
import SingleProduct from '../../Components/SingleProduct'
import { Filters } from '../../Components/Filters'
import { StoreContext } from '../../Context/Context'
import './Home.css'
import { sortProduct } from '../../service/Sort'

export default function Home() {
  const { products, filter } = useContext(StoreContext)

  const sortedProducts = sortProduct(products?.data??[], filter)
  return (
    <div className='home'>
      <Filters></Filters>
      <div className='productContainer'>
        {sortedProducts?.length ? sortedProducts.map(product => {
          return <SingleProduct key={product.id} product={product}></SingleProduct>
        }) : <></>}
      </div>

    </div>
  )
}
