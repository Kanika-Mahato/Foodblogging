import React from 'react'
import { Link } from 'react-router-dom'
import './Specials.css'
import anarsa from '../../img/anarsa.jpg'
import balusahi from '../../img/balusahi.jpg'
import ghewar from '../../img/ghewar.jpg'
import rasgulla from '../../img/rasgulla.jpg'
import pinni from '../../img/pinni.jpg'
import modak from '../../img/modak.jpg'
import khaja from '../../img/khaja.jpg'
import gulabjamun from '../../img/gulabjanum.jpg'
export default function Specials() {
    return (
        <>
            <div className="container ice">
                <h1 style={{fontFamily: "'Dancing Script', cursive"}}>Taste the rainbow</h1>
                {/* ----------------row1----------- */}
                <div className="row Row">
                    <div className="col-sm-3">
                        <Link to="/anarsa"><img src={anarsa} alt="" className="img-thumbnail"></img>
                        </Link>
                        <h3>Anarsa</h3>
                        <p>How to make ice cream at home ? Each ice cream recipe will make you hunger for an extra scoop...</p>

                    </div>
                    <div className="col-sm-3">
                        <Link to="/balusahi"><img src={balusahi} alt="" className="img-thumbnail"></img>
                        </Link>
                        <h3>Balusahi</h3>
                        <p>How to make ice cream at home ? Each ice cream recipe will make you hunger for an extra scoop...</p>


                    </div>
                    <div className="col-sm-3">
                        <Link to="/rasgulla"><img src={rasgulla} alt="" className="img-thumbnail"></img></Link>

                        <h3>Rasgulla</h3>
                        <p>How to make ice cream at home ? Each ice cream recipe will make you hunger for an extra scoop...</p>


                    </div>
                    <div className="col-sm-3">
                        <Link to="/ghevar"><img src={ghewar} alt="" className="img-thumbnail"></img></Link>

                        <h3>Ghevar</h3>
                        <p>How to make ice cream at home ? Each ice cream recipe will make you hunger for an extra scoop...</p>


                    </div>

                </div>
                {/* ---------------------------row2--------------- */}
                <div className="row Row">
                    <div className="col-sm-3">
                        <Link to="/modak"><img src={modak} alt="" className="img-thumbnail"></img></Link>

                        <h3>Modak</h3>
                        <p>How to make ice cream at home ? Each ice cream recipe will make you hunger for an extra scoop...</p>

                    </div>
                    <div className="col-sm-3">
                        <Link to="/khaja"><img src={khaja} alt="" className="img-thumbnail"></img>
                        </Link>
                        <h3>Khaja</h3>
                        <p>How to make ice cream at home ? Each ice cream recipe will make you hunger for an extra scoop...</p>


                    </div>
                    <div className="col-sm-3">
                        <Link to="/pinni"><img src={pinni} alt="" className="img-thumbnail"></img></Link>

                        <h3>Pinni</h3>
                        <p>How to make ice cream at home ? Each ice cream recipe will make you hunger for an extra scoop...</p>


                    </div>
                    <div className="col-sm-3">
                        <Link to="/gulabjamun"><img src={gulabjamun} alt="" className="img-thumbnail"></img></Link>

                        <h3>Gulabjamun</h3>
                        <p>How to make ice cream at home ? Each ice cream recipe will make you hunger for an extra scoop...</p>


                    </div>

                </div>
            </div>
        </>
    )
}
