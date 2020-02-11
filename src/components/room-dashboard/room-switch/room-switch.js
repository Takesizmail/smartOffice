import React,{Component} from 'react'

class RoomSwitch extends Component {
    state={
        active: 'overview'
    };
    changeActive = (el) => {
        this.setState({
            active: el
        })
    };
    elementList = ['overview','analysis'];
    render() {
        const {active} = this.state;
        return(
            <div className="switch">
                {this.elementList.map(el =>{
                    const isActive = el === active;
                    const clazz = isActive ? 'switch_link active' : 'switch_link hover';

                    return <span className={clazz}
                                 onClick={() =>this.changeActive(el)}
                                 key={el}
                    > {el}</span>
                })}
            </div>
        )
    }
}
export default RoomSwitch