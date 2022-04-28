import { BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.scss';
import { Navbar } from './Components/Navbar';
import { Sidebar } from './Components/Sidebar';
import { Home } from './Components/Pages/Home';
import { Client } from './Components/Pages/Client';
import { Sales } from './Components/Pages/Sales';
export function App() {
  return (
    <Router>
      <Navbar/>
      
      <div className='flex'>
      <Sidebar/>
      <div className='content'>
        <Routes path="/" exact={true} component={Home} />
        <Routes path="/Client" exact={true} component={Client} />
        <Routes path="/Sales" exact={true} component={Sales} />
      </div>
      </div>
    </Router>
  );
}


