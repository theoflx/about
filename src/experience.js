import React from 'react';

export const Experience = () => {
    return (
    <>
        {/* composant expérience pro */}
        <div className="background_xp_pro">
            <p className="title_xp_pro">
            Expérience professionnelle
            </p>
        </div>

        {/* First expérience */}
        <p className="title_first_xp"><strong>Développeur Web</strong> pour Click & digital à Saint-Malo</p>
            <p className="date_first_xp">01/03/2020 au 18/05/2020</p>
            <br></br>
        <p className="text_first_xp">Refonte stylisé d'une page du site 'locationcapcorse' avec l'utilisation de CSS et Javascript.<br></br>
         Amélioration d'un back office existant (ajout d'onglets, de champs, le tout en liens avec la base de données) en PHP 7 et gestion de la base de données avec PhpMyAdmin.                            
        </p>

        {/* Second Expérience */}
        <p className="title_second_xp"><strong>Employé polyvalent</strong> pour C-log à Saint-Malo</p>
            <p className="date_second_xp">04/2019 au 03/2020</p>
            <br></br>
        <p className="text_second_xp">Réalisation de diverses tâches au seins de C-log la centrale logistique de Beaumanoir.<br></br>
        Service masse, e-commerce, expedition..                
        </p>
    </>
    )
}