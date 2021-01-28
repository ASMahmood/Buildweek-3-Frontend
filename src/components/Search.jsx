import React, { Component } from "react";
import Downshift from "downshift";
import IndividualPerson from "./IndividualPerson";
import "./styles/Navbar.css";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };

    this.fetchUsers = this.fetchUsers.bind(this);
    this.inputOnChange = this.inputOnChange.bind(this);
  }

  async inputOnChange(event) {
    if (!event.target.value) {
      return;
    } else {
      // this.fetchUsers(event.target.value);
      console.log("before setState: ", this.state.users);

      // this.setState({users: ['whatever']});
      console.log("after setState: ", this.state.users);
      await this.fetchUsers();
      this.setState({
        users: this.state.users.filter(
          (user) =>
            user.name && user.name.toLowerCase().includes(event.target.value)
        ),
      });
    }
  }

  downshiftOnChange(selectedUser) {
    // alert(`you have selected ${selectedUser.name} ${selectedUser.surname}`);
  }

  componentDidMount = () => {
    this.fetchUsers();
  };

  //   fetchMovies(movie) {
  //     const moviesURL = `https://api.themoviedb.org/3/search/movie?api_key=1b5adf76a72a13bad99b8fc0c68cb085&query=${movie}`;
  //     axios.get(moviesURL).then(response => {
  //       this.setState({ movies: response.data.results });
  //     });
  //   }

  fetchUsers = async () => {
    try {
      let response = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/`,
        {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_BE_URL}`,
          },
        }
      );
      let parsedResponse = await response.json();
      // console.log('parsedRes::::::::', parsedResponse);
      //   profiles.push(parsedResponse);
      this.setState({ users: parsedResponse });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <Downshift
        onChange={this.downshiftOnChange}
        itemToString={(item) => (item ? item.id : "")}
      >
        {({
          selectedItem,
          getInputProps,
          getItemProps,
          highlightedIndex,
          isOpen,
          inputValue,
          getLabelProps,
        }) => (
          <div>
            <br />
            <input
              class="search-btn"
              {...getInputProps({
                placeholder: "Search users",
                onChange: this.inputOnChange,
              })}
            />
            {isOpen ? (
              <div className="downshift-dropdown">
                {this.state.users.slice(0, 5).map((item, index) => (
                  <div
                    className="dropdown-item"
                    {...getItemProps({ key: index, index, item })}
                    style={{
                      backgroundColor:
                        highlightedIndex === index ? "lightgray" : "white",
                      fontWeight: selectedItem === item ? "bold" : "normal",
                    }}
                  >
                    {item.name && item.surname && (
                      <IndividualPerson
                        style={{ fontSize: "smaller" }}
                        name={item.name}
                        job={item.title}
                        pic={item.image}
                        userid={item._id}
                        divider={index === 4 ? false : true}
                      />
                    )}
                    {/* item.name + ' '+ item.surname*/}
                  </div>
                ))}
              </div>
            ) : null}
          </div>
        )}
      </Downshift>
    );
  }
}

export default Search;
