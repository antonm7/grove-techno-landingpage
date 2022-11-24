import Bottom from "./components/Bottom"
import Festival from "./components/Festival"
import Gathering from "./components/Gathering"
import Header from "./components/Header"
import Headliners from "./components/Headliners"
import Merch from "./components/Merch"
import Navbar from "./components/Navbar"
import './index.css'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Festival />
      <Headliners />
      <Gathering />
      <Merch />
      <Bottom />
     </div>
  )
}

export default App
