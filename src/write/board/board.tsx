import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import board from '../../css/Board.module.css';
import Grid from './grid';
import Pagination from './pagination';
import TopBtn from '../../global_component/TopBtn';

import LoginModal from '../../account/login/LoginModal';

const Board = () => {
  const { pageNumber } = useParams<{ pageNumber: string }>();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pageNumber]);

  return (
    <>
      <div id={board.container}>
        <p id={board.p}>이번주 BEST 코디</p>
        <Grid></Grid>
      </div>
      <div id={board.pagination}>
        <Pagination></Pagination>
      </div>
      <div>
        <TopBtn></TopBtn>
      </div>
      <div>{/* <LoginModal></LoginModal> */}</div>
    </>
  );
};

export default Board;
