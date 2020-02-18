import React,{Component} from 'react'
import {connect} from 'react-redux'

import './analysis.scss'
import HighchartsReact from 'highcharts-react-official'
import Highcharts from 'highcharts'

class  Analysis extends Component{
    options = {
        plotBands: [{ // visualize the weekend
            from: 1.5,
            to: 6.5,
            color: 'rgba(68, 170, 213, .2)'
        }],
        xAxis : {
            categories:this.props.paramsTemperature.map(({timestamp}) => timestamp )
        },
        colors:['blue','red'],
        chart : {
            type: 'spline'
        },
        title: {
            text: 'Eleks chart'
        },
        series: [{
            name: 'temperature',
            data: this.props.paramsTemperature.map(({value}) => value )
        },
            {
                name: 'Humidity',
                data: this.props.paramsHumidity.map(({value}) => value )
            }
        ]

    };

    render() {

        return(
            <div className='analysis'>
                <HighchartsReact
                    highcharts={Highcharts}
                    constructorType={'chart'}
                    options={this.options}
                />

            </div>
        )
    }
}

const mapStateToProps = ({paramsHumidity,paramsTemperature}) =>{
    return{
        paramsHumidity,paramsTemperature
    }
};

export default connect(mapStateToProps)(Analysis)