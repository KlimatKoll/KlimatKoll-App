import React from 'react';
import Chart4 from './Chart4';
import dataset4 from '.././climate_data/Dataset4.json';


/* Komponent för att rendera sektionen Havsnivåer */
const Sjonivaer = () => {
    return ( 
    <>
        {/* Header som innehåller bild på sjönivåer/havet */}
        <div className="SjonivaerHeader"></div> 
        {/* Visar sektionens titel med styling */}
        <div className="titleBar">Stigande Havsnivåer </div> 
        {/* Div som innehåller all textinnehåll och har tillhörande styling för texten*/}
        <div className="textContent"> 
            <p>Sedan det tidiga 1900-talet har globala havsnivåer stigit påtagligt. Denna oroande trend kan i huvudsak härledas till mänsklighetens påverkan på klimatet, där den ökande nivån av växthusgaser, accelererar uppvärmningen av vår planet. Tillsammans med smältande is från glaciärer och polarisar, driver den kontinuerliga ökningen av havsnivån. Stigande sjönivåer medför omfattande konsekvenser för kustområden världen över, inklusive ökad risk för översvämningar och erosion. För att bemöta denna globala utmaning är det nödvändigt med samordnade insatser för att både anpassa sig till de nuvarande förändringarna och minska de underliggande orsakerna till klimatförändringarna.
            </p>
            <p>Diagrammet nedan visar hur havsnivåhöjningar ser ut sedan 1880.</p>
        </div>

        {/* Komponenten renderar en graf om sjönivåer. Data hämtas från dataset nummer 4, som innehåller data om sjönivåer. */}
        <Chart4 data={dataset4} /> 

        <div className="textContent">
            <h2>Ökande sjönivåer</h2>
            <p>Smältande glaciärer bidrar till att havsnivån ökar. Om all is smälter på Grönland, skulle sjönivån öka med upp till 6 meter. Det är inte bra för samhällen som existerar nära vattnet.
            </p>
            <h2>Kusterosioner</h2>
            <p>Stigande havsnivåer ökar risken för kustnära översvämningar, vilket hotar bostäder, infrastruktur och ekosystem.
            </p>
            <h2>Inträngning av saltvatten</h2>
            <p>Stigande havsnivåer kan orsaka inträngning av saltvatten i kustnära grundvatten, vilket påverkar sötvattentillgången och hotar jordbruk och dricksvattenresurser.
            </p>
            <br />
            <h3>Lär dig mer om stigande havsnivåer:</h3>
            <li><a href="https://www.klimatanpassning.se/klimatanpassa/vagledning-for-klimatanpassning/hantera-risker/stigande-hav-1.152835">Stigande hav</a></li>
            <li><a href="https://climate.ec.europa.eu/climate-change/consequences-climate-change_sv">Konsekvenser för naturen: Stigande havsnivåer</a></li>
        </div>
        
        {/* Renderar en grön faktaruta med om sjönivåer */}
        <div className="greenInfoBox"> 
        <div className="greenInfoBoxInner">
            <h3>Visste du att...</h3>
            <ul>
            <li>Om alla glaciärer och isar på Antarktis och Grönland smälter helt skulle havsnivån stiga med cirka 65 meter, vilket dramatiskt förändrar kustlinjer och landskap över hela världen.</li>
            <li>Stigande havsnivåer påverkar inte bara kustnära områden utan kan också tränga in i grundvatten och påverka sötvattenresurser, vilket skapar nya utmaningar för samhällen som är beroende av dessa källor.</li>
            </ul>
        </div>
        </div>
        </>
    );

};

export default Sjonivaer;