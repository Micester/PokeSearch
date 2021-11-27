import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/home/home";
import Sets from "./pages/sets/sets";
import "./app.scss";

function App() {
  return (
    <BrowserRouter>
      {/* Header Component Goes Here */}
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/sets' exact component={Sets} />
      </Switch>
      {/* Footer Component Goes Here */}
    </BrowserRouter>
  );
}
export default App;