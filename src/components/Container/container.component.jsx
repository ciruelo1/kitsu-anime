import React, { Fragment, useState, useEffect } from 'react';
import Characters from './../Characters/characters.component';
import { Api } from './../../lib/Api';

const Container= () => {
    const [characters, setCharacters] = useState();

    useEffect(() => fetchCharacters(), []);

    const fetchCharacters = async () => {
        const response =  await Api.getCharacters();
        const { data: characters } = response;
        setCharacters(characters.data);
    }

    return(
        <Fragment>
            <Characters characters={characters} />
        </Fragment>
    );
}

export default Container;
