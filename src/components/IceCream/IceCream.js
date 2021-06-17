import React from 'react'
import {Link} from 'react-router-dom'
import './IceCream.css'
import ice2 from '../../img/ice2.jpg'
import ice3 from '../../img/ice3.jpg'
import ice4 from '../../img/ice4.jpg'
import ice5 from '../../img/ice5.jpg'
import ice6 from '../../img/ice6.jpg'
import ice7 from '../../img/ice7.jpg'
import ice8 from '../../img/ice8.jpg'
import icecream from '../../img/ice-cream.jpg'
export default function IceCream() {
    return (
        <>
            <div className="container ice">
                <h1 style={{fontFamily: "'Dancing Script', cursive"}}>Make your day with our scoop</h1>
                {/* ----------------row1----------- */}
                <div className="row Row">
                    <div className="col-sm-3">
                        <Link to="/creamy"><img src={icecream} alt="" className="img-thumbnail"></img>
                        </Link>
                        <h3>Creamy Balls</h3>
                        <p>How to make ice cream at home ? Each ice cream recipe will make you hunger for an extra scoop...</p>

                    </div>
                    <div className="col-sm-3">
                        <Link to="/chocolate"><img src={ice2} alt="" className="img-thumbnail"></img></Link>

                        <h3>Chocolate</h3>
                        <p>How to make ice cream at home ? Each ice cream recipe will make you hunger for an extra scoop...</p>


                    </div>
                    <div className="col-sm-3">
                        <Link to="/vanilla"><img src={ice3} alt="" className="img-thumbnail"></img></Link>

                        <h3>Vanilla</h3>
                        <p>How to make ice cream at home ? Each ice cream recipe will make you hunger for an extra scoop...</p>


                    </div>
                    <div className="col-sm-3">
                        <Link to="/strawberry"><img src={ice4} alt="" className="img-thumbnail"></img></Link>

                        <h3>Strawberry</h3>
                        <p>How to make ice cream at home ? Each ice cream recipe will make you hunger for an extra scoop...</p>


                    </div>

                </div>
                {/* ---------------------------row2--------------- */}
                <div className="row Row">
                    <div className="col-sm-3">
                        <Link to="/butter"><img src={ice5} alt="" className="img-thumbnail"></img>
                        </Link>
                        <h3>Butter scotch</h3>
                        <p>How to make ice cream at home ? Each ice cream recipe will make you hunger for an extra scoop...</p>

                    </div>
                    <div className="col-sm-3">
                        <Link to="/green"><img src={ice6} alt="" className="img-thumbnail"></img></Link>

                        <h3>Green Berry</h3>
                        <p>How to make ice cream at home ? Each ice cream recipe will make you hunger for an extra scoop...</p>


                    </div>
                    <div className="col-sm-3">
                        <Link to="/cupcone"><img src={ice7} alt="" className="img-thumbnail"></img></Link>

                        <h3>Cup cone</h3>
                        <p>How to make ice cream at home ? Each ice cream recipe will make you hunger for an extra scoop...</p>


                    </div>
                    <div className="col-sm-3">
                        <Link to="/chococone"><img src={ice8} alt="" className="img-thumbnail"></img>
                        </Link>
                        <h3>Choco  cones</h3>
                        <p>How to make ice cream at home ? Each ice cream recipe will make you hunger for an extra scoop...</p>


                    </div>

                </div>
            </div>
        </>
    )
}
