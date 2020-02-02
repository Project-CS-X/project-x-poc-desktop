import React, { Fragment } from 'react';
import { render } from 'react-dom';
import { AppContainer as ReactHotAppContainer } from 'react-hot-loader';
import './app.global.scss';
import HotAppContainer from './components/HotAppContainer'

const AppContainer = process.env.PLAIN_HMR ? Fragment : ReactHotAppContainer;

render(
  <AppContainer>
      <HotAppContainer /> 
  </AppContainer>,
  document.getElementById('root')
);
