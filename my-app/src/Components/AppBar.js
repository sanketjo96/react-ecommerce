import { FaShoppingCart } from 'react-icons/fa';
import React from 'react'
import { Form, Dropdown, Badge, Container, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function AppBar() {
    return (
        <div>
            <Navbar bg="dark" variant="dark" style={{ height: '80px' }}>
                <Container>
                    <Navbar.Brand>
                        <Link to="/">Shop-Lync</Link>
                    </Navbar.Brand>
                    <Navbar.Text className="search" style={{ width: 500 }}>
                        <Form.Control type="text" placeholder="Search a product" />
                    </Navbar.Text>
                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            <FaShoppingCart></FaShoppingCart>
                            <Badge bg="success">{10}</Badge>
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <span style={{ padding: '10px' }}>Cart is empty!!</span>
                        </Dropdown.Menu>
                    </Dropdown>
                </Container>
            </Navbar>
        </div>
    )
}
