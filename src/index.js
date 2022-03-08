import smoothscroll from 'smoothscroll-polyfill';
import ReactDOM from 'react-dom';
import { findRenderedComponentWithType } from 'react-dom/test-utils';

import App from './components/App'
import './index.css'

smoothscroll.polyfill();

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);