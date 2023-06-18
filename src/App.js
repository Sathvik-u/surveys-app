import './App.css';
import SuccessPage from './components/SuccessPage';
import Home from './components/Home';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Responses from './components/Responses'

function App() {
  return (
    <div className="" id=''>

<BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/Success" element={<SuccessPage/>}/>
        <Route exact path="/Responses" element={<Responses/>}/>
      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
