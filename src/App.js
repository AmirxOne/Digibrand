// Component
import Navbar from "./Component/Navbar";
import Filterbar from "./Component/Filterbar";
import Main from "./Component/Main";
// Context
import ContextProducts from "./context/ContextProducts";

function App() {
  return (
    <>
      <ContextProducts>
        <Navbar />
        <Filterbar />
        <Main />
      </ContextProducts>
    </>
  );
}

export default App;
