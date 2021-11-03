import React from 'react';

export const Presentation = (props) => {

    const { presentation } = props

    return (
        <>
                <div className="background_presentation">
                   <p className="title_presentation">
                        Présentation
                   </p>
                </div>

                <p className="text_presentation">
                    {presentation.map((p, i) => {
                        return <><li>{p}</li>{i == presentation.length-1 ? null : <br></br>}</>
                    })}
                </p>
    </>     
    )
}