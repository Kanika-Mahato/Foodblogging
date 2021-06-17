import React from 'react'
import './Content.css'
import mainicecream from '../img/mainicecream.jpg'
import mainsweet from '../img/mainsweet.jpg'
import mainspecial from '../img/mainspecial.jpg'
import maincake from '../img/maincake.jpg'
import { Link } from 'react-router-dom'


export default function Content() {
    return (
        <>  
        
        {/* ------------------------main contnt--------------------- */}
        
        <div className="headbar">
            <h3>Simple Recipes That Make You Feel Good</h3>
            <h1>New Recipes</h1>
            <hr />
        </div>

            <div className="content">
                <div className="row">
                    <div className="col-sm-3 column">
                    <Link to='/ice'> <img src={mainicecream} alt="" className="img-thumbnail"></img></Link>

                        <h3>Ice cream</h3>
                        <p>How to make ice cream at home ? Each ice cream recipe will make you hunger for an extra scoop...</p>
                        <Link to='/ice'><button className="btn btn-warning more">More Info</button></Link>
                    </div>
                    <div className="col-sm-3 column">
                        <img src={mainsweet} alt="" className="img-thumbnail"></img>

                        <h3>Sweets</h3>
                        <p>Full of aromatic spices, topped with pistachios or soaked in </p>
                        <Link to='/sweet'><button className="btn btn-warning more">More Info</button></Link>
                    </div>
                    <div className="col-sm-3 column">
                        <img src={maincake} alt="" className="img-thumbnail"></img>

                        <h3>Cakes</h3>
                        <p>Full of aromatic spices, topped with pistachios or soaked in rose syrup, </p>
                       <Link to="/cakes"><button className="btn btn-warning more">More Info</button></Link> 
                    </div>

                    <div className="col-sm-3 column">
                        <img src={mainspecial} alt="" className="img-thumbnail"></img>

                        <h3>Specials</h3>
                        <p>Full of aromatic spices, topped with pistachios or soaked in rose syrup, .</p>
                        <Link to='/specials'><button className="btn btn-warning more">More Info</button></Link>
                    </div>
                </div>
            </div>
        </>
    )
}
