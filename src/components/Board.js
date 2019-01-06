import React from 'react';
import style from './Board.css';
import Block from './Block';

const Board = () => {
    return (
        <div className={style.Board}>
            <div className="blockRow">
                <Block block="0"/>
                <Block block="1"/>
                <Block block="2"/>
            </div>
            <div className="blockRow">
                <Block block="3"/>
                <Block block="4"/>
                <Block block="5"/>
            </div>
            <div className="blockRow">
                <Block block="6"/>
                <Block block="7"/>
                <Block block="8"/>
            </div>
        </div>
    )
}

export default Board;