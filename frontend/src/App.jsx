import TopHeader from './components/Header/TopHeader'
import MidHeader from './components/Header/MidHeader'
import DownHeader from './components/Header/DownHeader'
import Main from './components/MainContent/Main'
import Footer from './components/Footer/Footer'
import ScrolltoTop from './components/Scroll/ScrolltoTop'


import Typography from "@mui/material/Typography";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./Theme";
import { motion } from "motion/react"


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
    <Main/>
    <ScrolltoTop/>
    <Footer/>
    </>
    </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default App
