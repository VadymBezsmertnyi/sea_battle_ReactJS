import { Component } from "react";
import BattlefieldUser from "../battleSea/battlefieldUser/battlefieldUser";
import FleetUser from "./fleetUser/fleetUser";
import BattlefieldComp from "./battlefieldComp/battlefieldComp";
import FleetComp from "./fleetComp/fleetComp";

import Male from "../../resources/face_user_img/male.jpg";
import Female from "../../resources/face_user_img/female.jpg";
import Unga from "../../resources/face_capitan_img/unga.jpeg";
import Papay from "../../resources/face_capitan_img/papay.jpg";
import Admiral from "../../resources/face_capitan_img/admiral.jpg";
import Ghost from "../../resources/face_capitan_img/ghost.jpg";

import "./battle.scss";

class Battle extends Component {

    render() {
        const genderImg = (localStorage.getItem('gender') === 'male') ? Male : Female;
        const compImg = (localStorage.getItem('level') === 'easy') ? Unga :
            (localStorage.getItem('level') === 'average') ? Papay :
                (localStorage.getItem('level') === 'difficult') ? Admiral : Ghost
            ;

        return (
            <>
                <header>
                    <menu>
                        <li onClick={this.props.newGame}>Нова гра</li>
                        <li onClick={this.props.newPers}>Змінити персонажа</li>
                        <li onClick={this.props.newLevel}>Змінити рівень складності</li>
                    </menu>
                </header>
                <main>
                    <div className="userDiv">
                        <section>
                            <div className='infoUser'>
                                <img src={genderImg} alt="gender_user" />
                                <h2>Ваш флот</h2>
                                <hr align="center" width="300" color="#fbff00" />
                            </div>
                            <FleetUser />
                        </section>
                        <section className='battlefieldUser'>
                            <BattlefieldUser />
                        </section>
                    </div>
                    <div className="compDiv">
                        <section className='battlefieldComp'>
                            <BattlefieldComp />
                        </section>
                        <section>
                            <div className='infoComp'>
                                <img src={compImg} alt="gender_user" />
                                <h2>Флот ворога</h2>
                                <hr align="center" width="300" color="#fbff00" />
                            </div>
                            <FleetComp />
                        </section>
                    </div>
                </main>
            </>
        )
    }
}

export default Battle;