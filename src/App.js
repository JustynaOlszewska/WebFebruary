import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Nav from './components/organism/Nav';
import Slider from './components/organism/Slider';
import Main from './components/organism/Main';

const App = () => {
  return (
    <Provider store={store}>
      <>
        <Nav />
        <Slider />
        <Main />
      </>
    </Provider>
  );
};

export default App;
