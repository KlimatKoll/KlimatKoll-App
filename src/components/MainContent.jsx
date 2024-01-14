import React from 'react';
import TopContent from './TopContent'
import FossileFuels from './FossileFuels'
import GlobalTemperatures from './GlobalTemperatures'
import Glaciarer from './Glaciarer'
import Sjonivaer from './Sjonivaer'
import Paverkan from './Paverkan'
import Atgärder from './Atgärder'

/* Huvudinnehållet på sidan med alla sektionerna. */
const MainContent = () => {
    return (
        <div id="mainContent">
            <TopContent />
            <FossileFuels />
            <GlobalTemperatures />
            <Glaciarer />
            <Sjonivaer />
            <Paverkan/>
            <Atgärder/>
         
            
        </div>

    );

};

export default MainContent;