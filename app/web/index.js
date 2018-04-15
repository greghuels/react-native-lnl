import { render } from 'react-dom';
import React from 'react';

import Root from './containers/Root';
import configureStore from '../common/redux/configureStore';

require('./styles/style.less');

const store = configureStore();
const rootElement = document.getElementById('root');

render(<Root store={store} />, rootElement);
