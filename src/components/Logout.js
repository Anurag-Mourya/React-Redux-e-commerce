import React from 'react';
import './style.css'

function Logout(e) {
    const clickHandel = () =>{
        localStorage.clear();
        window.location.reload();
        e.preventDefault();
    }
  return (
    <div className='center'><button onClick={clickHandel} className="btn btn-danger text-white" >Logout</button></div>
  )
}

export default Logout;