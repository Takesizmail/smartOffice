import React,{Component} from 'react'
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
            categories:['Apples','Bananas','Potatoes','Oranges','Milk','Kiwi']
        },
        colors:['blue','red'],
        chart : {
            type: 'line'
        },
        title: {
            text: 'Eleks chart'
        },
        series: [{
            name: 'John',
            data: [1,1,3,3,3,3,4,4,5,5,6,6,3,4,3,4,5,4,3,5,3,4,5,3,4,54,5,3,4,53,45,3,4,5,34,53,45,35,8,15,6,10,12,9,5,6,7,8,7,6,5,4,5,6,15,7,6,5,4,4,5,6,2,3,3,4,5,5,3,5]
        },
            {
                name: 'Kate',
                data: [2,3,4,5,7,20,19,5]
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
export default Analysis