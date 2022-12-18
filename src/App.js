
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Footer from './components/Footer';
import Transaction from './components/Transaction';
import Money from './components/Money';
import WithdrawMoney from './components/WithdrawMoney';
import Customers  from './components/Customers';
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';
function App() {
  return (
    <Router>
    <div className="App">
     <Navbar/>
    
     <Routes>
      <Route path="/" element={<Header/>}/>
    
      <Route path="/customers" element={<Customers/>}/>
      
      <Route path="/transactions" element={<Transaction/>}/>
      <Route path="/credit" element={<Money/>}/>
      <Route path="/withdraw" element={<WithdrawMoney/>}/>
     </Routes>
     <Footer/>

    </div>
    </Router>
  );
}

export default App;
