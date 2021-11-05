import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

// user route
import PrivateRoute from "./routes/PrivateRoute";
// user pages
import HomeUser from "./pages/user/Home";
import DetailTourUser from "./pages/user/DetailTour";
import Payment from "./pages/user/payment";
import Profile from "./pages/user/profile";

function App() {
  return (
    <Router>
      <Switch>
        {/* user */}
        <Route exact path="/" component={HomeUser} />
        <PrivateRoute exact path="/Payment" component={Payment} />
        <PrivateRoute exact path="/Profile" component={Profile} />
        <PrivateRoute path="/DetailTourUser/:id_tour" component={DetailTourUser} />
      </Switch>
    </Router>
  );
}

export default App;