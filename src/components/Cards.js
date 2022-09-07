import React, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import "./style.css";
// dispathch is use to trigger the function...
import { useDispatch } from 'react-redux';

// now we are sending the data on action when btn is click
import { ADD } from '../redux/actions/action';

function Cards() {
    const [item, setItem] = useState([]);

    const dispatch = useDispatch();

    const send = (e) => {
        dispatch(ADD(e));
        // console.log(e)

    }


    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
            .then((responce) => {

                setItem(responce.data);
            })

    }, [])

    return (
        <div className="container mt-3">
            <h2 className='text-center'>Add to cart Project</h2>

            <div className="row d-flex justify-content-center align-item-center">
                {
                    item.map((element, id) => {
                        return (
                            <>
                                <Card style={{ width: '22rem', border: 'none',height: '420px' }} className="mx-2 mt-4 card_style text-center">
                                    <Card.Img variant="top" src={element.image} style={{ height: '13rem', width: '60%' }} className="m-auto mt-3" />
                                    <Card.Body>
                                        <Card.Title>{element.title}</Card.Title>
                                        <Card.Text>
                                            Price = ${element.price}
                                        </Card.Text>
                                        <div className='button_div' >
                                            <Button variant="primary" onClick={() => send(element)} className='col-lg-12' >Add to Cart</Button>
                                        </div>

                                    </Card.Body>
                                </Card>
                            </>
                        )
                    })
                }

            </div>
        </div>
    )
}

export default Cards