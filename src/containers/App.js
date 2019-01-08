import React from 'react';
import { hot } from 'react-hot-loader';
import sudoku from 'sudoku-umd';
import styles from './App.css';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            board: '',
            initialBoard: '',
            buttonsVisible: false,
        }
    }

    newBoard(level) {
        let randomBoard = sudoku.generate(level);
        this.setState ({
            board: randomBoard,
            initialBoard: randomBoard
        })
    }

    updateBoard(event, index) {
        if (event.target.value>0 && event.target.value<=9 && isNaN(event.target.value) === false) {
            let temporaryBoard = this.state.board.split("").map((item, i) => {
                if (i==index) return event.target.value;
                    else return item;
                });
            this.setState({
                board: temporaryBoard.join(""),
                buttonsVisible: false
            })
        }
        else {
            return false;
        }
    }

    restart() {
        let restartBoard = this.state.initialBoard;
        this.setState({
            board: restartBoard,
        })
    }

    check() {
        let sudokuSolve = sudoku.solve(this.state.board);
        if (this.state.board == sudokuSolve) {}
        else {}
    }

    solve() {
        let sudokuSolve = sudoku.solve(this.state.board);
        this.setState({
            board: sudokuSolve
        })
    }

    render() {
        return (
            <div className={styles.App}>
                <h1>Sudoku</h1>
                <button className={styles.NewGame} onClick={()=>{this.setState({buttonsVisible: true})}}>New game</button>
                
                <div style={{display: (this.state.buttonsVisible) ? 'block' : 'none'}}>
                    <button className={styles.Easy} onClick={()=>(this.newBoard('easy'))}>Easy</button>
                    <button className={styles.Medium} onClick={()=>(this.newBoard('medium'))}>Medium</button>
                    <button className={styles.Hard} onClick={()=>(this.newBoard('hard'))}>Hard</button>
                </div>
                
                <div className={styles.Board}>
                    {this.state.board.split("").map((item,index)=>{
                        if (this.state.initialBoard.split("")[index] != ".") {
                            return <input key={index} disabled value={item}/>
                        }
                        else {
                            return <input key={index} onChange={(event)=>this.updateBoard(event,index)} type='number' value={item}/>
                        }
                    })}
                </div>
                
                <div className={styles.Buttons}>
                    <button className={styles.Check} onClick={()=>this.check()}>Check</button>
                    <button className={styles.Solve} onClick={()=>this.solve()}>Solve</button>
                    <button className={styles.Restart} onClick={()=>this.restart()}>Restart</button>
                </div>
            </div>
        );
    }
}

export default hot(module)(App);

