import React from 'react';


/* Komponent för att visa klimatets påverkan på människor */
const Paverkan = () => {

    return (
      <>
        {/* Här returneras Header-sektion för sidan */}
        <div className="paverkanHeader"></div>

        {/* Här returneras titel i en div. */}
        <div className="titleBar">SÅ PÅVERKAR KLIMATFÖRÄNDRINGAR DIN HÄLSA</div>

        <div className="textContent">        {/* Här returneras allt innehåll i sektionen omslutet av en div box*/}
          <p>
            Klimatförändringar utgör en alltmer påtaglig risk för hälsan,
            särskilt för dig som är äldre. På KlimatKoll betonar vi vikten av
            att vara medveten om dessa risker och vidta lämpliga åtgärder för
            att minimera deras påverkan.
          </p>

          <p>
            Här nedan presenteras några väsentliga aspekter som alla är resultat
            av klimatförändringar:
          </p>

          {/* Returneras Rubrik, text och länk*/}
          <h2>Luftföroreningar och dess påverkan på hjärt- och lungsystemet:</h2>
          <p>
            {" "}
            Förändringar i luftföroreningshalter kan ge allvarliga
            hälsokonsekvenser och leda till hjärt-kärlsjukdomar, luftvägsbesvär
            och astma, och de kan förvärra symtom hos personer som redan är
            sjuka. Du som äldre är särskilt sårbar för dessa hälsoeffekter,
            särskilt om har hjärt- och lungsjukdomar. Studier visar att
            luftföroreningar kan orsaka förtidig död.
          </p>

          {/* Returneras Rubrik, text och länk*/}
          <h2> Nollgenomgångar och risker för olycksfall:</h2>
          <p>
            Vid nollgenomgångar - vilket innebär att både plus- och minusgrader
            uppmäts under samma dygn. Ökar risken för isbildning och halka,
            vilket i sin tur kan leda till olika typer av olycksfall, som
            exempelvis halkolyckor. Halkolyckor resulterar oftast i skador, och
            du som äldre löper en särskilt hög risk att drabbas av allvarliga
            skador. För dig som är äldre kan det vara svårare att återhämta dig
            från sådana skador. Höftfrakturer vanligt förekommande och särskilt
            allvarliga, dessa kan ge upphov till allvarliga infektioner och till
            och med förtida död. För dig som lyder av benskörhet kan halkolyckor
            leda till mycket allvarliga komplikationer. 
          </p>

          {/* Returneras Rubrik, text och länk*/}
          <h2>Extrema värmeböljor och dess påverkan på äldre:</h2>
          <p>
            Klimatförändringar som extrema värmeböljor, kan påverka dig som är
            äldre negativt, särskilt om du har problem med hjärtat, kärl och
            lungor. Värmeböljor kan ge upphov till allergier eftersom när det
            blir varmare förlängs växtsäsongen vilket påverkar pollensäsongens
            längd och intensitet. Värmeböljor kan också innebära högre risk att
            drabbas av olika typer av infektioner, eftersom när det är varmt kan
            infektioner eklare spridas genom vatten och mat med tanke på att
            bakterier gynnas av varmare förhållanden. 
          </p>

          {/* Returneras Rubrik, text och länk*/}
          <h2>Höga temperaturer och psykisk ohälsa hos äldre.</h2>
          <p>
            Ett varmare klimat kan påverka äldres mentala hälsa negativt. För
            varma förhållanden kan innebära en ökad risk att drabbas av
            depression, ångest och sömnsvårigheter hos äldre.
          </p>
          <br />

          <h3>Läs mer om hur klimatförändringar påverkar din hälsa:</h3>
          <ul>
                <li><a href="https://www.folkhalsomyndigheten.se/contentassets/d12dc30a4b6b47549b018b53adf2b11a/halsokonsekvenser-klimatforandring-sverige.pdf">Hälsokonsekvenser av klimatförändring i Sverige: En risk- och sårbarhetsanalys</a></li>
                <li><a href="https://www.naturvardsverket.se/amnesomraden/klimatforandringar/klimatet-i-framtiden/effekter-i-sverige/konsekvenser-for-manniskors-halsa/">Klimatförändringarnas effekter i Sverige - Konsekvenser för människors hälsa</a></li>
                <li><a href="https://www.klimatanpassning.se/hur-samhallet-paverkas/vard-och-halsa/halsoeffekter-1.35013">Hur samhället påverkas: Hälsokonsekvenser</a></li>
            </ul>
        </div>
      </>
    );
};

// Exporterar komponenten så att den kan användas i andra delar i appen
export default Paverkan;