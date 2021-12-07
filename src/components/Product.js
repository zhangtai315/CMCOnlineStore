import React from "react";
import Button from "react-bootstrap/Button";
const Product = (props) => {
  return (
    <div className="container">
      <div style={{ backgroundColor: "#0A2352" }}>
        <div className="my-col-md-6">
          <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
            <div className="col p-4 d-flex flex-column position-static">
              <strong className="d-inline-block mb-2 text-primary">book</strong>
              <h3 className="mb-0">
                <a style={{ color: "white" }}>{props.name}</a>
              </h3>
              <div className="mb-1 text-muted">description</div>
              <p className="card-text mb-auto">
                <a style={{ color: "white" }}>
                  {props.description.substring(0, 80) + " ..."}
                </a>
              </p>
              <a style={{ color: "#02deff" }}>${props.price}</a>
              <Button
                variant="info"
                onClick={() =>
                  props.onAdd({
                    id: props.id,
                    name: props.name,
                    price: props.price,
                  })
                }
              >
                Add to cart
              </Button>
            </div>
            <div className="col-auto d-none d-lg-block">
              <img src={props.smallImagePath} alt={props.name}></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
