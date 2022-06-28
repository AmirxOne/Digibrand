// Component
import Filterbar from "./Component/Filterbar";
import Main from "./Component/Main";
import Navbardescktop from "./Component/Navbardescktop";
import CartProducts from "./Component/CartProducts";
import Diteals from '../src/Component/Diteals';
import Footer from "./Component/Footer";
// Context
import ContextProducts from "./context/ContextProducts";
import ContextCart from "./context/ContextCart";
import ContextFilter from "./context/ContextFilter";
// react router dom
import {Route, Routes, Navigate} from 'react-router-dom'

function App() {
  return (
    <div className="max-w-[1536px] mx-auto">
      <ContextProducts>
        <ContextCart>
          <ContextFilter>
          <Navbardescktop>
              <Navbardescktop/>
              
              <Filterbar />
              <Routes>
                <Route path="/cart" element={<CartProducts/>}/>
                <Route path="/products/:id" element={<Diteals />}/>
                <Route path="/products" element={<Main />}/>
                <Route path="/*" element={<Navigate to="/products"/>}/>
              </Routes>
            <Footer/>
          </Navbardescktop>
          </ContextFilter>
        </ContextCart>
      </ContextProducts>
    </div>
  );
}

export default App;
