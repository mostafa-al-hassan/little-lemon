import Styles from './App.css';

import Main from './Components/Main'
import Header from './Components/Header'
import About from "./Components/About"
import Testimonials from "./Components/Testimonials"
import Footer from "./Components/Footer";


function App() {
  return (
    <div className={Styles.page}>
      <Header />
      <Main />
      <Testimonials /> 
      <About />
      <Footer />
    </div>
  );
}

export default App;
