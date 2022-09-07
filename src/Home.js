import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './components/style.css'

function Home() {
    const [item, setItem] = useState([]);


    useEffect(() => {
        axios.get('https://reqres.in/api/login')
            .then((responce) => {
                setItem(responce.data.data);
                console.log(responce);
            })
    }, []);

    return (
        <div>
            <div className="container api">
                <h1 className='text-center bg-primary text-white rounded'>Out Put of API</h1>
                {
                    item.map((posts) => {
                        const { id, name, year } = posts;
                        return  <div className='card my-4 text-center' key={id}>

                            <h5>User Name: <span className='text-success'>{name}</span></h5>
                            <h5>User Id: <span className='text-danger'>{id}</span></h5>
                            <h5>Year: <span className='text-primary'>{year}</span></h5>

                        </div>
                    })
                }


            </div>
        </div>
    )
}

export default Home;