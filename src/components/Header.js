import React, { useEffect, useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Table } from 'react-bootstrap';
import Menu from '@mui/material/Menu';
// import MenuItem from '@mui/material/MenuItem';
import Badge from '@mui/material/Badge';
import { NavLink } from 'react-router-dom'
import './style.css';
import { useSelector } from 'react-redux';
import { DLT } from '../redux/actions/action';
import { useDispatch } from 'react-redux';
import Logout from './Logout';



function Header() {
    const [price, setPrice] = useState(0);
    console.log(price)

    const getdata = useSelector((state) => state.cartreducer.carts);
    // console.log(getdata)

    const dispatch = useDispatch();
    //to help to get the value of state from reducer..

    // bootstrap react functions..
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const dlt = (id) => {
        dispatch(DLT(id))
    }

    const total = () => {
        let price = 0;
        getdata.map((element, index) => {
            price = element.price + price;
        });
        setPrice(price)
    }

    useEffect(() => {
        total();
    }, [total])

    return (
        <Navbar bg="dark" variant="dark" style={{
            height: '60px', position: "fixed",
            zIndex: 9999, width: "100%", top: 0
        }} className="sticky_nav">
            <Container>
                <Nav>
                <NavLink to="/" className="text-decoration-none text-light mx-3">Home Api</NavLink></Nav>

                <Nav className="me-auto">
                    <NavLink to="/add_to_card" className="text-decoration-none text-light">Add to Cart</NavLink>
                </Nav>

                <Nav className="me-auto">
                    <NavLink to="/add_to_card" className="text-decoration-none text-light"><Logout/></NavLink>
                </Nav>
                <Badge badgeContent={getdata.length} color="warning"
                    id="basic-button"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}>
                    <i className="fa-solid fa-cart-shopping text-light" style={{ fontSize: '25px', cursor: 'pointer' }}></i>
                </Badge>


            </Container>

            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                {
                    getdata.length ?
                        <div className='card_details' style={{ width: '24rem', padding: '10px' }}>
                            <Table>
                                <thead>
                                    <tr>
                                        <th>
                                            Added Product
                                        </th>
                                        <th>
                                            Product Name
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        getdata.map((element) => {
                                            return (
                                                <>
                                                    <tr>
                                                        <td>
                                                            <NavLink to={`/cart/${element.id}`} onClick={handleClose}><img src={element.image} alt="" style={{ width: '5rem', height: '5rem' }} /></NavLink>
                                                        </td>
                                                        <td>
                                                            <p>{element.title}</p>
                                                            <p>Price : ${element.price}</p>
                                                            <p>Quantity : 1</p>
                                                            <p style={{ color: 'red', fontSize: 20, cursor: 'pointer' }} onClick={() => dlt(element.id)}><i className='fas fa-trash smalltrash'></i></p>
                                                        </td>
                                                        <td>
                                                            <p className="mt-5" style={{ color: 'red', fontSize: 20, cursor: 'pointer' }} onClick={() => dlt(element.id)}>
                                                                <i className='fas fa-trash largetrash'></i>
                                                            </p>
                                                        </td>

                                                    </tr>
                                                </>
                                            )
                                        })
                                    }
                                    <p className='text-center'>Total: ${price}</p>
                                </tbody>
                            </Table>
                        </div> :
                        <div className="card_details">
                            <p>Your cart is empty</p>
                        </div>
                }

            </Menu>
        </Navbar>
    )
}

export default Header