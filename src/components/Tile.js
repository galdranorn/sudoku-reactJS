import React from 'react';
import style from './Tile.css';

const Tile = (props) => {
    return (
        <input
            id={props.id}
            type="number"
            className={style.Tile}
            min="1"
            max="9"
            placeholder="0">
        </input>
    )
}

export default Tile;