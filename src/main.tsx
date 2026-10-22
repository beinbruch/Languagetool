import { render } from 'preact';
import { App } from './app';
import { requestPersistence } from './store';
import './styles.css';

render(<App />, document.getElementById('app')!);
requestPersistence();
