import './App.css';
import Navbarcomps from './Components/Navbarcomp';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './Components/Home';
import Informacio from './Components/Informacio';
import Bejelentkezes from './Components/Bejelentkezes';
import Regisztracio from './Components/Regisztracio';
import Nadrag from './Components/Nadrag';
import Pulover from './Components/Pulover';
import Polo from './Components/Polo';
import Kabat from './Components/Kabat';
import Cipo from './Components/Cipo';
import Kiegeszitok from './Components/Kiegeszitok';
import Errorpage from './Components/Errorpage';
import Szerkesztes from './Components/Szerkesztes';
import Uj from './Components/Uj';
import Felhasznalok from './Components/Felhasznalok';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbarcomps />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Informacio" element={<Informacio />} />
          <Route path='/Bejelentkezes' element={<Bejelentkezes />} />
          <Route path='/Regisztracio' element={<Regisztracio />} />
          <Route path='/Nadrag' element={<Nadrag />} />
          <Route path='/Pulover' element={<Pulover />} />
          <Route path='/Polo' element={<Polo />} />
          <Route path='/Kabat' element={<Kabat />} />
          <Route path='/Cipo' element={<Cipo />} />
          <Route path='/felhasznalok' element={<Felhasznalok />} />
          <Route path="/szerkesztes/:termekId" element={<Szerkesztes/>}></Route>
          <Route path="/uj" element={<Uj/>}></Route>
          <Route path='/kiegeszitok' element={<Kiegeszitok />} />
          <Route path="*" element={<Errorpage/>} />
        </Routes>
      </div>

      <div className="footer">
        <p>Szerzői jog © 2022 G and B Inc.</p>
      </div>
    </BrowserRouter>
  );
}

export default App;
