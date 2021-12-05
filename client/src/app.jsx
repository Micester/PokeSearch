import { BrowserRouter, Switch, Route } from "react-router-dom";

// Components
import Header from "./comps/Header/Header";

import home from "./pages/home/home";
import sets from "./pages/sets/sets";

// Not Set up
// import SearchCards from './pages/searchPage/SearchCards';

import Footer from "./comps/Footer/Footer";

// Styles
import "./app.scss";

function App() {
  return (
    <BrowserRouter>
      <section className="Header">
        <Header />
      </section>

      <section className="Body">
        <Switch>
          <Route path='/' exact component={home} /> 
          <Route path='/set' exact component={sets} />
          {/* <Route path='/search' exact component={SearchCards} /> */}
        </Switch>
      </section>

      <section className="Footer">
        <Footer />
      </section>
    </BrowserRouter>
  );
}
export default App;