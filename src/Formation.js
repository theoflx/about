import React from 'react';

export const Formation = (props) => {

     const { formation } = props

    return(
        <>
            <div className="background_degres">
                   <p className="title_degrees">
                        Formation
                   </p>
                </div>

                   <div className="block_degrees">
                        <p className="title_degrees_dev">

                         {formation.map((f, i) => {
                              return <li className="degrees">
                                   <strong>{f.title}</strong>
                                        <br></br><br></br>
                                        {f.description} {f.date}
                                   </li>
                         })}                         
                         </p>
                   </div>

        </>
    )
}