import React, { useState } from 'react'
import './Trending.css'
import { Link } from 'react-router-dom'
import mainprofile from '../img/mainprofile.jpg'
import cake1 from '../img/cake1.jpg'
import ice1 from '../img/ice1.jpg'
import ladoo1 from '../img/ladoo1.jpg'
import kheer1 from '../img/kheer1.jpg'
import ghewar from '../img/ghewar.jpg'
import anarsa from '../img/anarsa.jpg'



export default function Trending() {
    const [counter, setCounter] = useState(10);
    const [counter1, setCounter1] = useState(20);
    const [counter2, setCounter2] = useState(30);
    const [counter3, setCounter3] = useState(40);
    const [counter4, setCounter4] = useState(50);
    const [counter5, setCounter5] = useState(60);
    const [Email,setEmail]=useState("");
    function onSubscribe(){
        setEmail({Email:""})

    }
    
    return (
        <>
            <div className="trending">
                <div className="row">
                    <div className="col-md-7 trends">
                        <h2>TRENDING RIGHT NOW</h2>
                        {/* --------------------------row1--------------------- */}
                        <div className="row mainBox">
                            <div className="col-md-5 trenditems">
                                <img src={ice1} alt="" className="img-thumbnail"></img>

                                <div className="comment">
                                    <div className="left">
                                        <h4>Ice cream</h4>
                                        <p>5 hrs ago</p>
                                    </div>
                                    <div class="right">
                                        <span onClick={() => { setCounter(counter + 1) }}><i class="fa fa-heart" aria-hidden="true"></i></span>
                                        <p>{counter}</p>
                                    </div>

                                </div>

                                <Link to='/ice'><button className="btn btn-warning more">More Info</button>
                                </Link>
                            </div>
                            <div className="col-md-5 trenditems">
                                <img src={anarsa} alt="" className="img-thumbnail"></img>

                                <div className="comment">
                                    <div className="left">
                                        <h4>Anarsa</h4>
                                        <p>6 hrs ago</p>
                                    </div>
                                    <div class="right">
                                        <span onClick={() => { setCounter1(counter1 + 1) }}><i class="fa fa-heart" aria-hidden="true"></i></span><br />
                                        <p>{counter1}</p>
                                    </div>

                                </div>

                                <Link  to='./anarsa'><button className="btn btn-warning more">More Info</button></Link>

                            </div>

                        </div>
                        {/* --------------------------------row2-------------------------------- */}
                        <div className="row mainBox">
                            <div className="col-md-5 trenditems">
                                <img src={cake1} alt="" className="img-thumbnail"></img>

                                <div className="comment">
                                    <div className="left">
                                        <h4>Cake</h4>
                                        <p> 1 Day ago</p>
                                    </div>
                                    <div class="right">
                                        <span onClick={() => { setCounter2(counter2 + 1) }}><i class="fa fa-heart" aria-hidden="true"></i></span><br />
                                        <p>{counter2}</p>
                                    </div>

                                </div>
                               <Link to='./cakes'><button className="btn btn-warning more">More Info</button></Link> 

                            </div>
                            <div className="col-md-5 trenditems">
                                <img src={kheer1} alt="" className="img-thumbnail"></img>

                                <div className="comment">
                                    <div className="left">
                                        <h4>Kheer</h4>
                                        <p>2 days ago</p>
                                    </div>
                                    <div class="right">
                                        <span onClick={() => { setCounter3(counter3 + 1) }}><i class="fa fa-heart" aria-hidden="true"></i></span><br />
                                        <p>{counter3}</p>
                                    </div>

                                </div>
                                <Link to='./kheer'><button className="btn btn-warning more">More Info</button></Link>

                            </div>

                        </div>
                        {/* -----------------------------------Row3-------------------------- */}

                        <div className="row mainBox">
                            <div className="col-md-5 trenditems">
                                <img src={ghewar} alt="" className="img-thumbnail"></img>
                                <div className="comment">
                                    <div className="left">
                                        <h4>Ghevar</h4>
                                        <p>2 days ago</p>
                                    </div>
                                    <div class="right">
                                        <span onClick={() => { setCounter4(counter4 + 1) }}><i class="fa fa-heart" aria-hidden="true"></i></span><br />
                                        <p>{counter4}</p>
                                    </div>

                                </div>



                             <Link to='./ghevar'><button className="btn btn-warning more">More Info</button></Link>   

                            </div>
                            <div className="col-md-5 trenditems">
                                <img src={ladoo1} alt="" className="img-thumbnail"></img>

                                <div className="comment">
                                    <div className="left">
                                        <h4>Ladoo</h4>
                                        <p>4 days ago</p>
                                    </div>
                                    <div class="right">
                                        <span onClick={() => { setCounter5(counter5 + 1) }}><i class="fa fa-heart" aria-hidden="true"></i></span><br />
                                        <p>{counter5}</p>
                                    </div>

                                </div>
                                <Link to='./ladoo'><button className="btn btn-warning more">More Info</button></Link>

                            </div>

                        </div>



                    </div>
                    <div className="col-md-5 aboutus">
                        <h2>About Us</h2>
                        <div className="about">
                            <img src={mainprofile} alt=""></img>
                            <h4>Aarohi</h4>
                            <h5>Welcome to -------</h5>
                            <p> might be the most distinctive website weve come across.

                                Anton Irene is a design agency based in Manhattan.

                                Why are they a distinctive web presence?

                                Because their page takes parallax scrolling to the next level.

                                The snowy effects, bold colors, and quirky visuals create
                                a truly captivating experience.

                                This might be the most distinctive website we’ve come across.

                                Anton & Irene is a design agency based in Manhattan.

                                Why are they a distinctive web presence?

                                Because their page takes parallax scrolling to the next level.

                                The snowy effects, bold colors, and quirky visuals create a truly captivating experience
                            </p>
                            <hr />
                            <q>
                                Listen to the people who love you. Believe that they are worth living for even
                                when you don't believe it. Seek out the memories depression takes away and project them into the future.
                                Be brave; be strong; take your pills. Exercise because it's good for you even if every step weighs a
                                thousand pounds.Eat when food itself disgusts you. Reason with yourself when you have lost your reason
                            </q><br /><br />
                            <h6>― Andrew Solomon, The Noonday Demon: An Atlas of Depression</h6>
                            <hr />
                            {/* ------------------------------subscription----------------------- */}
                            <div className="subscription">
                                <h4>Don't Miss A New Recipe!</h4><br />
                                <form >
                                <input required type="email" placeholder="Your Email" onChange={(e)=>setEmail({Email:e.target.value})} ></input>
                                <button onSubmit={onSubscribe} type="submit" className=" sub" >SUBSCRIBE</button>
                                </form>
                                

                            </div>
                        </div>


                    </div>
                </div>


            </div>
        </>
    )
}
