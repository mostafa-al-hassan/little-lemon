import Styles from './App.css';

import Main from './Components/Main'
import Header from './Components/Header'
import Footer from './Components/Footer'


function App() {
  return (
    <div className={Styles.page}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
