import React from 'react';
import { Provider, useSelector } from 'react-redux';
import { store } from './src/redux/store';
import AppNavigator from './src/navigation/AppNavigator';

function Root() {
  const user = useSelector(state => state.user.currentUser);
  return <AppNavigator user={user} />;
}

export default function App() {
  return (
    <Provider store={store}>
      <Root />
    </Provider>
  );
}
