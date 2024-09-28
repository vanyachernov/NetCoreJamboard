import './App.css'
import Header from "./components/Header.tsx";
import Toolbar from "./components/Toolbar.tsx";
import SettingsBar from "./components/SettingsBar.tsx";
import Canvas from "./components/Canvas.tsx";

function App() {
  
  return (
    <>
        <Header />
        <Toolbar />
        <SettingsBar />
        <Canvas />
    </>
  )
}

export default App
