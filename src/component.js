import React from 'react';
import Header from "./components/header"
import Home from "./pages/home";
import Footer from "./components/footer";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="app">
      <Header />
      <Home />
      <Footer />
    </div>
  )
}

export default App