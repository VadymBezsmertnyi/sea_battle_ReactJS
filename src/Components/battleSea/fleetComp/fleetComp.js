import { Component } from "react";

import "./fleetComp.scss"

const FleetComp = () => {
    const ships = [[4, 4, 4, 4], [3, 3, 3], [2, 2], [1]]

    const ship = ships.map((item, iShip) => {
        return (
            <div key={`ship_${iShip}`} className='ship'>
                <p>{`${iShip + 1}судн${(iShip+1>=2)?'а':'о'} -`}</p>
                <div >
                    {
                        item.map((deck, iDeck) => {
                            return (
                                <ShipInfo key={`ship${iShip}_deck${iDeck}`} />
                            )
                        })
                    }
                </div>
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
                <button disabled="disabled"></button>
            </>
        )
    }
}

export default FleetComp;