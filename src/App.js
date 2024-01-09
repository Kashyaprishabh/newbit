
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Firstbox from './Components/Firstbox/Firstbox'
import Secondbox from './Components/Secondbox/Secondbox';
import Thirdbox from './Components/Thirdbox/Thirdbox';
import Footer from './Components/Footer/Footer';
const App = () => {
  return (
    <div className='jolly'>
      <Navbar/>
      <Firstbox/>
      <Secondbox/>
      <Thirdbox/>
      <Footer/>
    </div>
  );
}

export default App;
