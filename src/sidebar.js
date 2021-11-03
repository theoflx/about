import React from 'react';
import img from './img/pdp_cv.jpg';

export const Sidebar = (props) => {

    const {info, qualite, langue} = props

    return(
        <div className="left_part">
                <div className="picture_cv">
                    <img className="picture_of_me" src={img}></img>
                </div>

                <div className="personnal_info">
                    <div className="row_adresse">
                        <img className="logo-adresse" src="https://img.icons8.com/ios/50/000000/place-marker.png"/><p className="text_adresse">{info.adresse}</p>
                    </div>

                    <div className="row_phone">
                        <img className="logo-phone" src="https://img.icons8.com/ios/50/000000/phone.png"/><p>{info.telephone}</p>
                    </div>

                    <div className="row_email">
                        <img className="logo-email" src="https://img.icons8.com/ios/50/000000/apple-mail.png"/><p className="email_text">{info.email}</p>
                    </div>
                </div>

                <div className="qualite">
                        <div className="qualite_menu">
                            <p className="qualite_name">Mes qualités</p>
                        </div>

                        <div className="qualite_list">
                            <ul className="my_qualite">
                                {qualite.map((q, i) => {
                                   return <li>{q}</li>
                                })}
                            </ul>
                        </div>

                        <div className="skills_menu">
                            <p className="skills_name">Mes compétences</p>
                        </div>

                        <div className="skills">
                            <ul className="skills_list">
                                <li><img src="https://img.icons8.com/ios-filled/50/000000/javascript.png"/><p className="skills_text">Animation Web</p></li>
                                <li><img className="logo_node" src="https://img.icons8.com/ios/50/000000/react-native--v1.png"/><p className="skills_text">Front-end intéractif</p></li>
                                <li><img src="https://img.icons8.com/ios-filled/50/000000/sql.png"/><p className="skills_text">Gestion de bases de données</p></li>
                                <li><img className="logo_node" src="https://img.icons8.com/windows/32/000000/node-js.png"/><p className="skills_text">Projet Back-end</p></li>
                                <li><img src="https://img.icons8.com/ios-filled/50/000000/php.png"/><p className="skills_text">Appels de données</p></li>                               
                            </ul>
                        </div>

                        <div className="other_menu">
                            <p className="other_name">Autres</p>
                        </div>

                        <div className="other_text">
                            <ul className="other_lang">
                                <p className="lang_title">Langues :</p>
                                {langue.map((l, i) => {
                                    return <li>{l}</li>
                                })}
                            </ul>


                            <div>
                                <p className="bonus_title">Bonus :</p>
                                <li className="bonus_text">MOOC de L'ANSSI</li>
                                <li className="bonus_text">Permis B</li>
                            </div>
                        </div>
                </div>
            </div>
    )
}