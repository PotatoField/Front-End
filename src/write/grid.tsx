import React from 'react';
import board from '../css/Board.module.css';

const Grid = () => {
  return (
    <>
      <div className={board.row} id={board.row1}>
        <div className={board.col}>
          <img></img>
          <h4></h4>
          <p></p>
          <p></p>
        </div>
        <div className={board.col}>Column</div>
        <div className={board.col}>Column</div>
      </div>
      <div className={board.row} id={board.row2}>
        <div className={board.col}>Column</div>
        <div className={board.col}>Column</div>
        <div className={board.col}>Column</div>
      </div>
      <div className={board.row} id={board.row3}>
        <div className={board.col}>Column</div>
        <div className={board.col}>Column</div>
        <div className={board.col}>Column</div>
      </div>
    </>
  );
};

export default Grid;
