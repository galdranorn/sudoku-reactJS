import React from 'react';
import Tile from './Tile';

// create object with blocks classes (1-9) and tiles IDs (1-81)
let tileData = [];

for (let i=1; i<=9; i++) {
    let ind = [0, 1, 4, 7, 28, 31, 34, 55, 58, 61]
    let blockClass = {
        class: 'block'+i,
        idList: {
            row1: [ind[i], ind[i]+1, ind[i]+2], 
            row2: [ind[i]+9, ind[i]+10, ind[i]+11], 
            row3: [ind[i]+18, ind[i]+19, ind[i]+20]
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