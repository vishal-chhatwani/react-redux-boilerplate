import React from "react";

import { Link } from "react-router-dom";

const NotFound = () => (
  <div className="not-found-ctn">
    <div className="not-found">
      <img src="/images/not-found.png" alt="404 Error" />
      <h2>Sorry, the requested page could not be found</h2>
      <p>
        <Link className="app-link" to={`/`}>
          Click here to go to the home page
        </Link>
      </p>
    </div>
  </div>
);

export default NotFound;
