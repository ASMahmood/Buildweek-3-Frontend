import React from "react";
import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import "./Footer.css";
import Footer from "./components/Footer";
import NavbarApp from "./components/Navbar";
import ProfilePage from "./components/ProfilePage";
import { BrowserRouter, Route } from "react-router-dom";
import OtherProfile from "./components/OtherProfile";
import FeedPage from "./components/FeedPage";
import SignIn from "./components/SignIn";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        

        <NavbarApp />
        <Route path="/me" exact component={ProfilePage} />
        <Route path="/profile/:id" component={OtherProfile} />
        <Route path="/feed" exact render={(props) => <FeedPage {...props} />} />
        <Footer />
   
        
        <Route path="/" exact component={SignIn} />
        
      </BrowserRouter>
    );
  }
}

export default App;
