import { BrowserRouter } from "react-router-dom";

import AppRoutes from "./router/AppRoutes";
import FooterComponent from "./components/FooterComponent/index.jsx";

import './App.css'

function App() {

  return (
    <BrowserRouter>
      <div className="d-flex flex-column min-vh-100">
        <main className="flex-fill pt-5 overflow-x-hidden">
          <AppRoutes />
        </main>
        <FooterComponent />
      </div>

    </BrowserRouter>
  )
}

export default App;
