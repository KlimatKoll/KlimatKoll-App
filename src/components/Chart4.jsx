import React from 'react';

import { LineChart, Line, XAxis, CartesianGrid, Tooltip } from 'recharts';

/* Graf för att visa havsnivåer genom historien */
const Chart4 = ({ data }) => {

  const modifiedData = data.map(entry => {
    // Extrahera endast året ur "Time" istället för även månad och dag
    const year = entry["Time"].split("-")[0];
    
    // Skapa ett nytt objekt med det modifierade värdet för Time
    return {
      "Global medelhavsnivå": entry["GMSL"],
      "GMSL uncertainty": entry["GMSL uncertainty"],
      "Time": year
    };
  });

  return (
    <div className="chartContainer">
        <LineChart width={768} height={400} data={modifiedData} margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
        <XAxis dataKey="Time" />
        <Tooltip />
        <CartesianGrid stroke="#f5f5f5" />
        <Line type="monotone" dataKey="Global medelhavsnivå" stroke="#ff7300" yAxisId={0} />
        </LineChart>
        
    </div>
  );
};

export default Chart4;