import React, { Component } from "react";

export default class Default extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 text-title text-center text-uppercase mx-auto pt-5">
            <h1 className="display-3">404</h1>
            <h1>error</h1>
            <h4 className="mt-4">Page not found</h4>
            <hr />
            <h5 className="mt-4 Mukta">
              The requested URL{" "}
              <span className="text-danger">
                {this.props.location.pathname}
              </span>{" "}
              was not found
            </h5>
          </div>
        </div>
      </div>
    );
  }
}
