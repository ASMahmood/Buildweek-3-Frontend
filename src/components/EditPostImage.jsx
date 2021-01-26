import React from "react";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import { Button, Form } from "react-bootstrap";

class EditPostImage extends React.Component {
  state = {
    show: false,
    image: {},
  };

  postImage = async (e) => {
    e.preventDefault();
    try {
      let post = new FormData();
      let chosenImage = document.querySelector("#postImageDood").files[0];
      await this.setState({ image: chosenImage });
      await post.append("post", this.state.image);
      console.log(chosenImage);
      console.log(this.state.image);
      console.log(post);
      if (post) {
        let response = await fetch(
          "https://striveschool-api.herokuapp.com/api/posts/" +
          this.props.postID,
          {
            method: "POST",
            body: post,
            headers: new Headers({
              Authorization: `Bearer ${process.env.REACT_APP_BE_URL}`,
              Accept: "application/json",
            }),
          }
        );
        console.log(response);
        if (response.ok) {
          this.props.fetchPosts();
          this.setState({ show: false });
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
  render() {
    if (this.state.show) {
      return (
        <>
          <div
            className="dreamsDropDistance"
            onClick={() => this.setState({ show: false })}
          >
            <div className="iconMaster">
              <AttachFileIcon />
            </div>
            <div className="megatron">
              <span className="is">Attach an image?</span>
              <span className="dumb">Share a funny pic, or something!</span>
            </div>
          </div>
          <div className="postDrop">
            <Form onSubmit={(e) => this.postImage(e)}>
              <Form.Group>
                <Form.Label htmlFor="postImageDood">
                  Change Post Image:
                </Form.Label>
                <Form.Control type="file" id="postImageDood" accept="image/*" />
              </Form.Group>
              <Button type="submit">SEND</Button>
            </Form>
          </div>
        </>
      );
    } else {
      return (
        <div
          className="dreamsDropDistance"
          onClick={() => this.setState({ show: true })}
        >
          <div className="iconMaster">
            <AttachFileIcon />
          </div>
          <div className="megatron">
            <span className="is">Attach an image?</span>
            <span className="dumb">Share a funny pic, or something!</span>
          </div>
        </div>
      );
    }
  }
}

export default EditPostImage;
