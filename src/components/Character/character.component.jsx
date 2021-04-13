import React from 'react';
import './character.styles.scss';
import Paper from '@material-ui/core/Paper';

const Character = ({ image, en, en_jp, ja_jp }) => (
    <Paper className='paper'>
        <img src={image} alt='image'/>
        <h3>{en}</h3>
        <h3>{en_jp}</h3>
        <h3>{ja_jp}</h3>
    </Paper>

);

export default Character;
