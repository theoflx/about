import React from 'react';

export const Loisirs = (props) => {

    const { loisirnum, loisirnotnum } = props

    return (
        <>
            <div className="background_loisirs">
                   <p className="title_loisirs">
                        Loisirs
                   </p>
                </div>

                <div className="columns_loisirs">

                <ul className="left_column">
                    <p className="title_loisirs_num">
                    <strong>En rapport avec le numérique :</strong></p>
                    <li>
                        {loisirnum.map((l, i) => {
                        return <><li>{l}</li></>
                        })}
                    </li>
                </ul>

                <ul className="right_column">
                    <p className="title_loisirs_not_num">
                    <strong >Sans rapport avec le numérique :</strong></p>
                    <li>
                        {loisirnotnum.map((lo, i) => {
                            return <><li>{lo}</li></>
                        })}
                    </li>
                </ul>
        </div>
        </>
    )
}