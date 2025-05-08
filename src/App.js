import './App.css';
import About from './pages/About';
import Content from './pages/Content';
import Footer from './pages/Footer';
import Header from './pages/Header';
import Home from './pages/Home';
import { InfiniteMovingCardsDemo } from './pages/Testimonials';

import Testing from './pages/Testing';


function App() {
  return (
    
      <div className='App'>
       <Header/>
          <Home/>
          <Content/>
          <About/>
       <InfiniteMovingCardsDemo/>
       <Testing/>
      
        <Footer />
      </div>
  );

}


export default App;
