import React, { Component } from "react";
import { ProductConsumer } from "../context";
import { Link } from "react-router-dom";
import { ButtonContainer } from "./Button";

export default class Details extends Component {
  state = {
    showMore: false
  };
  render() {
    return (
      <ProductConsumer>
        {value => {
          const {
            id,
            img,
            price,
            company,
            info,
            title,
            inCart
          } = value.detailProduct;

          console.log(`the length of info is ${info.length}`);

          const { showMore } = this.state;

          return (
            <div className="container py-5">
              {/* title */}
              <div className="row">
                <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                  <h1>{title}</h1>
                </div>
              </div>
              {/* End title */}
              {/* Product info */}
              <div className="row">
                <div className="col-10 mx-auto col-md-6 my-3">
                  <img src={img} alt="product" className="img-fluid" />
                </div>
                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                  <h2>Model: {title}</h2>
                  <h5 className="Pacifico text-uppercase text-muted mt-3 mb-2">
                    Made by: {company}
                  </h5>
                  <h4 className="text-blue mt-3">
                    <strong>
                      Price : <span>$</span> {price}
                    </strong>
                  </h4>
                  <p className="text-capitalize font-weight-bold mt-3 mb-0">
                    Some info about the product:
                  </p>
                  <div className="text-muted lead">
                    {showMore === true ? (
                      <div>
                        <p>
                          {info}
                          <span>
                            <button
                              type="button"
                              className="btn btn-link"
                              onClick={() => this.setState({ showMore: false })}
                            >
                              ... show less
                            </button>
                          </span>
                        </p>
                      </div>
                    ) : (
                      <div>
                        <p>
                          {info.substring(1, 200)}
                          ...
                          <button
                            type="button"
                            className="btn btn-link"
                            onClick={() => this.setState({ showMore: true })}
                          >
                            ... show More
                          </button>
                        </p>
                      </div>
                    )}
                  </div>
                  {/* Buttons */}
                  <Link to="/">
                    <ButtonContainer>Back to store</ButtonContainer>
                  </Link>
                  <ButtonContainer
                    cart
                    disabled={inCart ? true : false}
                    onClick={() => {
                      value.addToCart(id);
                      value.openModal(id);
                    }}
                  >
                    {inCart ? "in Cart" : "add to Cart"}
                  </ButtonContainer>
                </div>
              </div>
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}
