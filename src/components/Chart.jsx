import React from 'react';
import { useState } from 'react';

import { LineChart, Line, XAxis, YAxis, Legend, CartesianGrid, Tooltip } from 'recharts';

const Chart = ({ data }) => {

  {/* Funktion för att toggla mellan vilka linjer som ska visas på grafen.
  Vilka linjer som visas beror på vilka knappar som är intryckta/toggleade */}
  function toggleState(type) {
    switch (type) {
      case "cement":
        if (cement) {
          setCement(false);
        } else {
          setCement(true);
        }
        break;

      case "gasfuels":
        if (gasfuels) {
          setGasfuels(false);
        } else {
          setGasfuels(true);
        }
        break;

      case "gasflaring":
        if (gasflaring) {
          setGasflaring(false);
        } else {
          setGasflaring(true);
        }
        break;

      case "liquidfuels":
        if (liquidfuels) {
          setLiquidfuels(false);
        } else {
          setLiquidfuels(true);
        }
        break;

      case "solidfuels":
        if (solidfuels) {
          setSolidfuels(false);
        } else {
          setSolidfuels(true);
        }
        break;

      case "total":
        if (total) {
          setTotal(false);
        } else {
          setTotal(true);
        }
        break;
    } 
  }

  {/* States som bestämmer vilka linjer som ska visas i grafen */}
  const [cement, setCement] = useState(false);
  const [gasfuels, setGasfuels] = useState(false);
  const [gasflaring, setGasflaring] = useState(false);
  const [liquidfuels, setLiquidfuels] = useState(false);
  const [solidfuels, setSolidfuels] = useState(false);
  const [total, setTotal] = useState(true);

    // Funktion som döper om ett namn i ett objekt, i detta fall från engelska till svenska
    const renameProperty = (obj, oldName, newName) => {
    if (obj.hasOwnProperty(oldName)) {
        obj[newName] = obj[oldName];
        delete obj[oldName];
    }
    };

    // Loopa igenom varje objekt i arrayn och döp om namnen till svenska, t.ex. "Gas Fuel" to "Gasbränslen"
    data.forEach(item => {
        renameProperty(item, "Gas Fuel", "Gasbränslen");
        renameProperty(item, "Gas Flaring", "Gasfackling");
        renameProperty(item, "Liquid Fuel", "Flytande bränslen");
        renameProperty(item, "Solid Fuel", "Solida bränslen");
    });

  return (
    <>
    <div className="chartContainer">
        {/* Skriv ut en graf med Recharts */}
        <LineChart width={768} height={400} data={data} margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
        
        {/* Sätt X-axis till årtal */}
        <XAxis dataKey="Year" />
        <Tooltip />
        <Legend />
        <CartesianGrid stroke="#f5f5f5" />

        {/* Visa diverse linjer beroende på om deras state är satta till true eller false */}
        {cement ? 
        <Line type="monotone" dataKey="Cement" stroke="#2980b9" yAxisId={0} />
        :
        null
        }
        {gasfuels ? 
        <Line type="monotone" dataKey="Gasbränslen" stroke="#95a5a6" yAxisId={1} />
        :
        null
        }
        {gasflaring ? 
        <Line type="monotone" dataKey="Gasfackling" stroke="#9b59b6" yAxisId={2} />
        :
        null
        }
        {liquidfuels ? 
        <Line type="monotone" dataKey="Flytande bränslen" stroke="#e67e22" yAxisId={3} />
        :
        null
        }
        {solidfuels ? 
        <Line type="monotone" dataKey="Solida bränslen" stroke="#2ecc71" yAxisId={4} />
        :
        null
        }
        {total ? 
        <Line type="monotone" dataKey="Total" stroke="#3498db" yAxisId={5} />
        :
        null
        }
        
        </LineChart>
        
    </div>

    {/* Knappar för vilka linjer/processer/ämnen som ska visas */}
    <div className="checkBoxesContainer">
    <label>
    <input className="buttonCheckbox" type="checkbox" onClick={() => toggleState("cement")}></input>
    <span className="button-label">Cement</span>
    </label>
    <label>
    <input className="buttonCheckbox" type="checkbox" onClick={() => toggleState("gasfuels")}></input>
    <span className="button-label">Gasbränslen</span>
    </label>
    <label>
    <input className="buttonCheckbox" type="checkbox" onClick={() => toggleState("gasflaring")}></input>
    <span className="button-label">Gasfackling</span>
    </label>
    <label>
    <input className="buttonCheckbox" type="checkbox" onClick={() => toggleState("liquidfuels")}></input>
    <span className="button-label">Flytande bränslen</span>
    </label>
    <label>
    <input className="buttonCheckbox" type="checkbox" onClick={() => toggleState("solidfuels")}></input>
    <span className="button-label">Solida bränslen</span>
    </label>
    <label>
    <input className="buttonCheckbox" type="checkbox" onClick={() => toggleState("total")} defaultChecked></input>
    <span className="button-label">Totalt</span>
    </label>
    </div>
    </>
  );
};

export default Chart;