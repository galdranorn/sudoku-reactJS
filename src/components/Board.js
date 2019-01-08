import React from 'react';
import style from './Board.css';
import sudoku from 'sudoku-umd';

// indexes for chunks
let chunkIndexes = {};
for (let i=0; i<9; i++) {
    let ind = [0, 1, 4, 7, 28, 31, 34, 55, 58, 61]
    let chunkName = 'chunk'+i;
    let chunk = [ind[i], ind[i]+1, ind[i]+2, ind[i]+9, ind[i]+10, ind[i]+11, ind[i]+18, ind[i]+19, ind[i]+20]; 
    chunkIndexes[chunkName] = chunk;
}
// indexes for columns
let columnsIndexes = {};
for (let i=0; i<9; i++) {
    let column = [i, i+9, i+18, i+27, i+36, i+45, i+54, i+63, i+72];
    let columnName = 'column'+i;
    columnsIndexes[columnName] = column;
  }
// indexes for rows
let rowsIndexes = {};
var index = 1;
for (let i=0; i<73; i+=9) {
  let row = [i, i+1, i+2, i+3, i+4, i+5, i+6, i+7, i+8];
  let rowName = 'row'+index;
  rowsIndexes[rowName] = row;
  index++;
}

const Board = () => {
    return (
        <div className={style.Board}>
        </div>
    )
}

export default Board;