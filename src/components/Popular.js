import React from 'react'
import './Popular.css'
import  rasgulla from '../img/rasgulla.jpg'
import  mainicecream2 from '../img/mainicecream2.jpg'
import  cake1 from '../img/cake1.jpg'

export default function Popular() {
    return (
        <div className="popular container">
            <h1>Popular Items</h1>
            {/* ------------row1------------- */}
            <div className="row">
                <div className="col-sm-4 column-img">
                    <img src={rasgulla} alt=""  />

                </div>
                <div className="col-sm-8 column-text">
                    <h2>Rashogolla</h2>
                    <p>
                        I’m Jaclyn, a thirty something wife and I aren’t very good friends. I’d much rather make the food than clean up after it, anyone want to trade =)? Maybe someday, just someday, I will be organized and punctual. For now we’ll say I’m scaterized (opposite of organized) and functional :).

                       </p>
                </div>

            </div>
         {/* --------------------row2------------------------------- */}
            <div className="row">
                <div className="col-sm-4 column-img">
                    <img src={cake1} alt="" />

                </div>
                <div className="col-sm-8 column-text">
                    <h2>Cakes</h2>
                    <p>
                        I’m Jaclyn, a thirty something wife and I aren’t very good friends. I’d much rather make the food than clean up after it, anyone want to trade =)? Maybe someday, just someday, I will be organized and punctual. For now we’ll say I’m scaterized (opposite of organized) and functional :).

                       </p>
                </div>

            </div>
{/* ----------------------------------row3------------------------ */}
            <div className="row">
                <div className="col-sm-4 column-img">
                    <img src={mainicecream2} alt="" />

                </div>
                <div className="col-sm-8 column-text">
                    <h2>IceCream</h2>
                    <p>
                        I’m Jaclyn, a thirty something wife and I aren’t very good friends. I’d much rather make the food than clean up after it, anyone want to trade =)? Maybe someday, just someday, I will be organized and punctual. For now we’ll say I’m scaterized (opposite of organized) and functional :).

                       </p>
                </div>

            </div>

        </div>
    )
}
