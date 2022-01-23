import "./styles/style.scss";
import './App.css';
import Header from "./companents/header/Header";
import {Routes, Route} from "react-router-dom";
import About from "./pages/about/about";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Header/>}/>
                <Route path="/about" element={<About/>}/>
            </Routes>
        </div>
    );
}

export default App;
