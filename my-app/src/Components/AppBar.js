import { FaShoppingCart } from 'react-icons/fa';
import React, { useContext } from 'react'
import { Form, Dropdown, Container, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { StoreContext } from '../Context/Context';

export default function AppBar() {
    const { cart, filter, filterDispatch } = useContext(StoreContext)
    return (
        <div>
            <Navbar bg="dark" variant="dark" style={{ height: '80px' }}>
                <Container>
                    <Navbar.Brand>
                        <Link to="/">Shop-Lync</Link>
                    </Navbar.Brand>
                    <Navbar.Text className="search" style={{ width: 500 }}>
                        <Form.Control type="text" placeholder="Search a product" value={filter.searchQuery} onChange={e => filterDispatch({ type: 'SET_PRODUCT_SEARCH', payload: e.target.value })} />
                    </Navbar.Text>
                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            <FaShoppingCart></FaShoppingCart>
                            <span style={{ padding: '13px' }} bg="success">{cart?.data.length ?? 0}</span>
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <span style={{ padding: '10px' }}>
                                {cart?.data?.length ? <Link to="/cart">Go To Cart</Link> : 'Cart is empty!!'}
                            </span>
                        </Dropdown.Menu>
                    </Dropdown>
                </Container>
            </Navbar>
        </div>
    )
}
