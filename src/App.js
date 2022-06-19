// Component
import Navbar from "./Component/Navbar";
import Filterbar from "./Component/Filterbar";
import Store from "./Component/Store";
import ContextProducts from "./context/ContextProducts";

function App() {
  return (
    <>
      <ContextProducts>
        <Navbar />
        <Filterbar />
        <Store />
      </ContextProducts>
    </>
  );
}

export default App;
