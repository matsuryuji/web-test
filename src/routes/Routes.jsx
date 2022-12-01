import {
  BrowserRouter as Router,
  Route,
  Routes as Switch
} from "react-router-dom";
import Home from "pages/Home";
import UserInfo from "pages/UserInfo";

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/user/:userId" element={<UserInfo />} />
      </Switch>
    </Router>
  );
}
