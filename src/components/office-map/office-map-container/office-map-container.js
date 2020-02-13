import React,{Component} from 'react'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {changeActionFloor} from "../../../actions/actions";
import './office-map-container.scss'
import Floor4 from "../floor-4";
import Floor3 from "../floor-3";
import Floor99 from "../floor-99";
import {withSmartOfficeApi} from "../../hoc";


 class OfficeMapContainer extends Component{


     floorList =['Floor 3','Floor 4','Floor 99'];

     goToRoom = (id) =>{
         const {history} = this.props;
         history.push(`/office-map/${id}/`)
     };

     render() {
         const {actionFloor,changeActionFloor} = this.props;
         
         const content = actionFloor ==='Floor 3' ?
             <Floor3 goToRoom={this.goToRoom}/> :
             actionFloor === 'Floor 4' ?
                 <Floor4 goToRoom={this.goToRoom}/> : <Floor99/>;
         return(
             <div className="floor">
                 <div className="floor_navigation">
                     {this.floorList.map(el =>{
                         const isActive = el === actionFloor;
                         const clazz = isActive ?  'floor_navigation_item active' : 'floor_navigation_item';
                         return(
                             <div className={clazz}
                                  key={el}
                                onClick={()=>changeActionFloor(el)}
                             >
                                 {el}
                             </div>
                         )
                     })}
                 </div>
                 <div className="floor_map">
                     {content}
                 </div>
             </div>
         )
     }
}
const mapStateToProps = ({actionFloor}) =>{
     return{
         actionFloor
     }
};
const mapDispatchToProps = {
    changeActionFloor
};


export default connect(mapStateToProps,mapDispatchToProps)(withRouter(withSmartOfficeApi()(OfficeMapContainer)))