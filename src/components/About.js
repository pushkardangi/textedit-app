import React, { useState } from "react";

export default function About() {

  const [Theme, setTheme] = useState({
    color: "black",
    backgroundColor: "white",
    border: "1px solid black"
  });

  const [btnText, setBtnText] = useState("Enable dark mode");

  function toggleTheme() {
    if (Theme.color === "black") {
      setTheme(
        {
          color: "white",
          backgroundColor: "black",
          border: "1px solid white"
        },
        setBtnText("Enable light mode")
        );
    } else {
        setTheme(
            {
                color: "black",
                backgroundColor: "white",
                border: "1px solid black"
        },
        setBtnText("Enable dark mode")
      );
    }
  }
  return (
    <>
      <div className="container my-5" style={Theme}>
        <h2 className="text-center">About Us</h2>

        <div className="card my-4" style={Theme}>
          <h5 className="card-header">Featured</h5>
          <div className="card-body">
            <h5 className="card-title">Special title treatment</h5>
            <p className="card-text">
              With supporting text below as a natural lead-in to additional
              content.
            </p>
            <a href="/" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>

        <div className="accordion accordion-flush my-4" id="accordionFlushExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingOne">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseOne"
                aria-expanded="false"
                aria-controls="flush-collapseOne"
                style={Theme}
              >
                Accordion Item #1
              </button>
            </h2>
            <div
              id="flush-collapseOne"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingOne"
              data-bs-parent="#accordionFlushExample"
              style={Theme}
            >
              <div className="accordion-body">
                Placeholder content for this accordion, which is intended to
                demonstrate the <code>.accordion-flush</code> class. This is the
                first item's accordion body. Placeholder content for this
                accordion, which is intended to demonstrate the{" "}
                <code>.accordion-flush</code> class. This is the first item's
                accordion body. Placeholder content for this accordion, which is
                intended to demonstrate the <code>.accordion-flush</code> class.
                This is the first item's accordion body.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseTwo"
                aria-expanded="false"
                aria-controls="flush-collapseTwo"
                style={Theme}
              >
                Accordion Item #2
              </button>
            </h2>
            <div
              id="flush-collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingTwo"
              data-bs-parent="#accordionFlushExample"
              style={Theme}
            >
              <div className="accordion-body">
                Placeholder content for this accordion, which is intended to
                demonstrate the <code>.accordion-flush</code> class. This is the
                second item's accordion body. Let's imagine this being filled
                with some actual content.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingThree">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseThree"
                aria-expanded="false"
                aria-controls="flush-collapseThree"
                style={Theme}
              >
                Accordion Item #3
              </button>
            </h2>
            <div
              id="flush-collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingThree"
              data-bs-parent="#accordionFlushExample"
              style={Theme}
            >
              <div className="accordion-body">
                Placeholder content for this accordion, which is intended to
                demonstrate the <code>.accordion-flush</code> class. This is the
                third item's accordion body. Nothing more exciting happening
                here in terms of content, but just filling up the space to make
                it look, at least at first glance, a bit more representative of
                how this would look in a real-world application.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <button
          type="button"
          className="btn btn-outline-dark"
          onClick={toggleTheme}
        >
          {btnText}
        </button>

      </div>
    </>
  );
}
