import React from 'react';
import * as ReactDom from 'react-dom';
import App from './views/app/App';

const container = document.getElementById('root') as HTMLElement;
ReactDom.render(<App />, container);

// calling IPC exposed from preload script
window.electron.ipcRenderer.once('ipc-example', (arg) => {
    // eslint-disable-next-line no-console
    console.log(arg);
});
window.electron.ipcRenderer.sendMessage('ipc-example', ['ping']);
