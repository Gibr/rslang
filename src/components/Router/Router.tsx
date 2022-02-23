import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AppRoutes from '../../app/constants/routes';
import AudioChallenge from '../../pages/Games/AudioChallenge/AudioChallenge';
import Auth from '../../pages/Auth/Auth';
import MainScreen from '../../pages/MainScreen/MainScreen';
import Sprint from '../../pages/Games/Sprint/Sprint';
import Statistics from '../../pages/Statistics/Statistics';
import TextBook from '../../pages/Textbook/Textbook';

function AppRouter(): JSX.Element {
  return (
    <Routes>
      <Route path={AppRoutes.MAIN_SCREEN} element={<MainScreen />} />
      <Route path={AppRoutes.AUTH} element={<Auth />} />
      <Route path={AppRoutes.TEXTBOOK} element={<TextBook />} />
      <Route path={`${AppRoutes.TEXTBOOK}/:unit/`} element={<TextBook />} />
      <Route
        path={`${AppRoutes.TEXTBOOK}/:unit/:page/`}
        element={<TextBook />}
      />
      <Route path={AppRoutes.STATISTICS} element={<Statistics />} />
      <Route path={AppRoutes.AUDIO_CHALLENGE} element={<AudioChallenge />} />
      <Route path={AppRoutes.SPRINT} element={<Sprint />} />
    </Routes>
  );
}

export default AppRouter;
