import React, {useEffect} from 'react';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
    BarChart,
    Bar
} from 'recharts';


const Graph2 = ({data}) => {

        return (
        <ResponsiveContainer  width="100%" height="90%">
            <BarChart
                width={500}
                height={300}
                data={data}
                margin={{
                    top: 2,
                    right: 20,
                    left: 20,
                    bottom: 14,
                }}
            >
                <CartesianGrid  strokeDasharray="3 3"/>
                <XAxis dataKey="date" angle={-45} textAnchor="end" sx={{height: "10px"}} /*dy={10} dx={0}*/
                       height={40}/>
                <YAxis/>
                <Tooltip/>
                <Legend/>
                <Bar dataKey={"value"} fill="#8884d8"/>
            </BarChart>
        </ResponsiveContainer>
    );
}

export default Graph2;