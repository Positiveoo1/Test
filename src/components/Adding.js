import React from 'react';
// import { useState, useEffect } from 'react';

const Adding = () => {
    // const [dvd, setDvd] = useState(""); {

    // }


    return (
        <>

            <div className="main_menu">
                <h1>Product Add</h1>

                <div className="btn">

                    <button className='save'>Save</button>
                    <button className='cancel'>Cancel</button>
                </div>
                <hr />

                <div className="info">
                    <div className="one">
                        <div className="txt1">
                            <h1>SKU</h1>
                        </div>
                        <div className="inp1">
                            <input type="text" />
                        </div>
                    </div>
                    <div className="two">
                        <div className="txt2">
                            <h1>Name</h1>
                        </div>
                        <div className="inp2">
                            <input type="text" />
                        </div>
                    </div>
                    <div className="three">
                        <div className="txt3">
                            <h1>Price in $</h1>
                        </div>
                        <div className="inp3">
                            <input type="number" />
                        </div>
                    </div>
                    <div className="four">
                        <div className="txt4">
                            <h1>Type Switcher</h1>
                        </div>
                        <div className="inp4">
                            <select name="" id="selection">
                                <optgroup label='Type switcher'>
                                    <option id='dvd' value="dvd">DVD</option>
                                    <option id='book' value="book">Book</option>
                                    <option id='furn' value="furniture">Furniture</option>
                                </optgroup>

                            </select>

                        </div>

                    </div>
                    <div className="fifth">
                        <div className="txt5">
                            <h1>Size (Mb)</h1>
                        </div>
                        <div className="inp5">
                            <input type="number" />
                        </div>
                    </div>
                </div>


                {/* {
                    info.map(() => {

                    })
                } */}
            </div>
        </>
    );
};


export default Adding;