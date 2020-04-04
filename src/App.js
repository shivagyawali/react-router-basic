import React from "react";
import { Link } from "react-router-dom";

const App = () => {
  return (
    <div className="Container ">
      <h1>App Component</h1>
      <div class="row">
        <div class="col s12 m6">
          <div class="card blue-grey darken-1">
            <div class="card-content white-text">
              <span class="card-title">Card Title</span>
              <p>
                I am a very simple card. I am good at containing small bits of
                information. I am convenient because I require little markup to
                use effectively.
              </p>
            </div>
            <div class="card-action">
              <a>
                <Link to="/card"> Click to get Card</Link>
              </a>
              <a>
                <Link to="/card"> Click to get Card</Link>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
