import React, { useContext } from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Ratings from './Ratings';
import './SingleProduct.css'
import { StoreContext } from '../Context/Context';

export default function SingleProduct({ product }) {
  const { cart, dispatch } = useContext(StoreContext)

  return (
    <div className='products'>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={product.image} alt={product.title} style={{ objectFit: 'contain', height: '15vw' }} />
        <Card.Body>
          <Card.Title>{product.title.slice(0, 20) + '...'}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted" style={{ paddingBottom: '10px' }}>
            <div>
              {product.price} ₹
            </div>
            <Ratings rating={product.rating.rate} />
            <div>
              Reviewed By: {product.rating.count} users
            </div>
          </Card.Subtitle>
          {
            cart.data.some(item => item.id === product.id) 
            ? <Button
              variant="danger"
              disabled={product.rating.count === 0}
              onClick={() => dispatch({ type: 'REMOVE_FROM_CART', payload: product })}>
                Remove
              </Button>
            : <Button
                variant="primary"
                disabled={product.rating.count === 0}
                onClick={() => dispatch({ type: 'ADD_TO_CART', payload: product })}>
                Add To Cart
              </Button>
          }
        </Card.Body>
      </Card>
    </div>
  )
}
