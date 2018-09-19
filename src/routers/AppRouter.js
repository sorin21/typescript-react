import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";
import AddJoke from '../components/AddJoke/AddJoke';
import Dashboard from '../components/Dashboard/Dashboard';
import EditJoke from '../components/EditJoke/EditJoke';
import NotFound from '../components/NotFound/NotFound';
import Header from '../components/Header/Header';
const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/add" component={AddJoke} />
        {/* <Route path="/edit" component={EditJoke} /> */}
        <Route component={NotFound} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
