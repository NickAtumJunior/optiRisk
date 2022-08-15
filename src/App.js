import { createTheme, ThemeProvider } from '@mui/material';
import './App.css';
import Home from './pages/Home';


function App() {
  const theme = createTheme({
    palette:{
      appbar:{
        main:"Transparent" 
      },
      btnColor:{
        main:"#38009D"
      },
      form:{
        main:'#fff'
      }

    }
  })
  return (
    <ThemeProvider theme={theme}> 
      <Home/>
    </ThemeProvider>
   
    
  );
}

export default App;
