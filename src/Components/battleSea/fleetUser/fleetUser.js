import { Component } from "react";

import "./fleetUser.scss"

const FleetUser = () => {
    const ships = [[4, 4, 4, 4], [3, 3, 3], [2, 2], [1]]

    const ship = ships.map((item, iShip) => {
        return (
            <div key={`ship_${iShip}`} className='ship'>
                <div
                    onDragStart={e => console.log('fleetUser', e)}
                    onDragLeave={e => console.log('fleetUser', e)}
                    onDragEnd={(e) => localStorage.setItem('sizeDeck',e.target.children.length,'sizeShip', iShip+1)}
                    onDragOver={e => console.log('fleetUser', e)}
                    onDrop={e => console.log('fleetUser', e)}
                    draggable={true}>
                    {
                        item.map((deck, iDeck) => {
                            return (
                                <ShipInfo key={`ship${iShip}_deck${iDeck}`} />
                            )
                        })
                    }
                </div>
                <p>{`- ${iShip + 1}судн${(iShip+1>=2)?'а':'о'}`}</p>
            </div>
        )
    })

    return (
        <>
            {ship}
        </>
    )
}

class ShipInfo extends Component {

    render() {
        return (
            <>
                <button></button>
            </>
        )
    }
}

export default FleetUser;