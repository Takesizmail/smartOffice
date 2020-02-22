import React,{Component} from 'react';
import {withSmartOfficeApi} from "../../hoc";
import {connect} from 'react-redux'

import {floorsRoomsLoaded,floorSvgLoaded} from "../../../actions/actions";
import Loader from "../../loader";


class FloorView extends Component{

    state ={
        loading: true

    };
    componentDidMount() {
       this.loadingSVG()
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.svgId !== prevProps.svgId){
            this.loadingSVG()
        }
    }

    loadingSVG = () =>{
        const {services,svgId,floorsRoomsLoaded,floorSvgLoaded} = this.props;
        this.setState({
            loading: true
        });
        services.getApiSchema(svgId)
            .then(el => floorSvgLoaded(el.data.svg))
            .then(()=> services.getApiFloorsRooms(svgId).then(el=>floorsRoomsLoaded(el.data)));
            this.setState({
                loading:false
            })
    };
    makeMassage = (e)=>{
        const id = e.target.getAttribute('data-zone-id');
        this.props.goToRoom(id);
};
    processingSVG= (svg,floorsRoomsData)=>{
        if(svg!=='' ) {
            floorsRoomsData.forEach(({roomId, hasSensor = false}) => {
                if (hasSensor === true) {
                    let path = document.querySelector(`path[data-zone-id='${roomId}']`);
                    if(path === null ) return ;
                    path.classList.add('path_zone');
                    path.onclick = (e) => {
                        this.makeMassage(e)
                    };
                }
            })
        }
    };


    render() {
        const {loading} = this.state;
        const { floorsRoomsData,floorSvd} = this.props;

        if (loading){
            return <Loader/>
        }else{
            this.processingSVG(floorSvd,floorsRoomsData);


            return(
                <div dangerouslySetInnerHTML={{__html: floorSvd}} className='floor_map'>


                </div>
            )
        }

    }
}
const mapStateToProps = ({svgId,floorsRoomsData,floorSvd})=>{
    return{
        svgId,floorsRoomsData,floorSvd
    }
};
const mapDispatchToProps = {
    floorsRoomsLoaded,floorSvgLoaded
};
export default connect(mapStateToProps,mapDispatchToProps)(withSmartOfficeApi()(FloorView))