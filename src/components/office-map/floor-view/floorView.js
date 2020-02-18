import React,{Component} from 'react';
import {withSmartOfficeApi} from "../../hoc";
import {connect} from 'react-redux'

import {floorsRoomsLoaded} from "../../../actions/actions";
import Loader from "../../loader";


class FloorView extends Component{

    state ={
        svg : '',
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
        const {services,svgId,floorsRoomsLoaded} = this.props;
        this.setState({
            loading: true
        });
        services.getApiSchema(svgId)
            .then(el => this.setState({svg: el.data.svg}))
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
                    path.classList.add('path_zone');
                    path.onclick = (e) => {
                        this.makeMassage(e)
                    };
                }
            })
        }
    };


    render() {
        const {svg,loading} = this.state;
        const { floorsRoomsData} = this.props;

        if (loading){
            return <Loader/>
        }else{
            this.processingSVG(svg,floorsRoomsData);


            return(
                <div dangerouslySetInnerHTML={{__html: svg}} className='floor_map'>


                </div>
            )
        }

    }
}
const mapStateToProps = ({svgId,floorsRoomsData})=>{
    return{
        svgId,floorsRoomsData
    }
};
const mapDispatchToProps = {
    floorsRoomsLoaded
};
export default connect(mapStateToProps,mapDispatchToProps)(withSmartOfficeApi()(FloorView))