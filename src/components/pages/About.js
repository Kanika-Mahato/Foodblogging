import React from 'react'
import './About.css'
import Profile from '../../img/mainprofile.jpg'

export default function About() {
    return (
        <>
        
        <h1 className="about-me">About Me</h1>
            <img className="profile-img" alt="" src={Profile} /><br/><br/>
            <div className="container about-title">
            <q>Humor keeps us alive. Humor and food. Don't forget food. You can go a week without laughing.</q>
            <p style={{textAlign:"center"}}>― Joss Whedon</p>
            <hr/>
        </div>
            
            <div className="about-content">
                I’m Jaclyn, a thirty something wife and mother, as well as the self-taught cook, baker, writer, editor and photographer behind this little space on the web (so please forgive my grammatical errors). Cooking Classy is a place for me to share the food I love as I hope to expand my photography and writing skills.

                I love all things food. Let me rephrase that, I love all things good food. I’m picky about what I like and I’d like to say I know great food. My favorite foods include all things Italian or Mexican, anything with chocolate, caramel, fresh fruit or browned butter (is there a better scent in the world?). I don’t know how I’d live without the comfort food classics like pizza and enchiladas, all those indulgent dishes loaded with an abundance of gooey melted cheese. I’m a meat eater. Cookie dough is my weakness. The one food I think should be illegal is canned beets, they terrify me. Sugar is my addiction. I could live in the kitchen. I like to make food look pretty, because when it looks good doesn’t it just taste better?

                I hate cleaning, so those dirty dishes and I aren’t very good friends. I’d much rather make the food than clean up after it, anyone want to trade =)? Maybe someday, just someday, I will be organized and punctual. For now we’ll say I’m scaterized (opposite of organized) and functional :).

                I’ve never really cared for novels but I’ve always loved cookbooks and food magazines. They have pictures, novels don’t. I love art and traveling.

                My goal in life is to be a great mother and wife and to inspire those I love to follow their dreams. I’m a member of The Church of Jesus Christ of Latter Day Saints and I’m so grateful to be (you can learn more about my faith at comeuntochrist.org, or you can email me with questions).

                My goal here is to publish recipes that you, your family and your friends will not only love but will want to make time and time again. I hope to inspire you as a home cook and boost your confidence in the kitchen. Life is meant to be enjoyed and doesn’t good food just make it more enjoyable? Please follow along and lets create something delicious!

            </div>
        </>
    )
}
