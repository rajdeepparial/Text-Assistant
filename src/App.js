import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      
      <Router>
        <Navbar title="TextAssistant" aboutText="Home" />
        
        <Switch> 
          <Route path="/" component= {TextForm} exact/>
          <Route path="/" component={About} />
          <Route component={Error}/>
        </Switch>
      </Router>
      {/* <div>
        <TextForm heading="Enter your text here" />
      </div> */}
         {/* <About/> */}
      <div className="container my-5">
        <Footer />
      </div>
    </div>
  );
}

export default App;
