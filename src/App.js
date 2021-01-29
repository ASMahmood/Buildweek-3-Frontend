import React from "react";
import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import "./Footer.css";
import Footer from "./components/Footer";
import NavbarApp from "./components/Navbar";
import ProfilePage from "./components/ProfilePage";
import { withRouter, Route } from "react-router-dom";
import OtherProfile from "./components/OtherProfile";
import FeedPage from "./components/FeedPage";
import SignIn from "./components/SignIn";
import Register from "./components/Register";

const exclusionArray = ["/", "/register"];

class App extends React.Component {
  render() {
    return (
      <>
        {exclusionArray.indexOf(this.props.location.pathname) < 0 && (
          <NavbarApp />
        )}

        <Route path="/me" exact component={ProfilePage} />
        <Route path="/profile/:id" component={OtherProfile} />
        <Route path="/feed" exact render={(props) => <FeedPage {...props} />} />

        {exclusionArray.indexOf(this.props.location.pathname) < 0 && <Footer />}
        <Route path="/" exact component={SignIn} />
        <Route path="/register" exact component={Register} />
      </>
    );
  }
}

export default withRouter(App);
