import { Grid } from '@material-ui/core';
import React, {Fragment, useState } from 'react';
import Character from './../Character/character.component';

const Characters = ({ characters = [] }) => {

    return(
        <Fragment>
            <Grid container spacing={ 3 } justify="center">
                {
                    characters && characters.map(character => {
                        const { small } = character.attributes.posterImage;
                        const {en, ...otherProps} = character.attributes.titles;
                        return(
                            <Character  
                                image={small}
                                en={en}
                                {...otherProps}
                            />
                        )
                    })
                }
            </Grid>
        </Fragment>
    );
}

export default Characters;
