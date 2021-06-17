import React from 'react'
import Special from '../Specials/Specials'
import Sweet from'../Sweets/Sweet'
import Cakes from '../Cakes/Cakes'
import Icecream from '../IceCream/IceCream'

export default function recipe() {
    return (
        <div>
            <Special/>
            <Sweet/>
            <Cakes/>
            <Icecream/>
            
        </div>
    )
}
