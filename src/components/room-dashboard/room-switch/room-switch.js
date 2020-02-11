import React,{Component} from 'react'
import {connect} from 'react-redux'
import {switchStateChange} from "../../../actions/actions";

class RoomSwitch extends Component {
    state={
        active: 'overview'
    };
    elementList = ['overview','analysis'];
    render() {
        const {switchState} = this.props;
        console.log(switchState);
        return(
            <div className="switch">
                {this.elementList.map(el =>{
                    const isActive = el === switchState;
                    const clazz = isActive ? 'switch_link active' : 'switch_link hover';

                    return <span className={clazz}
                                 onClick={() =>this.props.switchStateChange(el)}
                                 key={el}
                    > {el}</span>
                })}
            </div>
        )
    }
}
const mapStateToProps = ({switchState}) =>{
    return {
        switchState
    }
};

const mapDispatchToProps ={
     switchStateChange
};
export default connect(mapStateToProps,mapDispatchToProps)(RoomSwitch)