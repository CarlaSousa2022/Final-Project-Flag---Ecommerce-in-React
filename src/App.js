import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import ProductList from "./pages/ProductList";
import ProductPage from "./pages/ProductPage";
import NotFound from "./pages/NotFound";
import "./App.css";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<ProductList />} />
          <Route path="/login" exact={true} element={<Login />} />
          <Route path="/productlist" element={<ProductList />} />
          <Route path="/productpage/:id" element={<ProductPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
