import React from 'react';
import Tile from './Tile';

// define objects for tiles IDs
let blocks = [];
let columns = {};
let rows = {};

// blocks classes + tiles IDs
for (let i=1; i<=9; i++) {
    let ind = [0, 1, 4, 7, 28, 31, 34, 55, 58, 61]
    let blockObj = {
        class: 'block'+i,
        idList: {
            row1: [ind[i], ind[i]+1, ind[i]+2], 
            row2: [ind[i]+9, ind[i]+10, ind[i]+11], 
            row3: [ind[i]+18, ind[i]+19, ind[i]+20]
        }
    }
    blocks.push(blockObj);
}
console.log(blocks);

// column classes + tiles IDs
for (let i=1; i<10; i++) {
  let column = [i, i+9, i+18, i+27, i+36, i+45, i+54, i+63, i+72];
  let columnName = 'column'+i;
  columns[columnName] = column
}
console.log(columns);

// row classes + tiles IDs
var index = 1;
for (let i=1; i<=73; i+=9) {
  let row = [i, i+1, i+2, i+3, i+4, i+5, i+6, i+7, i+8];
  let rowName = 'row'+index;
  rows[rowName] = row;
  index++;
}
console.log(rows);


const Block = (props) => {

    let row1 = blocks[props.block].idList.row1.map(function(element) {
        return (<Tile id={element}/>)
    })
    let row2 = blocks[props.block].idList.row2.map(function(element) {
        return (<Tile id={element}/>)
    })
    let row3 = blocks[props.block].idList.row3.map(function(element) {
        return (<Tile id={element}/>)
    })

    return (
        <form className={blocks[props.block].class}>
            <div className="row">{row1}</div>
            <div className="row">{row2}</div>
            <div className="row">{row3}</div>
        </form>
    )
}

export default Block;