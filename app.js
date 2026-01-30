import React from "react";
import ReactDOM from "react-dom/client";

const title = (
  <h1 className="heading" tabIndex="5">
    Hello from react!
  </h1>
);

const HeadingComponent = () => (
    <div className="container">
        {title}
        <h1>Hello from react component</h1>
    </div>
)

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
