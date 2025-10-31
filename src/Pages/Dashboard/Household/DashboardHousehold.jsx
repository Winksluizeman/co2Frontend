import React from 'react';
import { Link } from "react-router-dom";

// CSS__________________________________
import '../../../Css/Theme.css';
import '../../../Css/Household/HouseholdMenu.css'

// IMAGES__________________________________
import Windmolenpark from '../../../assets/Images/Household/Windmolenpark.png';
import Huisverwarming from '../../../assets/Images/Household/Huisverwarming.png';
import File from '../../../assets/Images/Household/File.png';
import Vliegreizen from '../../../assets/Images/Household/Vliegreizen.png';

const DashboardMenuImages = () => {
    return (
        <div className="img-DashboardMenu">
            <h2>
                Maak gebruik van onze gratis CO₂-calculator en ontdek eenvoudig waar en hoeveel u aan uitstoot van broeikasgassen veroorzaakt. Creëer daarmee bewustwording en maak besparingen op uw energieverbruik en CO₂-uitstoot inzichtelijk. Door jaarlijks deze berekening te doen, ziet u ook direct het resultaat van genomen bespaarmaatregelen. Hier beschrijven we voor uw gemak hoe u de grenzen van uw CO₂-voetafdruk bepaalt.
            </h2>

            <div className="img-container">
                <img src={Windmolenpark} alt="Een afbeelding van het windmolenpark in de Noordzee" />
                <Link to="/login" className="btn primary">Uitstoot berekenen</Link>
            </div>

            <div className="img-container">
                <img src={Huisverwarming} alt="Een afbeelding van verwarming in een huis" />
                <Link to="/login" className="btn primary">Uitstoot berekenen</Link>
            </div>

            <div className="img-container">
                <img src={File} alt="Een afbeelding van een file op de snelweg" />
                <Link to="/login" className="btn primary">Uitstoot berekenen</Link>
            </div>

            <div className="img-container">
                <img src={Vliegreizen} alt="Een afbeelding van een vliegtuig in de lucht" />
                <Link to="/login" className="btn primary">Uitstoot berekenen</Link>
            </div>
        </div>
    );
};

export default DashboardMenuImages;
