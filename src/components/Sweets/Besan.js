import React from 'react'
import './Ladoo.css'
import ladoo5 from '../../img/ladoo5.jpg'
import ladoo51 from '../../img/besan-ladoo-making1.jpg'
import ladoo52 from '../../img/besanladoomaking.jpg'

export default function Besan() {
  return (
    <>
      <div className="container recipe-content">

        <img src={ladoo5} alt="" className="img-responsive  recipe-img" />
        <h1>Besan Ladoo</h1>
        <div className="row recipe-menu">
          <div className="col-sm-8 recipe-text">
            <h2>How to make Besan Laddoo</h2>
            <h5>Step 1 Make the boondi batter</h5>
            <p>To make this traditional Indian sweet at home, take a large bowl to add 2 1/2 cups of gram flour, then mix orange colour and mix it well. Then, add some water and a little baking soda. Blend the mixture well and make sure there are no lumps. Once the blend attains a perfect consistency, it's time to move to the next step.</p>

            <h5>Step 2 Prepare the boondi</h5>
            <p>Now, heat ghee in a large deep frying pan. Place a perforated ladle (jhada) on top of the oil and add some of the batter. Slowly let the boondi batter fall in the oil and cook them on a low flame, till properly cooked. Once done, place the boondi on a tissue paper to remove excess oil.</p>

            <h5>Step 3 Prepare sugar syrup and mix with the boondis</h5>
            <p>Then, take a pan and add some water and sugar, allow this blend to boil until it attains a two-string consistency. Then add some cardamom powder and let it cook. Then add the boondis and cook till the sugar syrup and boondi is perfectly mixed. Cover it with the lid and turn off the flame.</p>

            <h5> Step 4 Garnish and relish!</h5>
            <p> Grease your hands with a little ghee and start shaping the ladoos. Place them in an open tray and garnish with some crushed nuts and indulge in the goodness.</p>

            <h2>Tips</h2>
            <ul>
              <li>You can add some crushed pistachios or slivered almonds to the ladoos to enhance their taste.</li>
              <li>The batter for Motichoor ladoos should be thin and flowing.</li>
              <li>Sugar syrup does not need to have any string consistency.</li>
              <li>Try to fry the boondis in ghee for a nicer flavour of your ladoos but you can also use refined vegetable oil.</li></ul>

          </div>
          <div className="col-sm-4 recipe-otherimg">
            <img src={ladoo51} alt=""  className="img-reponsive"></img>
            <img src={ladoo52} alt="" className="img-reponsive"></img>
            <img src={ladoo5} alt="" className="img-reponsive"></img>
          </div>

        </div>
        <div className="subscription-recipe">
          <h4>Don't Miss A New Recipe!</h4><br />
          <input type="email" placeholder="Your Email"></input>
          <button className=" sub">SUBSCRIBE</button>

        </div>

      </div>


    </>
  )
}
