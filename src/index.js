import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import registerServiceWorker from './registerServiceWorker';
import {getGitHubList, getRedditPage} from './actions/gitHubActions'

const store= configureStore()

ReactDOM.render(
	<Provider store={store}>
	<div>
		<App />
	</div>
	</Provider>,
	document.getElementById('root'));
registerServiceWorker();
