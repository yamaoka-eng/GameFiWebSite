import { Routes, Route } from "react-router-dom"
import { Header, Footer } from "./components"
import { lazyLoad } from "./utils"
import "./App.scss"

const Home = () => import("./pages/Home")
const Game = () => import("./pages/Game")
const Market = () => import("./pages/Market")
const GameWiki = () => import("./pages/GameWiki")

function App() {
  return (
    <div className="App">
      <Header />
      <div className="">
        <Routes>
          <Route path="/" element={lazyLoad(Home)} />
          <Route path="/game" element={lazyLoad(Game)} />
          <Route path="/market" element={lazyLoad(Market)} />
          <Route path="/gamewiki" element={lazyLoad(GameWiki)} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App
