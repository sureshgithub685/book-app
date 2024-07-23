import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BookList from './components/Books/BookList';
import BookDetails from './components/Books/BookDetails';
import Cart from './components/Cart/Cart';
import Header from './components/Header';
import Checkout from './components/Checkout/Checkout';
import Search from './components/Search';

function App() {
  return (
    <>
    <Router>
    <Header />
    <Search />
      <Routes>
        <Route path="/" element={<BookList />} />
        <Route path="/book/:id" element={<BookDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/Checkout" element={<Checkout />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;