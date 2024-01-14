import React from 'react';
import { AreaChart, Area, XAxis, CartesianGrid, Tooltip } from 'recharts';

/* Graf för att visa temperaturförändingar genom historien */
const Chart2 = ({ data }) => {
    const reversedData = [...data].reverse();

    return (
        <div className="chartContainer">
            <AreaChart width={768} height={400} data={reversedData} margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
                <XAxis dataKey="Year" />
                <Tooltip />
                <CartesianGrid stroke="#f5f5f5" />
                <Area type="monotone" dataKey="Medel" stroke="#ffbb00" fill="#ffbb00" />
                <Area type="monotone" dataKey="Källa" stroke="#51900D" fill="#51900D" />
            </AreaChart>
        </div>
    );
};

export default Chart2;
