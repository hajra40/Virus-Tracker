import React from 'react'
import { RiArrowRightCircleFill } from 'react-icons/ri'
import './Mutation.css'
import {Link} from 'react-router-dom'

const Mutation = () => {
    return (
        <div className="container mutation">
            <h1>New Mutation of COVID-19</h1>
            <div className="all">
                <div className="new_mutation">
                    <h1>Double Mutant</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis pariatur ducimus asperiores iure, sed magnam!</p>
                </div>
                <div className="new_mutation">
                    <h1>Double Mutant</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis pariatur ducimus asperiores iure, sed magnam!</p>
                </div>
                <div className="new_mutation">
                    <Link to="/mutations">
                        <RiArrowRightCircleFill className="arrow"/>
                    </Link>
                    <h4 className="more">Explore More</h4>
                </div>
            </div>
        </div>
    )
}

export default Mutation
