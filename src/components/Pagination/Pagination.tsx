import './Pagination.scss';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ActionCreatorWithoutPayload,
  ActionCreatorWithPayload,
} from '@reduxjs/toolkit';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { RootState } from '../../app/store';
import AppRoutes from '../../app/constants/routes';
import { selectCurrentUnit } from '../TextbookNav/textbookNavSlice';

type IProps = {
  firstPageNum: number;
  totalPages: number;
  selectCurrentPage: (state: RootState) => number;
  actions: {
    increment: ActionCreatorWithoutPayload<string>;
    decrement: ActionCreatorWithoutPayload<string>;
    set: ActionCreatorWithPayload<number>;
  };
};

function Pagination(props: IProps): JSX.Element {
  const { firstPageNum, totalPages, selectCurrentPage, actions } = props;

  const navigate = useNavigate();
  const currentUnit = useAppSelector(selectCurrentUnit);
  const currentPage = useAppSelector(selectCurrentPage);
  const dispatch = useAppDispatch();

  const handlePageBtnClich = (
    event: React.MouseEvent<HTMLSpanElement, MouseEvent>
  ) => {
    const newCurrentPage = event?.currentTarget.innerHTML;
    dispatch(actions.set(+newCurrentPage));
    navigate(`${AppRoutes.TEXTBOOK}/unit-${currentUnit}/${newCurrentPage}`);
  };

  return (
    <div className="pagination">
      <button
        className="pagination__control"
        type="button"
        aria-label="previous page"
        disabled={currentPage === firstPageNum}
        onClick={() => {
          dispatch(actions.decrement());
          navigate(
            `${AppRoutes.TEXTBOOK}/unit-${currentUnit}/${currentPage - 1}`
          );
        }}
      >{`<`}</button>
      <div className="pagination__pages-container">
        <button
          className={`pages-item${
            currentPage === firstPageNum ? ' current-page' : ''
          }`}
          type="button"
          aria-label="choose page"
          onClick={(event) => handlePageBtnClich(event)}
        >
          {firstPageNum}
        </button>
        <button
          className={`pages-item${
            currentPage === firstPageNum + 1 ? ' current-page' : ''
          }`}
          type="button"
          aria-label="choose page"
          onClick={(event) => handlePageBtnClich(event)}
          disabled={currentPage > firstPageNum + 2}
        >
          {currentPage <= firstPageNum + 2 ? firstPageNum + 1 : '...'}
        </button>
        <button
          className={`pages-item${
            currentPage >= firstPageNum + 2 && currentPage <= totalPages - 2
              ? ' current-page'
              : ''
          }`}
          type="button"
          aria-label="choose page"
          onClick={(event) => handlePageBtnClich(event)}
        >
          {(() => {
            if (
              currentPage >= firstPageNum + 2 &&
              currentPage <= totalPages - 2
            ) {
              return currentPage;
            }
            if (currentPage < firstPageNum + 2) {
              return firstPageNum + 2;
            }
            return totalPages - 2;
          })()}
        </button>
        <button
          className={`pages-item${
            currentPage === totalPages - 1 ? ' current-page' : ''
          }`}
          type="button"
          aria-label="choose page"
          onClick={(event) => handlePageBtnClich(event)}
          disabled={currentPage < totalPages - 2}
        >
          {currentPage >= totalPages - 2 ? totalPages - 1 : '...'}
        </button>
        <button
          className={`pages-item${
            currentPage === totalPages ? ' current-page' : ''
          }`}
          type="button"
          aria-label="choose page"
          onClick={(event) => handlePageBtnClich(event)}
        >
          {totalPages}
        </button>
      </div>
      <button
        className="pagination__control"
        type="button"
        aria-label="next page"
        disabled={currentPage === totalPages}
        onClick={() => {
          dispatch(actions.increment());
          navigate(
            `${AppRoutes.TEXTBOOK}/unit-${currentUnit}/${currentPage + 1}`
          );
        }}
      >{`>`}</button>
    </div>
  );
}

export default Pagination;
