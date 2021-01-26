import React from "react";
import IndividualPost from "./IndividualPost";
import debounce from "lodash.debounce";
import { Button, Spinner, Alert } from "react-bootstrap";

class PostsColumn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      error: false,
      hasMore: true,
      isLoading: false,
      posts: [],
    };
    window.onscroll = debounce(() => {
      const {
        loadPosts,
        state: { error, isLoading, hasMore },
      } = this;

      if (error || isLoading || !hasMore) return;

      if (
        window.innerHeight + document.documentElement.scrollTop ===
        document.documentElement.offsetHeight
      ) {
        loadPosts();
      }
    }, 500);
  }
  componentDidMount() {
    console.log("Here ->" + this.props.posts)
  }
  componentWillMount() {
    this.loadPosts();
  }

  loadPosts = () => {
    this.setState({ isLoading: true });
    const nextPosts = this.props.postArray.splice(0, 2);

    this.setState({
      hasMore: this.props.postArray.length,
      isLoading: false,
      posts: [...this.state.posts, ...nextPosts],
    });
  };

  render() {
    const { error, hasMore, isLoading, posts } = this.state;

    return (
      <>
        {posts.map((singlePost, index) => (
          <IndividualPost
            user={this.props.user}
            post={singlePost}
            key={index}
            peepo={this.props.addToBlacklist}
            addToSaved={this.props.addToSaved}
            profiles={this.props.profiles}
            fetchPosts={this.props.fetchPosts}
          />
        ))}
        {isLoading && (
          <Button variant="primary" disabled>
            <Spinner
              as="span"
              animation="grow"
              size="sm"
              role="status"
              aria-hidden="true"
            />
            Loading...
          </Button>
        )}
        {!hasMore && (
          <Alert variant="success">You have seen all of the posts</Alert>
        )}
        {error && <Alert variant="danger">{error}</Alert>}
      </>
    );
  }
}

export default PostsColumn;
