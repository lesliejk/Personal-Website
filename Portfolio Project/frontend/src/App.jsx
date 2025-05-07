import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Slogan from './modules/Slogan.jsx'
import HomePage from './modules/HomePage.jsx'
import TopicsPage from './modules/TopicsPage.jsx'
import ContactPage from './modules/ContactPage.jsx'
import GalleryPage from './modules/GalleryPage.jsx'
import StaffPage from './modules/StaffPage.jsx'
import OrderPage from './modules/OrderPage.jsx'
import GamesPage from './modules/games/GamesPage.jsx'
import GameAdd from './modules/games/GameAdd.jsx'
import GameEdit from './modules/games/GameEdit.jsx'
import Navigation from './modules/Navigation.jsx'

import products from './data/products.js'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'


function App() {
  const [game, setGame] = useState([]);
  //const [count, setCount] = useState(0)

  return (
    <>
      <header>
        <h1>
        <img src="favicon-32x32.png" alt="Favicon for Leslie Kong's webpage"/>
        Leslie Kong</h1>
        <Slogan />
      </header>

      <Router>
        <Navigation />
        <main>
            <section>
                <Routes>
                    <Route path="/" element={<HomePage />}></Route>
                    {/* <Route path="/contact" element={<ContactPage />}></Route> */}
                    <Route path="/topics" element={<TopicsPage />}></Route>
                    <Route path="/gallery" element={<GalleryPage />}></Route>
                    {/* <Route path="/staff" element={<StaffPage />}></Route> */}
                    <Route path="/order" element={<OrderPage products={products}/>}></Route>
                    <Route path="/gamesPage" element={<GamesPage setGame={setGame}/>}></Route>
                    <Route path="/createGame" element={<GameAdd />}></Route>
                    <Route path="/updateGame" element={<GameEdit gameToEdit={game}/>}></Route>
                </Routes>
            </section>
        </main>
      </Router>

      <footer>
          <p>&copy;{new Date().getFullYear()} Leslie Kong</p>
      </footer>
    </>
  )
}

export default App
