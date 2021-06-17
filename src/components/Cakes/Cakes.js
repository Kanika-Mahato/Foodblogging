import React from 'react'
import { Link } from 'react-router-dom'
import './Cakes.css'
import cake2 from '../../img/cake2.jpg'
import cake3 from '../../img/cake3.jpg'
import cake4 from '../../img/cake4.jpg'
import cake5 from '../../img/cake5.jpg'
import cake6 from '../../img/cake6.jpg'
import cake7 from '../../img/cake7.jpg'
import cake8 from '../../img/cake8.jpg'
import cake9 from '../../img/cake9.jpg'

export default function Cakes() {
    return (
        <>
            <div className="container ice">
                <h1 style={{fontFamily: "'Dancing Script', cursive"}}>Baked with love</h1>
                {/* ----------------row1----------- */}
                <div className="row Row">
                    <div className="col-sm-3">
                        <Link to="/white"><img src={cake2} alt="" className="img-thumbnail"></img>
                        </Link>
                        <h3>White Forest</h3>
                        <p>How to make ice cream at home ? Each ice cream recipe will make you hunger for an extra scoop...</p>

                    </div>
                    <div className="col-sm-3">
                        <Link to="/chococake"><img src={cake3} alt="" className="img-thumbnail"></img>
                        </Link>
                        <h3>Chocolate Cake</h3>
                        <p>How to make ice cream at home ? Each ice cream recipe will make you hunger for an extra scoop...</p>


                    </div>
                    <div className="col-sm-3">
                        <Link to="/mango"><img src={cake4} alt="" className="img-thumbnail"></img></Link>

                        <h3>Mango Cake</h3>
                        <p>How to make ice cream at home ? Each ice cream recipe will make you hunger for an extra scoop...</p>


                    </div>
                    <div className="col-sm-3">
                        <Link to="/chocoberry"><img src={cake5} alt="" className="img-thumbnail"></img></Link>

                        <h3>Choco Berry Cake</h3>
                        <p>How to make ice cream at home ? Each ice cream recipe will make you hunger for an extra scoop...</p>


                    </div>

                </div>
                {/* ---------------------------row2--------------- */}
                <div className="row Row">
                    <div className="col-sm-3">
                        <Link to="/chocomonster"><img src={cake6} alt="" className="img-thumbnail"></img>
                        </Link>
                        <h3>Choco monster</h3>
                        <p>How to make ice cream at home ? Each ice cream recipe will make you hunger for an extra scoop...</p>

                    </div>
                    <div className="col-sm-3">
                        <Link to="/fruitcake"><img src={cake7} alt="" className="img-thumbnail"></img></Link>

                        <h3>Fruit cake</h3>
                        <p>How to make ice cream at home ? Each ice cream recipe will make you hunger for an extra scoop...</p>


                    </div>
                    <div className="col-sm-3">
                        <Link to="/strawberrycupcake"><img src={cake8} alt="" className="img-thumbnail"></img></Link>

                        <h3>Strawberry cup cake</h3>
                        <p>How to make ice cream at home ? Each ice cream recipe will make you hunger for an extra scoop...</p>


                    </div>
                    <div className="col-sm-3">
                        <Link to="/cupcake"><img src={cake9} alt="" className="img-thumbnail"></img></Link>

                        <h3>Cup cake</h3>
                        <p>How to make ice cream at home ? Each ice cream recipe will make you hunger for an extra scoop...</p>


                    </div>

                </div>
            </div>
        </>
    )
}
