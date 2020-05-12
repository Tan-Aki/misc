import React, { Component, Fragment } from "react";
import { Link, Route } from "react-router-dom";

import Course from "../Course/Course";

import "./Courses.css";

class Courses extends Component {
  state = {
    courses: [
      { id: 1, title: "Angular - The Complete Guide" },
      { id: 2, title: "Vue - The Complete Guide" },
      { id: 3, title: "PWA - The Complete Guide" },
    ],
  };

  courseSelectedHandler = (id, title) => {
    // this.props.history.push("/courses/" + id);
    this.props.history.push({
      search: "?title=" + title,
      pathname: this.props.match.url + "/" + id,
    });
  };

  render() {
    return (
      <div>
        <h1>Amazing Udemy Courses</h1>
        <section className="Courses">
          {this.state.courses.map((course) => {
            return (
              <article
                className="Course"
                key={course.id}
                onClick={() => this.courseSelectedHandler(course.id, course.title)}
              >
                {course.title}
              </article>
            );
          })}
        </section>
        <Route path={"/courses/:id"} component={Course} />
      </div>
    );
  }
}

export default Courses;
