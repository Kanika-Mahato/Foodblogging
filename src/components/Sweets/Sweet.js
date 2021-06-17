import React from 'react'
import  './Sweet.css'
import ladoo2 from '../../img/ladoo2.jpg'
import ladoo3 from '../../img/ladoo3.jpg'
import ladoo4 from '../../img/ladoo4.jpg'
import ladoo5 from '../../img/ladoo5.jpg'
import rasgulla from '../../img/rasgulla.jpg'
import ladoo7 from '../../img/ladoo7.jpg'
import kheer1 from '../../img/kheer1.jpg'
import sewai from '../../img/sewai.jpg'
import {Link} from 'react-router-dom'

export default function Sweet() {
    return (
        <>
        <div className="container ice">
            <h1 style={{fontFamily: "'Dancing Script', cursive"}}>Land of sweets galore!</h1>
            {/* ----------------row1----------- */}
            <div className="row Row">
                <div className="col-sm-3">
                    <Link to='/jalebi'><img src={ladoo2} alt="" className="img-thumbnail"></img></Link>

                    <h3>Jalebi</h3>
                    <p>How to make ice cream at home ? Each ice cream recipe will make you hunger for an extra scoop...</p>

                </div>
                <div className="col-sm-3">
                <Link to='/ladoo'><img src={ladoo3} alt="" className="img-thumbnail"></img></Link>

                    <h3>Motichur Ladoo</h3>
                    <p>How to make ice cream at home ? Each ice cream recipe will make you hunger for an extra scoop...</p>


                </div>
                <div className="col-sm-3">
                   <Link to="/sandesh"><img src={ladoo4} alt="" className="img-thumbnail"></img></Link> 

                    <h3>Sandesh</h3>
                    <p>How to make ice cream at home ? Each ice cream recipe will make you hunger for an extra scoop...</p>


                </div>
                <div className="col-sm-3">
                    <Link to="/besan"><img src={ladoo5} alt="" className="img-thumbnail"></img></Link>

                    <h3>Besan Ladoo</h3>
                    <p>How to make ice cream at home ? Each ice cream recipe will make you hunger for an extra scoop...</p>
                    

                </div>

            </div>
            {/* ---------------------------row2--------------- */}
            <div className="row Row">
                <div className="col-sm-3">
                    <Link to="rasgulla"><img src={rasgulla} alt="" className="img-thumbnail"></img></Link>

                    <h3>Rasgullla</h3>
                    <p>How to make ice cream at home ? Each ice cream recipe will make you hunger for an extra scoop...</p>

                </div>
                <div className="col-sm-3">
                    <Link to="/coconut"><img src={ladoo7} alt="" className="img-thumbnail"></img></Link>

                    <h3>Coconut Ladoo</h3>
                    <p>How to make ice cream at home ? Each ice cream recipe will make you hunger for an extra scoop...</p>


                </div>
                <div className="col-sm-3">
                    <Link to="/sewai"><img src={sewai} alt="" className="img-thumbnail"></img></Link>

                    <h3>Sewai</h3>
                    <p>How to make ice cream at home ? Each ice cream recipe will make you hunger for an extra scoop...</p>


                </div>
                <div className="col-sm-3">
                    <Link to="/kheer"><img src={kheer1} alt="" className="img-thumbnail"></img></Link>

                    <h3>Kheer</h3>
                    <p>How to make ice cream at home ? Each ice cream recipe will make you hunger for an extra scoop...</p>


                </div>

            </div>
        </div>
    </>
    )
}
