import "./App.css";
import Checkout from "./Checkout";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./Login";
import { useEffect } from "react";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Footer from "./Footer";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Payment from "./Payment";
import Orders from "./Orders";
import ScrollToTop from "./ScrollToTop";
const promise = loadStripe(
  "pk_test_51HZx4WJ1j9K7KZvqnVOm2to1bAIV49d6sssObJWzQrnMpeJTNxFfyurGG0wqTbTBMYYqVN0Ig33cN4XDBp8ApT3i00NZhdOW02"
);

function App() {
  const [{ basket }, dispatch] = useStateValue();
  useEffect(() => {
    //wil only run once when the app component loads.....
    auth.onAuthStateChanged((authUser) => {
      console.log("the user is <<<", authUser);
      if (authUser) {
        localStorage.setItem("authUser", JSON.stringify(authUser));
        // the user just logged in / the user was logged in
        dispatch({ type: "SET_USER", user: authUser });
      } else {
        
        // the user is logged out
        dispatch({ type: "SET_USER", user: null });
      }
    });
  }, []);
  // BEM
  return (
    <Router>
      <ScrollToTop/>
      <div className="App">
        <Switch>
          <Route path="/orders">
            <Header></Header>
            <Orders />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/payment">
            <Header></Header>
            <Elements stripe={promise}>
              <Payment></Payment>
            </Elements>
          </Route>
          <Route path="/checkout">
            <Header></Header>
            <Checkout></Checkout>
            <Footer></Footer>
          </Route>
          <Route path="/">
            <Header></Header>
            <Home></Home>
            <Footer></Footer>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
