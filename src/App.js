import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Components/Home/Home/Home';
import Pricing from './Components/Pages/Pricing/Pricing';
import AboutUsPage from './Components/Pages/AboutUsPage/AboutUsPage';
import ContactUs from './Components/Pages/ContactUs/ContactUs';
import Contact from './Components/MemberShifFrom/MemberShifFrom';
import Payment from './components/Payment/Payment';
import StripPayment from './components/StripPayment/StripPayment';
import ProcessPayment from './components/StripPayment/ProcessPayment';


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/pricing">
          <Pricing />
        </Route>
        <Route path="/aboutUs">
          <AboutUsPage />
        </Route>
        <Route path="/contact">
          <ContactUs />
        </Route>
        <Route path="/memberShifFrom">
          <MemberShifFrom></MemberShifFrom>
        </Route>
        <Route path="/payment">
          <Payment></Payment>
        </Route>
        <Route path="/processPayment">
          <ProcessPayment></ProcessPayment>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
