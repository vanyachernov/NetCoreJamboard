import './App.css'
import Header from "./components/Header.tsx";
import Toolbar from "./components/Toolbar.tsx";
import SettingBar from "./components/SettingBar.tsx";
import Canvas from "./components/Canvas.tsx";

function App() {
  
  return (
    <>
        <Header />
        <Toolbar />
        <SettingBar />
        <Canvas />
    </>
  )
}

export default App
