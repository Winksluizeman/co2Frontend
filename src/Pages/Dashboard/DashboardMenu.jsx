import React from 'react';
import {Link} from "react-router-dom";
import Login from "../Account/Login.jsx";

//CSS__________________________________
import '../../Css/Theme.css';
import '../../Css/Dashboard/DashboardMenu.css';

//IMAGES__________________________________
import Groenhuis from '../../assets/Images/DashboardMenu/Groenhuis.png';
import GroenTuinieren from '../../assets/Images/DashboardMenu/GroenTuinieren.png';

 const DashboardMenuImages = () => {
        return (
        <div className="img-DashboardMenu">
            <div className="img-container">
                <img src={Groenhuis} alt="Groen huis" />
                <p>🌿 Groen Huis – Jouw eerste stap naar een duurzamer leven
                    Welkom bij het hart van jouw CO₂-profiel: je huishouden. Hier verzamel je alle informatie over je woning, energieverbruik, apparaten en dagelijkse gewoontes. Door eerlijk in te vullen hoe je leeft, krijg je inzicht in je impact — en ontdek je waar je kunt verduurzamen.

                    🛠️ Denk aan:

                    Type woning en isolatie

                    Verwarming en stroomverbruik

                    Aantal bewoners

                    Dagelijkse routines

                    Elke keuze telt. Begin hier, en zet samen met ons de stap naar een groenere toekomst!
                </p>

                <Link to="/DashboardHousehold" className="btn primary">Lees meer</Link>

            </div>

            <div className="img-container">
                <img src={GroenTuinieren} alt="Groen tuinieren" />
                <p>🥗 Eten & Drinken – Wat ligt er op je bord?
                    Welkom bij het smaakvolle deel van jouw CO₂-profiel: je voedingspatroon.

                    In dit onderdeel verzamel je informatie over je dagelijkse eetgewoontes, van ontbijt tot avondeten, en alles daartussen. Door eerlijk in te vullen wat er op je bord ligt, krijg je inzicht in de impact van je keuzes én ontdek je waar je kunt verduurzamen.

                    🛠️ Denk aan:

                    Hoe vaak je vlees, vis, zuivel en plantaardig eet

                    Wat je drinkt: kraanwater, frisdrank, koffie, alcohol.

                    Hoeveel voedsel je verspilt of bewaart

                    Elke maaltijd is een kans om groener te leven. Begin hier, en laat je CO₂-score je gids zijn naar een bewuster eetpatroon — goed voor jou én de planeet.
                </p>

                <Link to="/login" className="btn primary">Lees meer</Link>

                </div>
            </div>
        );
};

export default DashboardMenuImages;
