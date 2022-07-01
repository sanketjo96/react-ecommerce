import React, { useContext, useState } from 'react'
import { useEffect } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import ListGroup from 'react-bootstrap/ListGroup';
import Ratings from '../../Components/Ratings';
import { StoreContext } from '../../Context/Context';
import Image from 'react-bootstrap/Image'
import { AiFillDelete } from 'react-icons/ai';
import './Cart.css'

export default function Cart() {
  const { cart, dispatch } = useContext(StoreContext)
  const [total, setTotal] = useState(0)

  useEffect(() => {
    setTotal(cart.data.reduce((acc, item) => {
      acc += item.price * item.qty;
      return acc;
    }, 0))
  }, [cart])

  return (
    <div className="cart">
      <ListGroup>
        {
          cart.data.map((item) => {
            return (
              <ListGroup.Item key={item.id}>
                <ListGroup.Item>
                  <Row>
                    <Col md={2}><Image style={{ objectFit: 'contain', height: '10vw' }} src={item.image} fluid rounded></Image></Col>
                    <Col>{item?.title}</Col>
                    <Col>{item?.price} ₹</Col>
                    <Col><Ratings rating={item?.rating?.rate}></Ratings></Col>
                    <Col>
                      <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Qty: </Form.Label>
                        <Form.Control style={{ width: '100px' }} type="number" value={item?.qty} onChange={(e) => {
                          dispatch({ type: 'UPDATE_PRODUCT_QTY', payload: { id: item.id, qty: e.target.value } })
                        }} />
                      </Form.Group>
                    </Col>
                    <Col>
                      <Button>
                        <AiFillDelete onClick={(e) => {
                          dispatch({ type: 'REMOVE_FROM_CART', payload: { id: item.id } })
                        }}></AiFillDelete>
                      </Button>
                    </Col>
                  </Row>
                </ListGroup.Item>
              </ListGroup.Item>
            )
          })
        }
      </ListGroup>
      <div className="summary">
        <div>Total Items: {cart?.data?.length ?? 0}</div>
        <div style={{ fontSize: '15px', fontWeight: 'bold' }}>Total: ₹ {total.toFixed(2)}</div>
        <Button
          variant="primary">
          Proceed To Checkout
        </Button>
      </div>
    </div >
  )
}
