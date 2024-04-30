import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import dayjs from "dayjs";


const Graph1 = ({data}) => {

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
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" angle={-45} textAnchor="end" sx={{height:"10px"}} /*dy={10} dx={0}*/
                       height={40}/>
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="AAPL" stroke="#8884d8" activeDot={{ r: 8 }} />
                    <Line type="monotone" dataKey="GOLD" stroke="#82ca9d" />
                </LineChart>
            </ResponsiveContainer>
        );
}

export default Graph1;