import React, { Suspense } from "react";
import "./App.css";
import { createBrowserHistory } from "history";
import { BrowserRouter as Router } from "react-router-dom";

const Routes = React.lazy(() => import("./routes"));

export const history = createBrowserHistory();

function App() {
  return (
    <div>
      <Router history={history}>
        <Suspense fallback={<span>Loading </span>}>
          <Routes />
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
