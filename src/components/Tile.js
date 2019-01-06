import React from 'react';
import style from './Tile.css';

const Tile = (props) => {
    return (
        <div className={style.Tile}>{props.number}</div>
    )
}

export default Tile;