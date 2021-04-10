import React, { useState } from 'react'
import { IoLocationOutline, IoSearchOutline } from 'react-icons/io5'
import './Testpoints.css'

const Testpoints = () => {
    const [input , setInput] = useState('');
    return (
        <div className="container testpts">
            <h1>Vaccination Center</h1>
            <div className="search">
                <IoSearchOutline className="icon"/>
                <input placeholder="Your City" type="text" onChange={(e) => setInput(e.target.value)} value={input} />
            </div>
            <div className="location">
                <IoLocationOutline className="arrow" />
                <h3>New Delhi</h3>
            </div>

            <div className="all_lts">
                    <h3>Aruna Asaf Ali Govt. Hospital </h3>
                    <h3>Aruna Asaf Ali Govt. Hospital </h3>
                    <h3>Aruna Asaf Ali Govt. Hospital </h3>
                    <h3>Aruna Asaf Ali Govt. Hospital </h3>
                    <h3>Aruna Asaf Ali Govt. Hospital </h3>
                    <h3>Aruna Asaf Ali Govt. Hospital </h3>
                </div>
            

        </div>
    )
}

export default Testpoints
