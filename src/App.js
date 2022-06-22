// Component
import Navbar from "./Component/Navbar";
import Filterbar from "./Component/Filterbar";
import Main from "./Component/Main";
import Navbardescktop from "./Component/Navbardescktop";
import Footer from "./Component/Footer";
// Context
import ContextProducts from "./context/ContextProducts";

function App() {
  return (
    <>
      <ContextProducts>
        <Navbardescktop/>
        <Navbar />
        <Filterbar />
        <Main />
        <Footer/>
      </ContextProducts>
    </>
  );
}

export default App;
