import React from "react";
import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import "./Footer.css";
import Footer from "./components/Footer";
import NavbarApp from "./components/Navbar";
import ProfilePage from "./components/ProfilePage";
import { BrowserRouter, Route } from "react-router-dom";
import Experience from "./components/Experience";
import OtherProfile from "./components/OtherProfile";
import FeedPage from "./components/FeedPage";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <NavbarApp />
        <Route path="/" exact component={ProfilePage} />
        <Route path="/profile/:id" component={OtherProfile} />
        <Route path="/feed" exact render={(props) => <FeedPage {...props} />} />
        <Route path="/experience" exact component={Experience} />
        <Footer />
      </BrowserRouter>
    );
  }
}

export default App;
