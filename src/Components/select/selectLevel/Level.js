import { Component } from "react";

import "./level.scss";
import Unga from "../../../resources/face_capitan_img/unga.jpeg";
import Papay from "../../../resources/face_capitan_img/papay.jpg";
import Admiral from "../../../resources/face_capitan_img/admiral.jpg";
import Ghost from "../../../resources/face_capitan_img/ghost.jpg";

class Level extends Component {
    render() {
        return (
            <>
                <header>
                    <h1>Виберіть ворога</h1>
                </header>
                <main>
                    <div className="frameFace" onClick={() =>{this.props.selectLevel('easy')}}>
                        <img src={Unga} alt="Unga" />
                        <p>Юнга <br/>(Легкий рівень)<br/> Перед вами, юнак 14-16 років, які виконує різні дрібні доручення, що їх отримує від капітана або інших членів команди.<br/> 
                        Юнга допомагає кухарю(коку), ознайомлюється із будовою корабля й конструкцією вітрил, допомагаючи матросам і навіть вчиться кермувати кораблем у гарну погоду.</p>
                        {/* <h2>Юнга <br/>(Легкий рівень)</h2> */}
                    </div>
                    <div className="frameFace" onClick={() =>{this.props.selectLevel('average')}}>
                        <img src={Papay} alt="Papay" />
                        <p>Моряк Папай <br/>(Середній рівень)<br/>Попай постає перед вами моряком середнього віку з незалежним характером, своєрідним голосом і манерою мови.<br/>
                        Попай відрізняється у повсякденному житті величезною силою, але у критичній ситуації, зіткнувшись з надзвичайною складністю, з'їдає банку шпинату і стає у багато разів сильнішим.</p>
                        {/* <h2>Моряк Папай <br/>(Середній рівень)</h2> */}
                    </div>
                    <div className="frameFace" onClick={() =>{this.props.selectLevel('difficult')}}>
                        <img src={Admiral} alt="Admiral" />
                        <p>Адмірал <br/>(Важкий рівень)<br/> Перед вами військовий офіцер вищого командного складу у військово-морському флоті.<br/>
                         Відзначався непересічними лідерськими якостями та майстерністю стратегії, що проявилося у багатьох рішучих морських перемогах.</p>
                        {/* <h2>Адмірал <br/>(Важкий рівень)</h2> */}
                    </div>
                    <div className="frameFace" onClick={() =>{this.props.selectLevel('deadly')}}>
                        <img src={Ghost} alt="Ghost" />
                        <p>Капітан "Летючого голландця"<br/> (Смертельний рівень)<br/> Перед вами легенда, що була поширена серед моряків у минулі віки, мужній мореплавець епохи великих відкриттів XV—XVI століть, коли води океанів борознили вітрильники. <br/>
                        Але він приречений довічно блукати морями й океанами на своєму кораблі, повному мерців. <br/>
                        Тепер зібрав флот і вступить в бій з кожним хто кине йому виклик.</p>
                        {/* <h2>Капітан "Летючого голландця"<br/> (Смертельний рівень)</h2> */}
                    </div>
                </main>
            </>
        )
    }
}

export default Level;