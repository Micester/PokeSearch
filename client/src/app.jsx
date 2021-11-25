import "./app.scss";
// import Home from "./pages/Home/Home";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    {/* Header Component Goes Here */}
    <Switch>
    {/* <Route path='/' exact component={Home} />   */}
    </Switch>
    {/* Footer Component Goes Here */}
    </BrowserRouter>
  );
}
export default App;