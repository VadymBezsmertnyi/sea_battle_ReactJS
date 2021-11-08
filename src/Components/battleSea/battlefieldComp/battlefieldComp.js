import { Component } from "react";

import "./battlefieldComp.scss"

const BattlefieldComp = () => {
    const horizont = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',''];
    const vertical = ['', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const item = vertical.map(lett => {
        var id = [];

        return (
            <div key={`0${lett}`} className='fieldHorizont'>
                {horizont.map(numb => {
                    id = `${lett}${numb}`;
                    return (
                        <BattlefieldItem key={id}
                        text={`${lett}${numb}`} />
                    )
                })}
            </div>
        )
    })

    return (
        <>
            {item}
        </>
    )
}

class BattlefieldItem extends Component {
    
    render() {
        const text = (this.props.text.length===1||this.props.text==='10')?this.props.text:'';
        const styleText = (this.props.text.length<=1||this.props.text==='10')?"styleText":'';
        return (
            <button className={`fieldItem ${styleText}`}>{text}</button>
        )
    }
}

export default BattlefieldComp;