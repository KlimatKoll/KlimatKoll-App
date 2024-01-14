import React from 'react';
import Chart3 from './Chart3';
import dataset3 from '.././climate_data/Dataset3.json';

// Komponent som renderar glaciärer-sektionen
const Glaciarer = () => {
    return ( 
    <>
        <div className="glaciarerHeader"></div> 

        {/* Visar titeln längst upp */}
        <div className="titleBar">Glaciärer</div> 
        
        {/* Textinnehållet */}
        <div className="textContent"> 
            <p>Sedan början av 1900-talet har många av världens glaciärer smält.
            Människans aktiviteter är roten till detta problem, eftersom den industriella utvecklingen har lett till att en stor andel koldioxid och andra växthusgaser släpps ut i luften. 
            Diagrammet nedan visar hur glaciärer har blivit mindre sedan 1945.
            </p>
        </div>

        {/* Komponent som tar data från dataset3 och renderar en graf som visar hur glaciärernas massa ändras. */}
        <Chart3 data={dataset3} />

        <div className="textContent">
            <h2>Ökande sjönivå</h2>
            <p>Smältande glaciärer bidrar till att sjönivån ökar. Om all is smälter på Grönland, skulle sjönivån öka med upp till 6 meter. 
            Det är inte bra för samhällen som existerar nära vattnet. Bilden nedan visar hur glaciärerna såg ut för 100 år sedan och hur de ser ut nu.
            </p>
            <figure>
            <img src="https://cdn.zmescience.com/wp-content/uploads/2022/06/glacier-then-and-now-photo-by-neill-drake-featured.jpg" alt="Hur glaciärer såg ut för 100 år sedan och hur de ser ut nu" width="750px" />
            <figcaption>Källa: Neill Drake</figcaption>
            </figure>
            <br />
            <h2>Mindre fisk och mer översvämningar för människan</h2>
            <p>Smältande glaciärer påverkar fiskindustrin, då vattentemperaturen ändras i haven. 
            En annan konsekvens för människan är att städer nära vatten kommer drabbas av översvämmingar. 
            </p>
            <br />
            <h2>Djur förlorar hem</h2>
                <p>Men människan är inte den enda som får lida av konsekvenser. Djur som isbjörnen och valrossen kan förlora deras hem. 
                Dessa djur lever en stor del av sina liv på glaciärer, så det blir katastrofala följder för dem om inget görs åt den globala uppvärmningen. 
                </p>
            <br />

            {/* Lista på länkar för användaren att lära sig mer. */}
            <h3>Lär dig mer om glaciärer:</h3>
            <ul>
                <li><a href="https://earth.org/glacial-melting/">Vilka konsekvenser medför smältning av glaciärer?</a></li>
                <li><a href="https://www.worldwildlife.org/pages/why-are-glaciers-and-sea-ice-melting">Varför smälter glaciärer?</a></li>
            </ul>
        </div>

        {/* Grön faktaruta som innehåller kort fakta och en grafisk ikon. */}
        <div className="greenInfoBox glacierIcon"> 
            <div className="greenInfoBoxInner"> 
                <h3>Visste du att...</h3>
                <ul>
                    <li>Bara 2.5% av jordens vatten är färskvatten.Två tredjedelar av det kommer från glaciärer?</li>
                    <li>Glaciärer hjälper att reglera temperaturen på jorden, då den vita färgen hjälper att reflektera solens strålar. 
                    Havets vatten däremot har en mörk färg, vilket absorberar solens strålar, vilket leder till att jordens temperatur öker?
                    </li>
                </ul>
            </div>
        </div>
        </>
    );

};

export default Glaciarer;