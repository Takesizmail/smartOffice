import React from 'react'
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';


const Chart  = ({data}) =>{
   let options = {
        xAxis : {
            labels: {
                x: 0,
                y: 35,
                style:{
                    fontSize: '14px'
                }
            },
            gridLineWidth:0,
            tickWidth:0,
            // type: 'datetime',

            dateTimeLabelFormats: {
                second: '%Y-%m-%d<br/>%H:%M:%S',
                minute: '<br/> <span class="label__grey" > %H:%M <span/>',
                hour: '<br/> <span class="label__grey" > %H:%M <span/>',
                day: '</br> <span class="label__black" >%d<span/><span class="label__grey" > / %m<span/>',
                week: '%Y<br/>%m-%d',
                month: '%Y-%m',
                year: '%Y'
            }
        },
        yAxis:{
            labels: {

                style:{
                    fontSize: '18px',
                    color: '#000000'
                },
                x: -36,
                // y: 0

            },
            lineWidth:1,
            lineWidthColor: 'red',
           className: 'highcharts-color-0',

            opposite : false, // ставить цифри на осі y  на ліву сторону
            // lineWidth: 0,
            gridLineWidth: 0,
            minorGridLineWidth:0,
            tickLength: 0,
            plotBands: [{
                from: 18,
                to: 22,
                color: 'rgba(93,226,74,0.1)',
            }],
        },

        chart : {
            type: 'spline',
            width: 850,
            // plotBorderWidth: 1
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
       // підпис
        credits:{
            enabled: false
        },


        // дані повинні йти значення в масиві дата і значення
        series: [{
            data: data
        }]

    };

    return(
        <HighchartsReact
            highcharts={Highcharts}
            constructorType={'stockChart'}
            options={options}
        />
    )
}
export default Chart