import './App.css';
import Home from './pages/Home/Index';
import About from './pages/About';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
				<Routes>
					<Route path='/' element={<Home />} />			
					<Route path='/about' element={<About />} />			
				</Routes>
    	</BrowserRouter>
  );
}

export default App;
