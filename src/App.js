
import './App.css';
import ScrollToTop from './top/ScrollToTop';

import Header from './components/Header'
import Home from './components/pages/Home'
import Footer from './components/Footer'
import Navbar from './components/pages/Navbar'
import Popular from './components/Popular';
import About from './components/pages/About'
import Contact from './components/pages/Contact'
import Trending from './components/Trending'
import Recipes from './components/Recipes/recipe'


import Sweets from './components/Sweets/Sweet'
import Specials from './components/Specials/Specials'
import IceCream from './components/IceCream/IceCream'
import Cakes from './components/Cakes/Cakes'

// ----------------------------sweets--------------------------
import Ladoo from './components/Sweets/Ladoo'
import Besan from './components/Sweets/Besan'
import Jalebi from './components/Sweets/Jalebi'
import Sandesh from './components/Sweets/Sandesh'
import Coconut from './components/Sweets/Coconut'
import Rasgulla from './components/Sweets/Rasgulla'
import Sewai from './components/Sweets/Sewai'
import Kheer from './components/Sweets/Kheer'

// -------------------------------specials------------------------------
import Anarsa from './components/Specials/Anarsa'
import Modak from './components/Specials/Modak'
import Ghevar from './components/Specials/Ghevar'
import Khaja from './components/Specials/Khaja'
import Balusahi from './components/Specials/Balusahi'
import Pinni from './components/Specials/Pinni'
import Gulabjamun from './components/Specials/Gulabjamun'

// -----------------------------icecreams-----------------------
import ButterScotch from './components/IceCream/Butter'
import GreenBerry from './components/IceCream/GreenBerry'
import CreamyBalls from './components/IceCream/CreamyBalls'
import Chocolate from './components/IceCream/Chocolate'
import Vanilla from './components/IceCream/Vanilla'
import Strawberry from './components/IceCream/Strawberry'
import ChocoCones from './components/IceCream/ChocoCones'
import CupCones from './components/IceCream/CupCone'

// -------------------------cakes-------------------------
import WhiteForest from './components/Cakes/WhiteForest'
import ChocolateCake from './components/Cakes/ChocolateCake'
import MangoCake from './components/Cakes/MangoCake'
import ChocoBerry from './components/Cakes/ChocoBerry'
import ChocoMonster from './components/Cakes/ChocoMonster'
import StrawberryCupCake from './components/Cakes/StrawberryCake'
import CupCake from './components/Cakes/CupCake'
import FriutCake from './components/Cakes/FruitCake'




import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <>
    <Router>
      <Header/>
<Navbar />
{/***************<ScrollToTop/>**** */}
   <ScrollToTop />


    <Switch>
  <Route exact path="/">
    <Home/>
  </Route>
  <Route path="/trending">
    <Trending />
  </Route>
  <Route path="/popular">
    <Popular/>
  </Route>
  <Route path="/recipes">
    <Recipes/>
  </Route>
  <Route path="/about">
    <About/>
  </Route>
  <Route path="/contact">
    <Contact />
  </Route>
  {/* ---------------------------content router----------- */}
           <Route path='/ice'><IceCream/></Route>
            <Route  path='/sweet'><Sweets/></Route>
            <Route path='/specials'><Specials/></Route>
            <Route path='/cakes'><Cakes/></Route>
            {/* --------------------------single----------------- */}
            <Route path="/ladoo"><Ladoo/></Route>
            <Route path="/besan"><Besan/></Route>
            <Route path="/jalebi"><Jalebi/></Route>
            <Route path="/kheer"><Kheer/></Route>
            <Route path="/sewai"><Sewai/></Route>
            <Route path="/coconut"><Coconut/></Route>
            <Route path="/rasgulla"><Rasgulla/></Route>
            <Route path="/sandesh"><Sandesh/></Route>
       {/* ------------------------------------------specials-------------- */}
            <Route path="/anarsa"><Anarsa/></Route>
            <Route path="/balusahi"><Balusahi/></Route>
            <Route path="/khaja"><Khaja/></Route>
            <Route path="/ghevar"><Ghevar/></Route>
            <Route path="/modak"><Modak/></Route>
            <Route path="/pinni"><Pinni/></Route>
            <Route path="/gulabjamun"><Gulabjamun/></Route>
            {/* --------------------------------Icecream----------------------------------- */}
            <Route path="/butter"><ButterScotch/></Route>
            <Route path="/green"><GreenBerry/></Route>
            <Route path="/creamy"><CreamyBalls/></Route>
            <Route path="/chocolate"><Chocolate/></Route>
            <Route path="/vanilla"><Vanilla/></Route>
            <Route path="/Strawberry"><Strawberry/></Route>
            <Route path="/cupcone"><CupCones/></Route>
            <Route path="/chococone"><ChocoCones/></Route>

            {/* ----------------------------cakes----------------------- */}
            <Route path="/white"><WhiteForest/></Route>
            <Route path="/chococake"><ChocolateCake/></Route>
            <Route path="/mango"><MangoCake/></Route>
            <Route path="/chocoberry"><ChocoBerry/></Route>
            <Route path="/chocomonster"><ChocoMonster/></Route>
            <Route path="/strawberrycupcake"><StrawberryCupCake/></Route>
            <Route path="/cupcake"><CupCake/></Route>
            <Route path="/fruitcake"><FriutCake/></Route>

             
  
  </Switch>
  <Footer/>
  </Router>
   
    </>
    
  );
}

export default App;
