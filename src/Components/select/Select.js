import { Component } from "react";
import Level from "../select/selectLevel/Level";
import User from "../select/selectUser/User";


class Select extends Component {

    selectUser = (click) => {
        localStorage.setItem('gender', click);
        this.forceUpdate();
    }

    render() {
        const { selectLevel } = this.props;

        const select = (localStorage.getItem('gender') === null) ?
            <User selectUser={this.selectUser} /> : (localStorage.getItem('level') === null) ?
                <Level selectLevel={selectLevel} /> : this.props.goOk();

        return (
            <>
                {select}
            </>
        )
    }
}

export default Select;