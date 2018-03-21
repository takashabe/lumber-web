import { createMuiTheme } from 'material-ui/styles';
import grey from 'material-ui/colors/blueGrey'

const DarkTheme = createMuiTheme({
  palette: {
    primary: { main: grey[900] },
  },
});

export default DarkTheme;
