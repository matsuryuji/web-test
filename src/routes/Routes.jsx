import { BrowserRouter as Router, Route, Routes as Switch } from 'react-router-dom';
import Home from 'pages/Home';

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' element={<Home/>} />
      </Switch>
    </Router>
  );
}
