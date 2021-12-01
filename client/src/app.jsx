import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/home/home";
import Sets from "./pages/sets/sets";
import "./app.scss";

import Header from "./comps/Header/Header";
import Footer from "./comps/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <section className="Header">
        <Header />
      </section>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/set' exact component={Sets} />
        {/* <Route path='/set/set:name' exact component={SetsCards} /> */}
      </Switch>
      <section className="Footer">
        <Footer />
      </section>
    </BrowserRouter>
  );
}
export default App;