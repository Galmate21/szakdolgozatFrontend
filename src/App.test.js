import { render, screen } from '@testing-library/react';
import App from './App';
import Cart from './Components/Cart';
import Cipo from './Components/Cipo';
import Elozmeny from './Components/Elozmeny';
import Home from './Components/Home';
import Errorpage from './Components/Errorpage'
import Felhasznalok from './Components/Felhasznalok';
import Informacio from './Components/Informacio';
import Kabat from './Components/Kabat';
import Kiegeszitok from './Components/Kiegeszitok';
import Loading from './Components/Loading';
import Megrendelesek from './Components/Megrendelesek';
import Nadrag from './Components/Nadrag';
import Navbarcomps from './Components/Navbarcomp';
import Polo from './Components/Polo';
import Profil from './Components/Profil';
import Pulover from './Components/Pulover';
import Regisztracio from './Components/Regisztracio';
import Szerkesztes from './Components/Szerkesztes';
import Uj from './Components/Uj';
import Bejelentkezes from './Components/Bejelentkezes';
test('render App', () => {
  const Render=render(<App />)
  
  expect(Render)
});

test('render Home', () => {
  const Render=render(<Home />)
  
  expect(Render)
});


test('render cart', () => {
  const Render=render(<Cart />)
  
  expect(Render)
});
test('render cipő', () => {
  const Render=render(<Cipo />)
  
  expect(Render)
});
test('render Elozmeny', () => {
  const Render=render(<Elozmeny />)
  
  expect(Render)
});
test('render ErrorPage', () => {
  const Render=render(<Errorpage />)
  
  expect(Render)
});

test('render Felhasznalok', () => {
  const Render=render(<Felhasznalok />)
  
  expect(Render)
});


test('render informacio', () => {
  const Render=render(<Informacio />)
  
  expect(Render)
});
test('render Kabat', () => {
  const Render=render(<Kabat />)
  
  expect(Render)
});
test('render Kiegeszitok', () => {
  const Render=render(<Kiegeszitok />)
  
  expect(Render)
});


test('render loading', () => {
  const Render=render(<Loading />)
  
  expect(Render)
});
test('render megrendeles', () => {
  const Render=render(<Megrendelesek />)
  
  expect(Render)
});
test('render Nadrag', () => {
  const Render=render(<Nadrag />)
  
  expect(Render)
});



test('render Navbar', () => {
  const Render=render(<Navbarcomps />)
  
  expect(Render)
});
test('render Polo', () => {
  const Render=render(<Polo />)
  
  expect(Render)
});
test('render Profil', () => {
  const Render=render(<Profil />)
  
  expect(Render)
});


test('render pulover', () => {
  const Render=render(<Pulover />)
  
  expect(Render)
});
test('render regisztracio', () => {
  const Render=render(<Regisztracio />)
  
  expect(Render)
});
test('render szerkesztes', () => {
  const Render=render(<Szerkesztes />)
  
  expect(Render)
});
test('render új termék hozzáadása', () => {
  const Render=render(<Uj />)
  
  expect(Render)
});



test('render login', () => {
  const Render=render(<Bejelentkezes />)
  
  expect(Render)
});
