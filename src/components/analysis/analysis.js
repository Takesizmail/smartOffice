import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'

import './analysis.scss'
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';
import AnalysisButton from "./analysis-button/analysis-button";

class  Analysis extends Component{

    data =[

    ];


    options = {
        xAxis : {
            gridLineWidth:0,
            tickWidth:0,

        },
        yAxis:{
            opposite : false, // ставить цифри на осі y  на ліву сторону
            lineWidth: 0,
            gridLineWidth: 0,
            minorGridLineWidth:0,
            tickLength: 0,
            plotBands: [{
                from: 18,
                to: 22,
                color: 'rgba(68, 170, 213, 0.2)',
            }],
        },

        chart : {
            type: 'spline'
        },

        // приховує кнопки і дати зверху
        rangeSelector: {
            selected: 1,
            inputEnabled: false,
            buttonTheme: {
                visibility: 'hidden'
            },
            labelStyle: {
                visibility: 'hidden'
            }
        },
        scrollbar: {
            enabled: false
        },
        // повзунки
        navigator:{
            handles:{
                backgroundColor: '#0051e4',
                borderColor: '#0051e4',
                height: 20,
                width: 9
            },
        },



        // дані повинні йти значення в масиві дата і значення
        series: [{
            data: this.data
        }]

    };
    makeData = (a,b) =>{
        a.forEach((el,idx) =>{
            this.data.push([el,b[idx]]);
        })
    };

    render() {
        // передав   a часові відмітки в unix форматі b дані з сервака температура (value)
        this.makeData(this.props.paramsTemperature.map(({timestamp}) => new Date(timestamp).getTime()) , this.props.paramsTemperature.map(({value}) => +value.toFixed(2)));
        console.log(this.data);
        return(
            <React.Fragment>
            <div className='analysis'>
                <HighchartsReact
                    highcharts={Highcharts}
                    constructorType={'stockChart'}
                    options={this.options}
                />
            </div>
                <AnalysisButton/>
            </React.Fragment>
        )
    }
}

const mapStateToProps = ({paramsHumidity,paramsTemperature}) =>{
    return{
        paramsHumidity,paramsTemperature
    }
};

export default connect(mapStateToProps)(Analysis)