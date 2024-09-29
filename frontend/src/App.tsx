import './App.css'
import Header from "./components/Header.tsx";
import Toolbar from "./components/Toolbar.tsx";
import SettingsBar from "./components/SettingsBar.tsx";
import Canvas from "./components/Canvas.tsx";
import { Box } from '@chakra-ui/react';

function App() {
  
  return (
      <>
          <Header />
          <Toolbar />
          <Box display="grid" gridTemplateColumns="300px 1fr" gridGap="50px">
              <Box>
                  <SettingsBar />
              </Box>
              
              <Box>
                  <Canvas />
              </Box>
          </Box>
      </>
  )
}

export default App
