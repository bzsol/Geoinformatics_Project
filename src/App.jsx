
import { BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Home from './pages/Home';
import Error from "./pages/Error";
import Documentation from "./pages/Documentation";
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/docs" element={<Documentation/>} />
        <Route path="*" element={<Error/>}  />
      </Routes>
    </Router>
  )
}