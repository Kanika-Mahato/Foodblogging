import React from 'react'
import {Link} from 'react-router-dom'
import './Footer.css'
export default function Footer() {
    return (
        <>
            <div className="footer">
                <h4>Follow Us At</h4><br />
                <ul>
                    <li><span><i class="fa fa-facebook" aria-hidden="true"></i></span></li>
                    <li><span><i class="fa fa-instagram" aria-hidden="true"></i></span></li>
                    <li><span><i class="fa fa-twitter" aria-hidden="true"></i></span></li>
                    <li><span><i class="fa fa-pinterest-p" aria-hidden="true"></i></span></li>

                    <li><span><i class="fa fa-youtube-play" aria-hidden="true"></i></span></li>
                </ul>
                <span className="logo">
                    <i class="fa fa-cutlery" aria-hidden="true"></i>
                </span>
                <hr className="divide"/><br/>
                <ul >
                    <Link to='/recipes' style={{textDecoration:"none",color:"black"}}><li>Recipes</li></Link>
                    <Link to='/about' style={{textDecoration:"none",color:"black"}}><li>About</li></Link>
                   <Link to='/' style={{textDecoration:"none",color:"black"}}><li>Home</li></Link> 
                </ul>
                <h6>Copyrights &copy; Foodies.in</h6>
                <p style={{textAlign:"center"}}>+9190023040506 , +9187363537378</p>

            </div>
        </>
    )
}
