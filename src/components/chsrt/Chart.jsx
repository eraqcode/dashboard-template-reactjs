import React from 'react'
import {
    XYPlot,
    LineSeries,
    XAxis,
    YAxis,
    VerticalBarSeries,
    VerticalGridLines,
    HorizontalGridLines
} from 'react-vis'

export const Chart = () => {

    const data = [
        { x:0, y: 4} ,
        { x: 1, y: 2 },
        { x: 2, y: 8 },
        { x: 3, y: 6 },
        { x: 4, y: 5 },
        { x: 5, y: 10 },
        { x: 6, y: 15 },
    ]

    return (
        <div>
            <XYPlot height={300} width={400}>
                <VerticalGridLines />
                <HorizontalGridLines />
                <XAxis />
                <YAxis />
                <VerticalBarSeries data={data} color="green" />
            </XYPlot>
        </div>
    )
}
