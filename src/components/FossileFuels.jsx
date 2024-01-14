import React from 'react';
import Chart from './Chart';
import dataset1 from '.././climate_data/Dataset1.json';
import co2 from '.././img/co2_2.png';
import greenhouseeffect from '.././img/Earths_greenhouse_effect.png';


/* Komponent för att visa sektionen fossile fuels */
const FossileFuels = () => {
    return (
        <>
        <div className="fossileFuelsHeader"></div>

        {/* Rubriken högst upp */}
        <div className="titleBar">Fossila bränslen och växthusgaser</div>

        {/* Text content */}
        <div className="textContent">
            <p>Fossila bränslen utgör en fundamentell del av den globala energiproduktionen och inkluderar kol, olja och naturgas. Dessa resurser, som historiskt sett har varit kärnan i vår industriella utveckling, avger emellertid betydande mängder koldioxid och andra skadliga ämnen vid förbränning. Dessa ämnen skapar en extra täckning i jordens atmosfär som fångar in mer värme från solen och leder till global uppvärmning. Att minska förbränningen av fossila bränslen är en viktig del för att balansera klimatet och skydda vår planet.</p>
            <h2>Fossila bränslen och växthusgaser</h2>
            <p>Växthusgaser och fossila bränslen är nära sammanlänkade i den komplexa ekvationen som styr jordens klimat. Naturliga växthusgaser, såsom vattenånga, koldioxid, metan och lustgas, har en nyckelroll i att reglera atmosfärens temperatur genom att behålla värme. Problemet uppstår när mänskliga aktiviteter, främst förbränningen av fossila bränslen som kol, olja och naturgas, förstärker koncentrationen av dessa växthusgaser.</p>
            <p>Förbränningen av fossila bränslen resulterar i frisättningen av stora mängder koldioxid och andra klimatpåverkande ämnen. Denna förstärkning av växthusgaser skapar en obalans i den naturliga atmosfäriska processen och leder till en ökad växthuseffekt.</p>
            
            <h2>Vad är koldioxid (Co2)?</h2>

            {/* Div för att hålla text på vänster och bild på höger sida */}
            <div className="textAndImageContainer">
                <div className="textContainer">
                <p>Koldioxid, eller CO2, är en osynlig och luktfri gas som består av två syreatomer och en kolatom. Den finns naturligt i luften och är viktig för jordens liv. Växter använder CO2 för att göra sin egen mat och skapa syre, vilket hjälper andra levande varelser. </p>
                <p>Men på senare tid har människors aktiviteter, särskilt när vi använder fossila bränslen som kol och olja, ökat mängden koldioxid i luften. Detta ökar växthuseffekten och leder till att jorden blir varmare, vilket kan skapa problem som smältande isar och höjda havsnivåer. </p>
                <p>För att rädda vår planet måste vi förstå och minska mängden koldioxid vi släpper ut. Genom att använda mer förnybar energi och göra smartare val i vår vardag kan vi hjälpa till att hålla balansen och bevara vår jord för framtida generationer.</p>
                </div>
            <img src={co2} alt='Koldioxid'></img>
            </div>
            <h2>Koldioxidutsläpp över historien</h2>
            <p>Grafen nedan visar koldioxidutsläpp mätta från år 1746. Håll muspekaren över grafen för att se detaljer för varje år. Klicka på knapparna för att utsläppen orsakade av specifika processer och ämnen.</p>
        </div>
        <div>

        {/* Graf för koldioxidutsläpp */}
        <Chart data={dataset1} />
        </div>
        
        <div className="textContent">
            <p className="smallItalic">Exempel på olika <b>gasbränslen</b> inkluderar naturgas, huvudsakligen bestående av metan; propan, en flytande petroleumgas; och butan, som vanligtvis används i bärbara spisar och tändare.</p>
            <p className="smallItalic">Exempel på olika <b>solida bränslen</b> inkluderar kol, trä och torv, vilka används för energiproduktion genom förbränning och har varierande sammansättningar och användningsområden.</p>
            <p className="smallItalic">Exempel på olika <b>flytande bränslen</b> inkluderar bensin, diesel, etanol och eldningsolja, vilka används för fordon, industriell energi och uppvärmning genom förbränning.</p>
            <p className="smallItalic"><b>Gasfackling</b> innefattar förbränning av överskottsgaser vid industriella processer eller olje- och gasanläggningar för att minska utsläpp. Exempel på gasfacklingsgaser inkluderar metan, etan och vätesulfid.</p>
            
            <h2>Fossila bränslen, växthusgaser och den globala uppvärmningen</h2>
            <img src={greenhouseeffect} className="fullSizeImg"></img>
            <p>I betraktandet av den globala utmaningen med uppvärmning, är det väsentligt att grundligt granska förhållandet mellan fossila bränslen och ökningen av växthusgaser. Fossila bränslen, såsom kol, olja och naturgas, har traditionellt varit huvudkällor för energiproduktion. Emellertid ger denna praxis upphov till betydande konsekvenser. Vid förbränning av fossila bränslen frigörs växthusgaser, inklusive koldioxid och metan, i atmosfären. Dessa gaser skapar en täckning som fångar solens värme och resulterar i den globala uppvärmning som för närvarande påverkar vårt klimatsystem.</p>
            <p>Att förstå de komplexa sambanden mellan fossila bränslen och växthusgaser är avgörande för att adressera den pågående klimatkrisen. Mänsklighetens ökade användning av fossila bränslen har accelererat den naturliga växthuseffekten och därmed förändrat planetens klimat. Att kartlägga dessa förbindelser ger insikt i de negativa konsekvenser vi möter och ger möjlighet att utforska hållbara strategier för att mildra dessa påverkningar. Genom att analysera dessa faktorer på djupet kan vi skapa en medvetenhet om de utmaningar vi står inför och arbeta mot en hållbar och ansvarsfull framtid.</p>
        <br />

        {/* Länkar dit användaren kan lära sig mer om ämnet */}
        <h3>Lär dig mer om fossila bränslen och växthuseffekten:</h3>
            <ul>
                <li><a href="https://www.naturvardsverket.se/amnesomraden/klimatomstallningen/omraden/klimatet-och-energin/fossila-branslen/">Vad är fossila bränslen?</a></li>
                <li><a href="https://www.naturskyddsforeningen.se/faktablad/hur-fungerar-vaxthuseffekten/">Hur fungerar växthuseffekten?</a></li>
            </ul>
        </div>

        {/* Grön inforuta längst ner med snabbfakta */}
        <div className="greenInfoBox industrySilhouette">
            <div className="greenInfoBoxInner">
                <h3>Visste du att...</h3>
                <ul>
                    <li>Förbränning av fossila bränslen (kol, olja och naturgas) och avskogning är betydande bidragsgivare till ökningen av atmosfäriska CO2-nivåer och påverkar naturlig balans avsevärt.</li>
                    <li>Under mitten av 1900-talet skedde en snabb ökning av CO2-utsläpp till följd av industrialisering och ökad användning av fossila bränslen för energi. Detta har lett till en betydande ökning av globala temperaturer</li> 
                    <li>CO2 är en växthusgas, vilket innebär att den fångar värme i jordens atmosfär. Den förstärkta växthuseffekten bidrar till global uppvärmning, vilket orsakar förändringar i klimatmönster, mer frekventa extrema väderhändelser och stigande havsnivåer.</li>
                </ul>
            </div>
        </div>
        </>
    );
};

export default FossileFuels;