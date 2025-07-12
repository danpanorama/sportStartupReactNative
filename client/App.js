import React from 'react';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import AppNavigator from './src/navigation/AppNavigator';
import ErrorMessage from './src/components/errors/ErrorMessage'; // נניח שכבר יצרת את הקומפוננטה

export default function App() {
  return (
    <Provider store={store}>
      <Root />
    </Provider>
  );
}

import { useSelector } from 'react-redux';

function Root() {
  const user = useSelector(state => state.user.currentUser);

  return (
    <>
      <ErrorMessage /> 
      <AppNavigator user={user} />
    </>
  );
}
