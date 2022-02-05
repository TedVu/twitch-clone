import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

const PageOne = () => {
  return (
    <div>
      <Link to="/pageTwo"> Page 1 </Link>
    </div>
  );
};

const PageTwo = () => {
  return <div> Page 2</div>;
};

// BrowserRouter can make deployment really difficult.

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Route path="/" exact component={PageOne} />
          <Route path="/pageTwo" component={PageTwo} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
