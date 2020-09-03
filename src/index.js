import React, { useContext, useReducer } from "react";
import ReactDOM from "react-dom";

import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

import Test from "./components/TestComponent";

import TodosContext from "./context";
import TodosReducer from "./reducer";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import HookFunc from "./components/HookFunc";
import Register from "./components/Register";
import Login from "./components/Login";
import Fetchin from "./components/Fetchin";
import Crude from "./components/Increment";

const MiApp = () => {
  const initialState = useContext(TodosContext);
  const [state, dispatch] = useReducer(TodosReducer, initialState);

  return (
    <BrowserRouter>
      <ul className="flex justify-center bg-blue-300 ">
        <li className="mr-3 px-2">
          <Link
            className="block py-1 px-2 hover:bg-blue-500 rounded-full"
            to="/"
          >
            Home
          </Link>
        </li>
        <li className="mr-3 px-2">
          <Link
            className="block py-1 px-2 hover:bg-blue-500 rounded-full"
            to="/test"
          >
            Test
          </Link>
        </li>
        <li className="mr-3 px-2 rounded-full">
          <Link
            className="block py-1 px-2 hover:bg-blue-500 rounded-full"
            to="/hookfunc"
          >
            HookFunc
          </Link>
        </li>
        <li className="mr-3 px-2 rounded-full">
          <Link
            className="block py-1 px-4 hover:bg-blue-500 rounded-full"
            to="/register"
          >
            Register
          </Link>
        </li>
        <li className="mr-3 px-2 rounded-full">
          <Link
            className="block py-1 px-2 hover:bg-blue-500 rounded-full"
            to="/login"
          >
            Login
          </Link>
        </li>
        <li className="mr-3 px-2 rounded-full">
          <Link
            className="block py-1 px-2 hover:bg-blue-500 rounded-full"
            to="/fetchin"
          >
            Fetchin
          </Link>
        </li>
        <li className="mr-3 px-2 rounded-full">
          <Link
            className="block py-1 px-2 hover:bg-blue-500 rounded-full"
            to="/increment"
          >
            Increment
          </Link>
        </li>
      </ul>

      <Switch>
        <Route exact path="/">
          <TodosContext.Provider value={{ state, dispatch }}>
            <TodoForm />
            <TodoList />
          </TodosContext.Provider>
        </Route>
        <Route path="/test" component={Test} />
        <Route path="/hookfunc" component={HookFunc} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/fetchin" component={Fetchin} />
        <Route path="/increment" component={Crude} />
      </Switch>
    </BrowserRouter>
  );
};

// ReactDOM.render(<Crude />, document.getElementById("root"));

ReactDOM.render(<MiApp />, document.getElementById("root"));
