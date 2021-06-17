import React from 'react'
import './Home.css'
import Content from '../Content'
import Trending from '../Trending'
import Popular from'../Popular'
import {Link} from 'react-router-dom'

export default function Home() {
    return (
        <>
            <div className="banner">
                <div className="inner">
                <h1><strong>Foodie</strong></h1>
                <h4>Eat Healthy Without Sacrificing Quality or Flavour.</h4>
                <Link to="/contact"><button className="btn btn-danger sign">Sign Me Up!</button></Link>
                </div>
             </div>
             <Content/>
             <Trending/>
             <Popular/>
        </>
    )
}
