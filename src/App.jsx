import TopHeader from './components/Header/TopHeader'
import MidHeader from './components/Header/MidHeader'
import DownHeader from './components/Header/DownHeader'


import Typography from "@mui/material/Typography";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./Theme";
import { Outlet } from "react-router-dom";


import './App.css'

function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
    <>
    <CssBaseline />
    <TopHeader/>
    <MidHeader/>
    <DownHeader/>


    <div className="App">
          <Typography variant="h3">Header</Typography>
          <Outlet />
        </div>
    </>
    </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default App
