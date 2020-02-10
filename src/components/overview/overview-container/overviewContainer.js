import React,{Component} from 'react'
import OverviewRender from "../overview-render";
import terribleFace from '../../../image/status/Exhaustion Face.png'
import normalFave from '../../../image/status/Normal Face.png'
import tiredFave from '../../../image/status/Tired Face.png'

class OverviewContainer extends Component{
    render() {
        return(
            <OverviewRender FaceImg={normalFave}/>
        )
    }
}
export default OverviewContainer