import React from "react";
import LinkedinLearning from "./LinkedinLearning";
import PeopleRelated from "./PeopleRelated";

class RightSideColumn extends React.Component {
  state = {
    other: [],
  };
  componentDidMount = () => {
    this.fetchProfiles();
  };
  fetchProfiles = async () => {
    try {
      let response = await fetch(process.env.REACT_APP_SERVER + "/profile/");
      let parsedResponse = await response.json();
      const filteredProfiles = parsedResponse.filter(
        (profile) => profile._id !== localStorage.getItem('profileID')
      );
      console.log(filteredProfiles);
      this.setState({ other: filteredProfiles });
    } catch (error) {
      console.log(error);
    }
  };
  render() {
    return (
      <div
        style={{ minWidth: "312px", position: "relative", top: "0px" }}
        className="col-12 col-lg-4"
      >
        <PeopleRelated
          title="People also viewed"
          others={this.state.other.slice(0, 5)}
        />
        <PeopleRelated
          title="People you may know"
          others={this.state.other.slice(5, 5)}
        />
        <LinkedinLearning />
      </div>
    );
  }
}

export default RightSideColumn;
