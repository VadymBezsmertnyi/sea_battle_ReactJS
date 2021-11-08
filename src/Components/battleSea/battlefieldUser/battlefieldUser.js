import { Component } from "react";

import "./battlefieldUser.scss"

class BattlefieldUser extends Component {
    render() {
        const horizont = ['', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        const vertical = ['', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];

        const item = vertical.map(lett => {
            var id = '';

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
}

class BattlefieldItem extends Component {

    showShip = (e) => {
        e.target.style.background = 'white';
    }

    noShowShip = (e) => {
        e.target.style.background = '';
    }


    render() {
        const text = (this.props.text.length === 1 || this.props.text === '10') ? this.props.text : '';
        const styleText = (this.props.text.length <= 1 || this.props.text === '10') ? "styleText" : '';

        return (
            <button onDragLeave={e => this.noShowShip(e)}
                onDragEnd={e => console.log('BattlefieldUser', e)}
                onDragOver={e => this.showShip(e)}

                onDragStart={e => console.log('BattlefieldUser', e)}
                onDrop={e => console.log('BattlefieldUser', e)}

                className={`fieldItem ${styleText}`}>{text}</button>
        )
    }
}

export default BattlefieldUser;