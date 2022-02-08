import './Textbook.scss';

import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import TextbookNav from '../../components/TextbookNav/TextbookNav';
import { unitsData } from '../../app/data/units';
import { useAppDispatch } from '../../app/hooks';
import AppRoutes from '../../app/constants/routes';
import {
  DEFAULT_TEXTBOOK_UNIT,
  DEFAULT_TEXTBOOK_UNIT_PAGE,
} from '../../app/constants/global';
import {
  setCurrentUnit,
  setCurrentUnitPage,
} from '../../components/TextbookNav/textbookNavSlice';

function TextBook(): JSX.Element {
  const { unit, page } = useParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    if (!unit) {
      return navigate(
        `${AppRoutes.TEXTBOOK}/unit-${DEFAULT_TEXTBOOK_UNIT}/${DEFAULT_TEXTBOOK_UNIT_PAGE}`
      );
    }
    if (!page) {
      return navigate(
        `${AppRoutes.TEXTBOOK}/${unit}/${DEFAULT_TEXTBOOK_UNIT_PAGE}`
      );
    }
  }, [navigate, unit, page]);

  dispatch(
    setCurrentUnit(unit ? +unit.slice(unit.length - 1) : DEFAULT_TEXTBOOK_UNIT)
  );
  dispatch(setCurrentUnitPage(page ? +page : DEFAULT_TEXTBOOK_UNIT_PAGE));
  return (
    <main className="page-wrapper textbook__wrapper">
      <div className="container textbook__container">
        <TextbookNav unitsData={unitsData} />
      </div>
    </main>
  );
}

export default TextBook;
