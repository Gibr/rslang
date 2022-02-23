import './UnitsNav.scss';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import {
  selectCurrentUnit,
  setCurrentUnit,
  setCurrentUnitPage,
} from '../TextbookNav/textbookNavSlice';
import {
  DEFAULT_TEXTBOOK_UNIT_PAGE,
  TEXTBOOK_DIFFICULT_UNIT_NUM,
} from '../../app/constants/global';
import { IUnitsData } from '../../app/data/units';
import AppRoutes from '../../app/constants/routes';
import { selectSignInData } from '../Forms/AuthFormSlice';

function UnitsNav(props: { unitsData: IUnitsData }): JSX.Element {
  const { unitsData } = props;

  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const currentUnit = useAppSelector(selectCurrentUnit);
  const { isSignIn } = useAppSelector(selectSignInData);

  const handleClick = (event: React.MouseEvent<HTMLElement>): void => {
    const unitId = event.currentTarget.id;
    const newCurrentUnitNum = unitId.slice(unitId.length - 1);

    dispatch(setCurrentUnit(+newCurrentUnitNum));
    dispatch(setCurrentUnitPage(DEFAULT_TEXTBOOK_UNIT_PAGE));

    navigate(`${AppRoutes.TEXTBOOK}/unit-${newCurrentUnitNum}/1`);
  };

  const generateUnits = (data: IUnitsData): JSX.Element[] => {
    return data.map((unit) => (
      <button
        type="button"
        key={unit.num}
        className={`units__nav-item${
          currentUnit === unit.num ? ' unit-active' : ''
        }`}
        style={{ backgroundColor: `${unit.color}` }}
        id={`unit-${unit.num}`}
        onClick={handleClick}
      >
        <div className="unit-wrap">
          <span className="unit__name">unit</span>
          <span className="unit__number">{unit.num}</span>
        </div>
      </button>
    ));
  };

  const units = generateUnits(unitsData);

  return (
    <div className="textbook__units">
      {units}
      {isSignIn && (
        <button
          type="button"
          className={`units__nav-item difficult-unit${
            currentUnit === TEXTBOOK_DIFFICULT_UNIT_NUM ? ' unit-active' : ''
          }`}
          style={{ backgroundColor: 'rgba(211, 35, 47, 0.8)' }}
          id={`unit-${TEXTBOOK_DIFFICULT_UNIT_NUM}`}
          onClick={handleClick}
        >
          <div className="unit-wrap">
            <span className="unit__name">
              D<span>ifficult</span>
            </span>
          </div>
        </button>
      )}
    </div>
  );
}

export default UnitsNav;
