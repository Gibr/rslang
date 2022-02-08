import './TextbookNav.scss';
import React from 'react';
import {
  decrementCurrentUnitPage,
  incrementCurrentUnitPage,
  selectCurrentUnitPage,
  setCurrentUnitPage,
} from './textbookNavSlice';
import Pagination from '../Pagination/Pagination';
import {
  DEFAULT_TEXTBOOK_UNIT_PAGE,
  NUMBER_OF_TEXTBOOK_UNIT_PAGES,
} from '../../app/constants/global';
import UnitsNav from '../UnitsNav/UnitsNav';
import { IUnitsData } from '../../app/data/units';

function TextbookNav(props: { unitsData: IUnitsData }): JSX.Element {
  const { unitsData } = props;

  return (
    <div className="textbook__nav">
      <UnitsNav unitsData={unitsData} />
      <div className="textbook__pagination">
        <Pagination
          firstPageNum={DEFAULT_TEXTBOOK_UNIT_PAGE}
          totalPages={NUMBER_OF_TEXTBOOK_UNIT_PAGES}
          selectCurrentPage={selectCurrentUnitPage}
          actions={{
            increment: incrementCurrentUnitPage,
            decrement: decrementCurrentUnitPage,
            set: setCurrentUnitPage,
          }}
        />
      </div>
    </div>
  );
}

export default TextbookNav;
