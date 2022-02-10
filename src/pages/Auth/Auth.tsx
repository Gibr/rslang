import './Auth.scss';
import React from 'react';
import AuthForm from '../../components/Forms/AuthForm';

function Auth(): JSX.Element {
  return (
    <main className="page-wrapper auth__page-wrapper">
      <AuthForm />
    </main>
  );
}

export default Auth;
