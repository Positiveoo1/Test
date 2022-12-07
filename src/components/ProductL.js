import React from 'react';
import { useState, useEffect } from 'react';
import { Outlet, Link } from "react-router-dom";

const ProductL = () => {
    return (
        <>
            <div className="main_menu">
                <h1>Product List</h1>
                <div className="btn">
                    <button className='add'>

                        <Link to="adding">Add</Link>
                    </button>
                    <Outlet />

                    <button>Mass Delete</button>
                </div>
                <hr />

                
                    <div className="card">
                        <input className='check' type="checkbox" />
                    </div>
                


            </div>
        </>
    );
};


export default ProductL;