import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/home/home";
import Sets from "./pages/sets/sets";
import Card from "./pages/card/card";

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
        {/* <Route path='/set/:id/card' component={Card} /> */}
        {/* <Route path='/card' exact component={Card} /> */}
        {/* <Route path='/searchCards/' exact component={SearchCards} /> */}
         
      </Switch>
      <section className="Footer">
        <Footer />
      </section>
    </BrowserRouter>
  );
}
export default App;