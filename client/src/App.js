import './App.css';
import Home from './pages/Home/Index';
import About from './pages/About';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Team from './pages/Team';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
				<Routes>
					<Route path='/' element={<Home />} />			
					<Route path='/about' element={<About />} />			
					<Route path='/team' element={<Team />} />			
				</Routes>
    	</BrowserRouter>
  );
}

export default App;
