import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Banner from './Components/Banner/Banner';
import Rowpost from './Components/Rowpost/Rowpost';
import {action,originals} from './urls'

function App() {
  return (
    <div className="App">
        <Navbar/>
        <Banner/>
        <Rowpost url={originals} title='Netflix Original'/>
        <Rowpost url={action} title='Action' isSmall={true}/>
    </div>
  );
}

export default App;
