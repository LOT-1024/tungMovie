import 'swiper/swiper.min.css'
import './assets/boxicons-2.0.7/css/boxicons.css'
import './App.scss'
import { BrowserRouter, Route } from 'react-router-dom'
import { Footer, Header } from './components'
import Routes from './config/Routes'

function App() {
  return (
    <BrowserRouter>
      <Route render={() => (
        <>
          <Header/>
          <Routes/>
          <Footer/>
        </>
      )}/>
    </BrowserRouter>
  )
}

export default App
