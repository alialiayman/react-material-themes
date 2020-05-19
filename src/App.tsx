import React, { useState } from 'react';
import './App.css';
import Home from './Home';
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';
import { FormControl, InputLabel, Select } from '@material-ui/core';

const purpleTheme = createMuiTheme({
  palette: {
    primary: purple,
    secondary: green,
    type: 'light'

  },
});

const defaultTheme = createMuiTheme({
  palette: {
    type: 'light'
  },
});

const defaultDarkTheme = createMuiTheme({
  palette: {
    type: 'dark'
  },
});

function App() {
  const [state, setState] = useState({ name: 'default', theme: defaultTheme });

  const handleThemeChange = (event: any) => {
    switch (event.target.value) {
      case 'defaultDarkTheme':
        return setState({ name: event.target.value, theme: defaultDarkTheme })
      case 'defaultTheme':
        return setState({ name: event.target.value, theme: defaultTheme })
      case 'purpleTheme':
        return setState({ name: event.target.value, theme: purpleTheme })

    }
  }
  return (

    <div className="App">
      <FormControl fullWidth>
        <InputLabel htmlFor="outlined-age-native-simple" >Select Theme</InputLabel>
        <Select
          label="Theme"
          id="outlined-age-native-simple"
          value={state.name} onChange={handleThemeChange}
        >
          <option value="none">Select Theme</option>
          <option value="defaultTheme">Default</option>
          <option value="defaultDarkTheme">Default Dark</option>
          <option value="purpleTheme">Purple</option>
        </Select>
      </FormControl>
      <ThemeProvider theme={state.theme}>
        <Home></Home>
      </ThemeProvider>
    </div>
  );
}

export default App;
