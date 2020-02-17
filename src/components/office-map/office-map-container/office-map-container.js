import React,{Component} from 'react'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {changeActionFloor,floorsDataLoaded,svgIdLoaded,zeroingOverview} from "../../../actions/actions";
import './office-map-container.scss'

import {withSmartOfficeApi} from "../../hoc";
import FloorView from "../floor-view/floorView";


 class OfficeMapContainer extends Component{


        componentDidMount() {
            const {services,floorsDataLoaded, zeroingOverview} = this.props;
            services.getApi_floors().then(el=> {
                floorsDataLoaded(el.data)
            });
            zeroingOverview();
        }


     goToRoom = (id) =>{
         const {history} = this.props;
         history.push(`/office-map/${id}/`)
     };
      changeFloor = (floor,svgId) =>{
          console.log(svgId);
          const {svgIdLoaded,changeActionFloor} = this.props;
          svgIdLoaded(svgId);
          changeActionFloor(floor);

      };

     render() {
         const {actionFloor,floorsData} = this.props;
         console.log(floorsData);
         return(
             <div className="floor">
                 <div className="floor_navigation">
                     {floorsData.map(({floorId,floor,svgId}) =>{
                         const isActive = floor === actionFloor;
                         const clazz = isActive ?  'floor_navigation_item active' : 'floor_navigation_item';
                         return(
                             <div className={clazz}
                                  key={`floor${floorId}`}
                                onClick={()=>this.changeFloor(floor,svgId)}
                             >
                                 {`Floor ${floor}`}
                             </div>
                         )
                     })}
                 </div>
                 <div className="floor_map">
                     <FloorView goToRoom={this.goToRoom}/>

                 </div>

             </div>
         )
     }
}
const mapStateToProps = ({actionFloor,floorsData}) =>{
     return{
         actionFloor,floorsData
     }
};
const mapDispatchToProps = {
    changeActionFloor,floorsDataLoaded,svgIdLoaded,zeroingOverview
};


export default connect(mapStateToProps,mapDispatchToProps)(withRouter(withSmartOfficeApi()(OfficeMapContainer)))