import React from "react";
import vegan from '../img/icons/vegan_1686945 1.png';
import transport from '../img/icons/transportations_6417072 1.png';
import energi from '../img/icons/eco-friendly_9459665 1.png';
import avfall from '../img/icons/litter-box_7118984 1.png';
import ecco from '../img/icons/ecology_9186399 1.png';
import vatten from '../img/icons/water_10065503 1.png';
import shopping from '../img/icons/shopping_8461688 1.png';
import resa from '../img/icons/no-flight_2758366 1.png';
import odla from '../img/icons/vegetable_6591125 1 (1).png';
import utbilda from '../img/icons/utbildning.png';
import skrivare from '../img/icons/skrivare.png';
// Här importeras alla ikoner

//Funktionen renderar "åtgärder" på sidan
const Atgärder = () => {
  return (
    <> {/* Header-sektion för sidan */}
      <div className="atgarderHeader"></div>

      {/* Här visas titel, ikon och rubrik i var sin div box. Style css används för att bestämma */}
      <div className="titleBar">  
      <div className="skrivare"> <img src={skrivare} alt="skrivare"  style={{ width: '80px'}}/> </div>    
      <div className="titleText">Bromsa Klimatförändringar: 
        <br/>
        10 Hållbara Åtgärder För Att Minska Din Klimatpåverkan</div>
      </div> 

      <div className="greenInfoBox2"> 
        <div className="atgarderContainer">
        {/* Grå div box innehållande rubrik, ikon och lista med punkter för "åtgärder" och "varför" */}
        <div className="greyBox">
       
          <ul>
            <h4> Hållbara Transportval: </h4>
            <li>
              Åtgärder: Välj kollektivtrafik, cykling eller gång istället för
              att köra ensam i bil. Dela fordon eller överväg att använda el-
              eller hybridbilar.
            </li>
            <br/>
            <li>
              Varför: Detta minskar luftföroreningar, trängsel och
              koldioxidutsläpp, vilket är avgörande för att bevara miljön och
              förbättra luftkvaliteten.  
            </li>    
            </ul>
            <img src={transport} alt="transport" />
          </div>
          {/* Grön div box innehållande rubrik, ikon och lista med punkter för "åtgärder" och "varför" */}
          <div className="greenBox">
       
          <ul>   
            <h4> Minska Köttkonsumtionen: </h4>
            <li>
              
              Åtgärder: Inför köttfria dagar eller överväg vegetariska
              alternativ. Välj hållbart producerat kött och stöd lokala
              jordbruk.
            </li>
            <br/>
            <li>
              
              Varför: Minskad köttkonsumtion minskar klimatpåverkan från
              djuruppfödning och främjar en mer hälsosam och hållbar kost.
            </li>
          </ul>
          <img src={vegan} alt="kött" />
          </div>

          {/* Grå div box innehållande rubrik, ikon och lista med punkter för "åtgärder" och "varför" */}
          <div className="greyBox">
        
          <ul>
            <h4> Energisparåtgärder i Hemmet:</h4>
            <li>
              Åtgärder: Byt till energieffektiva apparater och LED-lampor.
              Använd smarta termostater och överväg solpaneler.
            </li>
            <br/>
            <li>
              Varför: Detta minskar hushållets energiförbrukning och främjar
              övergången till förnybar energi, vilket är avgörande för att
              bekämpa klimatförändringarna.
            </li>
          </ul>
          <img src={energi} alt="energi" />
          </div>

          {/* Grön div box innehållande rubrik, ikon och lista med punkter för "åtgärder" och "varför" */}
          <div className="greenBox">
        
          <ul>
            <h4> Återvinning och Minska Avfall:</h4>
            <li>
              Åtgärder: Återvinn regelbundet och minska användningen av
              engångsprodukter. Donera eller sälj oanvända föremål istället för
              att slänga dem.
            </li>
            <br/>
            <li>
              Varför: Regelmässig återvinning minimerar avfallsmängden och
              främjar en cirkulär ekonomi, vilket är avgörande för att minska
              deponering och bevara naturresurser.
            </li>
          </ul>
          <img src={avfall} alt="avfall" />
          </div>

           {/* Grå div box innehållande rubrik, ikon och lista med punkter för "åtgärder" och "varför" */}
          <div className="greyBox">
          <ul>
            <h4>Stöd Hållbara Initiativ: </h4>
            <li>
              Åtgärder: Stöd företag och organisationer som arbetar för
              hållbarhet. Engagera dig i lokala klimatinitiativ och
              volontärarbete.
            </li>
            <br/>
            <li>
              Varför: Genom att stödja hållbara initiativ skapar man incitament
              för en övergång till mer miljövänliga affärsprinciper och
              samhällsinitiativ.
            </li>
          </ul>
          <img src={ecco} alt="Stöd ecco" />
          </div>

          {/* Grön div box innehållande rubrik, ikon och lista med punkter för "åtgärder" och "varför" */}
          <div className="greenBox">
          <ul>
            <h4> Energiförbrukning och Vattenanvändning: </h4>
            <li>
              Åtgärder: Släck lampor och elektronik när de inte används. Minska
              vattenanvändningen genom att fixa läckor och välj vattenbesparande
              apparater.
            </li>
            <br/>
            <li>
              Varför: Dessa åtgärder minskar onödig energiförbrukning och
              bevarar vattenresurser, vilket är avgörande för hållbarhet.
            </li>
          </ul>  
          <img src={vatten} alt="Vatten" />
        </div>

        {/* Grå div box innehållande rubrik, ikon och lista med punkter för "åtgärder" och "varför" */}
        <div className="greyBox">
          <ul>
            <h4>Gröna Inköpsvanor: </h4>
            <li>
              Åtgärder: Välj produkter med minimalt förpackningsmaterial.
              Prioritera varor med miljömärkningar och certifieringar.
            </li>
            <br/>
            <li>
              Varför: Detta minimerar avfallsmängden och stödjer producenter som
              anammar miljövänliga produktionsmetoder.
            </li>
          </ul>  
          <img src={shopping} alt="Inköpvanor" />
          </div>

           {/* Grön div box innehållande rubrik, ikon och lista med punkter för "åtgärder" och "varför" */}
          <div className="greenBox">
          <ul>
            <h4> Minska Reseavtrycket: </h4>
            <li>
              Åtgärder: Planera resor effektivt för att minska
              transportsträckor. Utforska närliggande destinationer för semester
              och fritidsaktiviteter.
            </li>
            <br/>
            <li>
              Varför: Effektiv resplanering minskar koldioxidutsläpp från
              transporter och stödjer lokal turism och ekonomi.
            </li>
          </ul>
          <img src={resa} alt="Reseavtryck" />
          </div>

          {/* Grå div box innehållande rubrik, ikon och lista med punkter för "åtgärder" och "varför" */}
          <div className="greyBox">
 
          <ul>
            <h4> Odla Eget: </h4>
            <li>
              Åtgärder: Skapa en egen grönsaks- eller kryddträdgård för lokal
              och hållbar matproduktion. Kompostera organiskt avfall för att
              minska avfall och förbättra jordkvaliteten.
            </li>
            <br/>
            <li>
              Varför: Egen odling minskar behovet av transporter och främjar
              hållbar matproduktion och avfallshantering.
            </li>
          </ul>
          <img src={odla} alt="Odling" />
          </div>

          {/* Grön div box innehållande rubrik, ikon och lista med punkter för "åtgärder" och "varför" */}
          <div className="greenBox">
  
          <ul>
            <h4>Utbilda Dig Själv Och Sprid Medvetenhet: </h4>
            <li>
              Åtgärder: Fortsätt att lära dig om klimatpåverkan och hållbarhet.
              Dela dina kunskaper med vänner och familj för att öka
              medvetenheten och inspirera andra att agera.
            </li>
            <br/>
            <li>
              Varför: Kunskap är nyckeln till medveten konsumtion och hållbara
              beslut. Att sprida medvetenhet skapar en positiv inverkan genom
              att inspirera andra att göra skillnad.
            </li>
          </ul>
          <img src={utbilda} alt="Utbildning" />
          </div>
        </div>
      </div>
    </>
  );
};
// Exporterar komponenten så att den kan användas i andra delar i projektet
export default Atgärder;
