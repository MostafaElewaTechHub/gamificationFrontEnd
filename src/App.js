import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import { Home } from "./pages/Home";
import Tournments from "./pages/tournment";
import SignIn from "./pages/signIn";
import ProtectedRoute from "./components/protectedRoute";
import CreateTournments from "./pages/createTournments";
// import BasicExample from "./components/table";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route
          exact
          path="/tournments"
          element={
            <ProtectedRoute>
              {" "}
              <Tournments />{" "}
            </ProtectedRoute>
          }
        />
        <Route
          exact
          path="/create-tournments"
          element={
            <ProtectedRoute>
              {" "}
              <CreateTournments />{" "}
            </ProtectedRoute>
          }
        />
        <Route exact path="/signin" element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
