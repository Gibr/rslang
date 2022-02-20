import './Auth.scss';
import React from 'react';
import RegForm from '../../components/Forms/RegForm';

function Auth(): JSX.Element {
  return (
    <main className="page-wrapper auth__page-wrapper">
      <RegForm />
    </main>
  );
}

export default Auth;
