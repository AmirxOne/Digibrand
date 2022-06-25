// Component
import Navbar from "./Component/Navbar";
import Filterbar from "./Component/Filterbar";
import Main from "./Component/Main";
import Navbardescktop from "./Component/Navbardescktop";
// import Footer from "./Component/Footer";
import Diteals from '../src/Component/Diteals';
import Footer from "./Component/Footer";
// Context
import ContextProducts from "./context/ContextProducts";
// react router dom
import {Route, Routes, Navigate} from 'react-router-dom'

function App() {
  return (
    <div className="max-w-[1536px] mx-auto">
      <ContextProducts>
        <Navbardescktop/>
        <Navbar />
        <Filterbar />
        <Routes>
          <Route path="/products/:id" element={<Diteals />}/>
          <Route path="/products" element={<Main />}/>
          <Route path="/*" element={<Navigate to="/products"/>}/>
        </Routes>
        {/* <Footer/> */}
        <Footer/>
      </ContextProducts>
    </div>
  );
}

export default App;
