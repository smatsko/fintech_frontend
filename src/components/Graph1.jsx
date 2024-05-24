import React from 'react';
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer} from 'recharts';


const Graph1 = ({indexes, data}) => {

    return (
        <ResponsiveContainer width="100%" height="100%">
            <LineChart
                width={500}
                height={300}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3"/>
                <XAxis dataKey="name" angle={-45} textAnchor="end" sx={{height: "10px"}} /*dy={10} dx={0}*/
                       height={40}/>
                <YAxis/>
                <Tooltip/>
                <Legend/>
                {indexes.map((ind, i) => (
                        <Line key={i} type="monotone" dataKey={ind} stroke={
                                 ["#8884d8", "#82ca9d", "#c94987"][i % 3]}
                              activeDot={{r: 3}}/>
                    )
                )}

            </LineChart>
        </ResponsiveContainer>
    );
}

export default Graph1;