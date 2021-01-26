import React from "react";
import IndividualPost from "./IndividualPost";
import debounce from "lodash.debounce";
import { Button, Spinner, Alert } from "react-bootstrap";

class SavedPosts extends React.Component {
  render() {
    return (
      <>
        {this.props.postArray.map((singlePost, index) => {
          if (this.props.savedPosts.includes(singlePost._id)) {
            <IndividualPost
              user={this.props.user}
              post={singlePost}
              key={index}
              peepo={this.props.addToBlacklist}
              addToSaved={this.props.addToSaved}
              profiles={this.props.profiles}
              fetchPosts={this.props.fetchPosts}
            />;
          }
        })}
      </>
    );
  }
}

export default SavedPosts;
