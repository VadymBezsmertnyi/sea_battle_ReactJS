import { Component } from "react";

import Male from "../../../resources/face_user_img/male.jpg";
import Female from "../../../resources/face_user_img/female.jpg";

import "./user.scss";

class User extends Component {
    render() {
        return (
            <>
                <header>
                    <h1>Виберіть свого персонажа</h1>
                </header>
                <main>
                    <div className="user" onClick={() =>{this.props.selectUser('male')}}>
                        <img src={Male} alt="Male" />
                        <h2>Чоловік</h2>
                    </div>
                    <div className="user" onClick={() =>{this.props.selectUser('female')}}>
                        <img src={Female} alt="Female" />
                        <h2>Жінка</h2>
                    </div>
                </main>
            </>
        )
    }
}

export default User;