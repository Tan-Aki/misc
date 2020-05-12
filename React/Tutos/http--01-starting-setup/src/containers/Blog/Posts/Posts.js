import React, { Component } from "react";
import PropTypes from "prop-types";
import axiosInstance from "../../../axiosInstance";
import { Route, Link } from "react-router-dom";

import FullPost from "../FullPost/FullPost";
import Post from "../../../components/Post/Post";

import "./Posts.css";

class Posts extends Component {
  state = {
    posts: [],
  };

  async componentDidMount() {
    console.log(this.props);
    try {
      const response = await axiosInstance.get("/posts");
      console.log(response);
      const posts = response.data.slice(0, 4);
      const updatedPosts = posts.map((post) => {
        return {
          ...post,
          author: "Tan",
        };
      });
      this.setState({ posts: updatedPosts });
    } catch (error) {
      console.log("err : ", error);
      //   this.setState({ error: true });
    }
  }

  postSelectedHandler = (id) => {
    // // const selectedPost = this.state.posts.find(post => post.id === id);
    // // console.log(selectedPost);

    // this.setState({ selectedPostId: id });

    this.props.history.push({ pathname: "/posts/" + id });

    // pushes apage on the stack
    // same below, different syntax
    // this.props.history.push("/posts/" + id);
  };

  render() {
    let posts = <p style={{ textAlign: "center" }}>Something went wrong !</p>;

    if (!this.state.error) {
      posts = this.state.posts.map((post) => {
        return (
          //   <Link to={"/posts/" + post.id} key={post.id}>
          <Post
            key={post.id}
            title={post.title}
            author={post.author}
            clicked={() => this.postSelectedHandler(post.id)}
          />
          //   </Link>
        );
      });
    }

    return (
      <div>
        <section className="Posts">{posts}</section>
        <Route path={this.props.match.url + "/:id"} exact component={FullPost} />
      </div>
    );
  }
}

export default Posts;
