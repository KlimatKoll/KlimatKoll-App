import React from 'react';
import Chart2 from './Chart2';
import dataset2 from '.././climate_data/Dataset2.json';

// GlobalTemperatures-komponenten används för att visa information om globala temperaturförändringar.
// Den inkluderar textavsnitt om klimatforskning och en visualisering i form av ett diagram.
// Dessutom presenteras länkar för att fördjupa sig i ämnet och en faktaruta.
// Komponenten använder Chart2-komponenten för att rendera temperaturdata från Dataset2.json.
const GlobalTemperatures = () => {
    return ( 
    <>
        <div className="globalTemperaturesHeader"></div>
        <div className="titleBar">Globala Temperaturer </div>
        <div className="textContent">
            <p>De flesta forskare som studerar klimatförändringar är överens, närmare bestämt 90%–100%, om att människan är den främsta orsaken till den globala uppvärmningen vi ser idag. 
                Resultaten stöds av flera olika studier och är i linje med tidigare rapporter som visar att 97% av klimatforskarna är ense om detta.
            </p>
            <p>Diagrammet nedan visar förändringar i den genomsnittliga globala temperaturen över tid</p>
        </div>


        {/* Graf */}
        <Chart2 data={dataset2} />

        <div className="textContent">
            <h2>Globala temperaturförändringar </h2>
            <p>Klimatförändringen påverkar global folkhälsa genom att globala temperaturer ändras. Det händer särskilt genom ökad värme, översvämningar, och torka. Forskarna skriver att konsekvenserna för hälsa och dödlighet relateras till både värme och kyla. 
                I Sverige ökar omgivningstemperaturen och resulterar i värmeböljor med ökad mortalitet skriver forskarna. I deras studie betonas att den globala temperaturen har ökat stadigt, och perioden 2011–2015 ansågs vara den hittills varmaste femårsperioden globalt.
            </p>
            <h2>Värmeböljor</h2>
            <p>Hälsa kan påverkas av perioder med höga temperaturer, och med den förändrade klimatet förväntas frekvensen av värmeböljor öka. 
                De flesta forskare inom klimatstudier är eniga, mer specifikt i intervallet 90%–100%, om att mänsklig aktivitet är den primära faktorn bakom den globala uppvärmningen vi upplever idag. 
                Dessa resultat stöds av flera olika forskningsstudier och överensstämmer med tidigare rapporter, vilka visar att 97% av klimatforskare håller med om detta.
            <br />
            <br />
                Ungefär 14% av världens invånare kommer att uppleva extrema värmeböljor åtminstone en gång vart femte år om medeltemperaturen stiger med 1,5 grader. 
                Om temperaturökningen överstiger två grader kommer över en tredjedel av världens befolkning (37%) att utsättas för samma risk.
            </p>
            
            <figure> 
            <img class="fullSizeImg" src="https://www.smhi.se/polopoly_fs/1.6612.1670608654!/image/oversvamning.jpg_gen/derivatives/10%3A6_542px/image/oversvamning.jpg" alt="Bild som visar översvämningar"/> 
            <figcaption>Källa: SMHI, 2014, Översvämningar</figcaption> 
            </figure>
        
            <br />
            <h3>Om du vill fördjupa dig i ämnet globala temperaturer rekommenderas följande länkar:</h3>
            <ul>
                <li><a href="https://iopscience.iop.org/article/10.1088/1748-9326/11/4/048002/pdf">En sammanställning av överensstämmande bedömningar om människans påverkan på den globala uppvärmningen.</a></li>
                <li><a href="https://lakartidningen.se/klinik-och-vetenskap-1/artiklar-1/klinisk-oversikt/2016/07/extremvarme-ett-okande-problem-for-globala-folkhalsan/">Extremvärme ett ökande problem för globala folkhälsan</a></li>
            </ul>
        </div>
        <div className="greenInfoBox">
        <div className="greenInfoBoxInner">
            <h3>Visste du att...</h3>
            <ul>
                <li>Många av Nordens temperaturrekord är noterade i Sverige</li>
                <li>Sveriges värmerekord är +38 °C och det är även Nordens värmerekord</li>
                <li>Jorden har upplevt en genomsnittlig temperaturökning på cirka 1 grad Celsius sedan slutet av 1800-talet.</li>
                <li>Den globala genomsnittstemperaturen har ökat i en accelererande takt under de senaste årtiondena, med vissa områden som upplever ännu högre hastigheter.</li>
                <li>Arktis värms upp ungefär dubbelt så snabbt som den globala genomsnittstemperaturen, vilket leder till snabb isavsmältning och dramatiska förändringar i arktiska ekosystem.</li>
            </ul>
        </div>
        </div>
        </>
    );

};

export default GlobalTemperatures;