import React from 'react';
import style from './Board.css';
import Tile from './Tile';

// create object with blocks classes (1-9) and tiles IDs (1-81)
let tileData = [];

for (let i=1; i<=9; i++) {
    let blockClass = {
        class: 'block'+i,
        idList: [i, i+1, i+2, i+9, i+10, i+11, i+18, i+19, i+20]
    }
    tileData.push(blockClass);
}

const Block = (props) => {

    let listElements = tileData[props.block].idList.map(function(element) {
        return (<Tile id={element}/>)
    })

    return (
        <form className={tileData[props.block].class} style={style.Block}>
            {listElements}
        </form>
    )
}

export default Block;