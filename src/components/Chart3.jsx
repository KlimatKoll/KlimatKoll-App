import React from 'react';
import { LineChart, Line, XAxis, CartesianGrid, Tooltip } from 'recharts';

/* Graf för att visa hur glaciärernas massa har förändrats genom åren. */
const Chart3 = ({ data }) => {

    return (
        <div>
            {/* Skapar ett linjediagramm med attribut för bredd, höjd, data och marginal */}
            <LineChart width={768} height={400} data={data} margin={{ top: 5, right: 20, left: 10, bottom: 5 }}> 

            {/* Skapar x-axeln som har nyckeln år */}
            <XAxis dataKey="Year" />

            {/* Komponent som används för att visar information vid mouseover */}
            <Tooltip />

            {/* Skapar ett kardesiskt koordinatsystem och definierar linjernas tjocklek */}
            <CartesianGrid stroke="#808080" />

            {/* Linje komponent skapas med relevanta attribut: typ, datanyckel, tjocklek och början på y-axeln */}
            <Line type="monotone" dataKey="Genomsnittlig stigande massbalans" stroke="#1762a3" yAxisId={0} />
        </LineChart>
        </div>

    );

};

export default Chart3;


