import React from 'react';
import ReactDOM from 'react-dom';

import { MuiThemeProvider } from 'material-ui/styles';
import DarkTheme from './theme.js';
import Routes from './routes.js';

function App() {
  return (
    <MuiThemeProvider theme={DarkTheme}>
      <Routes />
    </MuiThemeProvider>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
