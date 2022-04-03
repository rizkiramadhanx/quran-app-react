import "./App.css";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import SuratList from "./Components/SuratList";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ReadSurah from "./Components/ReadSurah";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={SuratList} />
        <Route path="/surah/:number" component={ReadSurah} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
