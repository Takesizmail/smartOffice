import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'

import './analysis.scss'
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';
import AnalysisButton from "./analysis-button/analysis-button";
import DropList from "./drop-list";
import Arrow from "./arrow";

class  Analysis extends Component{

    data =[

    ];
    state={
        label:2
    };
    func = (label) =>{
        console.log(label)
    };

    options = {
        xAxis : {
            gridLineWidth:0,
            tickWidth:0,
        },
        yAxis:{
            labels: {
                formatter: function () {
                    const label = this.axis.defaultLabelFormatter.call(this);
                console.log(label);
                    const sendData = () =>{
                        console.log(this);
                       // this.func('karma')
                    };
                  console.log()
                },
                enabled: false,
                style:{
                    fontSize: '18px',
                    color: '#000000'
                },
                x: -1125,
                y: 0

            },
            opposite : false, // ставить цифри на осі y  на ліву сторону
            lineWidth: 0,
            gridLineWidth: 0,
            minorGridLineWidth:0,
            tickLength: 0,
            plotBands: [{
                from: 18,
                to: 22,
                color: 'rgba(93,226,74,0.3)',
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

            // підпис

        },
        credits:{
            enabled: false
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
        console.log(this.state.label);
        // передав   a часові відмітки в unix форматі b дані з сервака температура (value)
        this.makeData(this.props.paramsTemperature.map(({timestamp}) => new Date(timestamp).getTime()) , this.props.paramsTemperature.map(({value}) => +value.toFixed(2)));
        console.log(this.data);
        return(
            <React.Fragment>
                <DropList/>
            <div className='analysis'>
                <Arrow clazz='arrow arrow_left'/>
                <HighchartsReact
                    highcharts={Highcharts}
                    constructorType={'stockChart'}
                    options={this.options}
                />
                <Arrow clazz='arrow arrow_right'/>
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