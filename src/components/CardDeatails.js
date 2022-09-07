import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import './style.css';
import { DLT } from '../redux/actions/action';


function CardDeatails() {

    const [data, setData] = useState([]);
    console.log(data);

    const { id } = useParams();
    // console.log(id);

    const dispatch = useDispatch();
    const history = useNavigate();

    const getdata = useSelector((state) => state.cartreducer.carts);
    // console.log(getdata);

    const compare = () => {
        let comparedata = getdata.filter((element) => {
            return element.id == id
        });
        setData(comparedata);
    }

    useEffect(() => {
        compare();
    }, [id]);

    const dlt = (id) =>{
        dispatch(DLT(id));
        history("/")
    }
    return (
        <>
            <div className="container detailcontainer">
                <h2 className="text-center">Items Detail Page</h2>
                <section className="container mt-3">
                    <div className="iteamsdetails">
                        {
                            data.map((element) => {
                                return (
                                    <>

                                        <div className="items_img">
                                            <img style={{ width: '150px' }} src={element.image} alt="" />
                                        </div>
                                        <div className="details">
                                            <Table>
                                                <tr>
                                                    <td>
                                                        <p>
                                                            <strong>Product Name</strong>: {element.title}</p>
                                                        <p>
                                                            <strong>Price</strong>: $ {element.price}
                                                        </p>
                                                        {/* <p>
                                                            <strong>Total</strong>: $ 300
                                                        </p> */}
                                                        {/* <div className='mt-5 d-flex justify-content-between align-items-center' style={{width: 100, cursor: 'pointer', background: "#ddd", color: "#111"}}>
                                                            <span style={{fontSize: 24}}>-</span>
                                                            <span style={{fontSize: 24}}>0</span>
                                                            <span style={{fontSize: 24}}>-</span>
                                                        </div> */}
                                                    </td>
                                                    <td>

                                                        <p>
                                                            <strong>Rating :</strong> <span style={{ background: "green", color: "#fff", padding: "3px", borderRadius: "5px", width :'40px' }}>{element.rating.rate} ★</span>
                                                            </p>

                                                        <p> 
                                                            <strong>Order Review:</strong><span>  {element.rating.count}</span>
                                                            </p>

                                                        <p>
                                                            <strong>Remove :</strong> <span ><i className='fas fa-trash' style={{ color: 'red', cursor: 'pointer', fontSize: '20px' }} onClick={()=>dlt(element.id)}></i></span>
                                                        </p>


                                                    </td>
                                                </tr>
                                            </Table>
                                        </div>
                                    </>
                                )
                            })
                        }

                    </div>
                </section>
            </div>
        </>
    )
}

export default CardDeatails