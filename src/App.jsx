import Nav from './components/Nav';
import Hero from './components/Hero';
import ChooseCrappo from'./components/ChooseCrappo';
import Calculate from './components/Calculate';
import Market from './components/Market';
import Subscribe from './components/Subscribe';
import Footer from './components/Footer'


function App() {

  return (
    <div className='overflow-x-hidden'>
      <Nav />
      <Hero />
      <ChooseCrappo />
      <Calculate />
      <Market />
      <Subscribe />
      <Footer />
    </div>
  )
}

export default App
