import { useState } from 'react';
import Nav from './components/Nav';
import Main from './components/Main';
import ShopPage from './components/ShopPage';
import AboutPage from './components/AboutPage';
import Cart from './components/Cart';
import Footer from './components/Footer';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { laptop } from './components/data';

type bucketType = {
  item: laptop;
  quantity: number;
};

function App() {
  const [buckets, setBuckets] = useState<bucketType[]>([]);

  return (
    <HashRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route
          path="/shop"
          element={
            <ShopPage buckets={buckets} setBucketsOfParent={setBuckets} />
          }
        ></Route>
        <Route path="/about" element={<AboutPage />}></Route>
        <Route
          path="/cart"
          element={<Cart setBucketsOfParent={setBuckets} buckets={buckets} />}
        ></Route>
      </Routes>
      <Footer />
    </HashRouter>
  );
}

export default App;
