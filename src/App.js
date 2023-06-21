import Products from "./Component/Products";
import Menu from "./Component/Menu";
import { Routes, Route } from "react-router-dom";
import Cart from "./Component/Cart";
import NotFound from "./Component/NotFound";

function App() {
  return (
    <div>
      <Menu />
      <center>
        <h1>Music Store</h1>
        <hr />
      </center>
      <div>
        <Routes>
          <Route exact path="/" Component={Products} />
          <Route path="/Products" Component={Products} />
          <Route path="/Cart" Component={Cart} />
          <Route path="*" Component={NotFound} />
          <Route />
        </Routes>
      </div>
     
    </div>
  );
}

export default App;
