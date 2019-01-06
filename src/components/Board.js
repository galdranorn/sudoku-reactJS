import React from 'react';
import style from './Board.css';
import Tile from './Tile';

const Board = () => {
    return (
        <div className={style.Board}>
            <Tile number="3"/>
            <Tile number="2"/>
            <Tile number="8"/>
        </div>
    )
}

export default Board;