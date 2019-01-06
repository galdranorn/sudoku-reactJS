import React from 'react';
import Tile from './Tile';

// create object with blocks classes (1-9) and tiles IDs (1-81)
let tileData = [];

for (let i=1; i<=9; i++) {
    let blockClass = {
        class: 'block'+i,
        idList: {
            row1: [i, i+1, i+2], 
            row2: [i+9, i+10, i+11], 
            row3: [i+18, i+19, i+20]
        }
    }
    tileData.push(blockClass);
}

const Block = (props) => {

    let row1 = tileData[props.block].idList.row1.map(function(element) {
        return (<Tile id={element}/>)
    })
    let row2 = tileData[props.block].idList.row2.map(function(element) {
        return (<Tile id={element}/>)
    })
    let row3 = tileData[props.block].idList.row3.map(function(element) {
        return (<Tile id={element}/>)
    })

    return (
        <form className={tileData[props.block].class}>
            <div className="row">{row1}</div>
            <div className="row">{row2}</div>
            <div className="row">{row3}</div>
        </form>
    )
}

export default Block;