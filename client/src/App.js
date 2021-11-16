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

// admin pages
import HomeAdmin from "./pages/admin/Home";
import AddTripAdmin from "./pages/admin/AddTrip";
import AddQtyAdmin from "./pages/admin/AddQty";
import ListTransactionAdmin from "./pages/admin/ListTransaction";

function App() {
  return (
    <Router>
      <Switch>
        {/* user */}
        <Route exact path="/" component={HomeUser} />
        <PrivateRoute exact path="/Payment" component={Payment} />
        <PrivateRoute exact path="/Profile" component={Profile} />
        <PrivateRoute path="/DetailTourUser/:id_tour" component={DetailTourUser} />

        <Route exact path="/HomeAdmin" component={HomeAdmin} />
        <Route exact path="/AddTripAdmin" component={AddTripAdmin} />
        <Route exact path="/AddQtyAdmin" component={AddQtyAdmin} />
        <Route exact path="/ListTransactionAdmin" component={ListTransactionAdmin} />
      </Switch>
    </Router>
  );
}

export default App;