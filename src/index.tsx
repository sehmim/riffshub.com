import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import * as serviceWorker from './serviceWorker';
import { AppContextProvider } from "./State";

const RootComponent = () => {
    return(
        <AppContextProvider>
            <App />
        </AppContextProvider>
    )
}

ReactDOM.render(<RootComponent />, document.getElementById('root'));

serviceWorker.unregister();
