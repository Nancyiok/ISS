import Header from './components/Header/Header';
import MissionInfo from './components/MissionInfo/MissionInfo';
import Switch from "./components/SwitchTheme/SwitchTheme";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <>
      <Switch />
      <Header />
      <MissionInfo />
      <Footer />
    </>
  )
}

export default App
