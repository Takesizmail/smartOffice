import React, {Component} from 'react'
import {connect} from 'react-redux'

import './analysis.scss'
import AnalysisButton from "./analysis-button/analysis-button";
import DropList from "./drop-list";
import {withSmartOfficeApi} from "../hoc";
import Chart from "./chart";

class  Analysis extends Component{

    state={
        loader: true,

    };

    data = [

    ];
    makeData = (params) =>{
        const abra =  params.map(({timestamp,value}) =>[new Date(timestamp).getTime(),+value.toFixed(2)]);
        const sortData = abra.sort((x,y)=> x[0] - y[0]);
        this.data=[];
        this.data.push(...sortData);
    };

    render() {
        const {paramsHumidity,paramsTemperature,paramsCo2,paramsBrightness,activeParamsChart} = this.props;

        switch (activeParamsChart.value) {
            case 'temperature':
                this.makeData(paramsTemperature);
                break;
            case 'humidity':
                this.makeData(paramsHumidity);
                break;
            case 'co2':
                this.makeData(paramsCo2);
                break;
            case 'brightness':
                this.makeData(paramsBrightness);
                break;
            default :   this.makeData(paramsTemperature);

        }
        return(
            <React.Fragment>
                <div className="analysis-header">
                    <DropList/>
                    <div className="analysis-optimal">
                        Optimal Indexes
                    </div>
                </div>

                <div className='analysis'>

                    {/*<Arrow clazz='arrow arrow_left'/>*/}
                    {/*  потрібно додати іншу зелену лінію для кожної стрілки*/}
                    <Chart data={this.data} plotBand={[1,2,3]}/>
                    {/*<Arrow clazz='arrow arrow_right'/>*/}
                    <AnalysisButton/>
                </div>

            </React.Fragment>
        )
    }
}

const mapStateToProps = ({paramsHumidity,paramsTemperature,paramsCo2,paramsBrightness,activeParamsChart}) =>{
    return{
        paramsHumidity,paramsTemperature,paramsCo2,paramsBrightness,activeParamsChart
    }
};

export default connect(mapStateToProps)(withSmartOfficeApi()(Analysis))