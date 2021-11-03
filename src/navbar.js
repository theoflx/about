import React from 'react';

export const Navbar = (props) => {

    const { user } = props

    return (
        <div className="navbar">
        <h1 className="my_name">{user.nom} {user.prenom}</h1>
        <h2 className="my_job">{user.poste}</h2>
    </div>
    )
}