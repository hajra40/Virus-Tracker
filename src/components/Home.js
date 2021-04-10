import React, { useState } from 'react'
import "./Home.css";
import { IoSearchOutline } from 'react-icons/io5'
import virus from './virus.svg'

const Home = () => {
    const [input , setInput] = useState('');

    console.log(input)
    return (
        <div className="home container">
            <div className="search__sec">
                <h1>Stay Safe , Stay At Home</h1>
                <h2>Know the Latest Virus</h2>
                <div className="search">
                    <IoSearchOutline className="icon"/>
                    <input type="text" onChange={(e) => setInput(e.target.value)} value={input} />
                </div>
            </div>

            <img className="virus__img" src={virus} />
        </div>
    )
}

export default Home
